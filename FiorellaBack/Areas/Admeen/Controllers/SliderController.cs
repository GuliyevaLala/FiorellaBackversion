using FiorellaBack.DAL;
using FiorellaBack.Extensions;
using FiorellaBack.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FiorellaBack.Areas.Admeen.Controllers
{
            [Area("Admeen")]
    public class SliderController : Controller
    {
        private readonly AppDbContext _context;
        private IWebHostEnvironment _env;
        public SliderController(AppDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }
        public IActionResult Index()
        {
            List<Slider> model = _context.Sliders.ToList();
            return View(model);
        }

        public IActionResult Create()
        {

            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Slider slider)
        {
            if (!ModelState.IsValid) return View();
            if (slider.ImageFile == null)
            {
                ModelState.AddModelError("ImageFile", "Shekil daxil edilməyib");
                return View();
            }
            if (!slider.ImageFile.IsImage())
            {
                ModelState.AddModelError("ImageFile", "Shekil formati daxil edin");
                return View();
            }
            if (!slider.ImageFile.IsSizeOkay(2))
            {
                ModelState.AddModelError("FileImage", "Shekilin olchusu 2 MB-dan chox ola bilmez");
                return View();
            }
            slider.SliderImage = slider.ImageFile.SaveImage(_env.WebRootPath, "Assets/photos");
            _context.Sliders.Add(slider);
            _context.SaveChanges();
            return RedirectToAction(nameof(Index));
        }

        public IActionResult Delete(int id)
        {
            Slider slider = _context.Sliders.FirstOrDefault(s => s.Id == id);
            Slider existSlider = _context.Sliders.FirstOrDefault(es => es.Id == slider.Id);
            if (existSlider == null) return NotFound();
            if (slider == null) return Json(new { status = 404 });

            FiorellaBack.Helpers.Helper.DeleteImg(_env.WebRootPath, "Assets/photos", slider.SliderImage);
            FiorellaBack.Helpers.Helper.DeleteImg(_env.WebRootPath, "Assets/photos", slider.SignatureImage);

            _context.Sliders.Remove(slider);
            _context.SaveChanges();
            return Json(new { status = 200 });
        }

    }
}