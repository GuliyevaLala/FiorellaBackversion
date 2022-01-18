using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FiorellaBack.Areas.Admeen.Controllers
{
    public class Dashboard : Controller
    {

        [Area("Admeen")]

        public IActionResult Index()
        {
            return View();
        }
    }
}
