using FiorellaBack.DAL;
using FiorellaBack.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FiorellaBack.Controllers
{
    public class FlowerController : Controller
    {
        private readonly AppDbContext _context;
        public FlowerController(AppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index(int page = 1)
        {

            ViewBag.CurrentPage = page;
            ViewBag.TotalPage = Math.Ceiling((decimal)_context.Flowers.Count() / 1);

              List<Flower> model = _context.Flowers.Include(f => f.FlowerCategories).ThenInclude(fc => fc.Category).Include(f => f.Campaign).Include(f => f.FlowerImages).Skip((page - 1) * 1).Take(1).ToList();
            return View(model);
        }

        public IActionResult Details(int id)
        {

            Flower flower = _context.Flowers.Include(f => f.Campaign).Include(f => f.FlowerCategories).ThenInclude(fc => fc.Category).Include(f => f.FlowerTags).ThenInclude(ft => ft.Tag).Include(f => f.FlowerImages).FirstOrDefault(f => f.Id == id);
            if (flower == null) return NotFound();
            return View(flower);
        }
        public IActionResult SearchResult(string word)
        {
            List<Flower> prdcts = _context.Flowers.Where(f => f.Name.ToLower().Contains(word.ToLower())).Include(f => f.FlowerCategories).ThenInclude(fc => fc.Category).Include(f => f.Campaign).Include(f => f.FlowerImages).ToList();
            return View(prdcts);


        }

    }
}

