using FiorellaBack.DAL;
using FiorellaBack.Models;
using FiorellaBack.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace FiorellaBack.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppDbContext _context;

        public HomeController(AppDbContext context)
        {
            _context = context;
        }


        public ActionResult Index()
        {
            HomeVM homeVM = new HomeVM
            {
                Experts = _context.Experts.ToList(),
                Flowers = _context.Flowers.Include(g => g.FlowerImages).Include(g => g.FlowersCategories).ThenInclude(g => g.Category).ToList()

            };

            return View(homeVM);
        }

    }

}