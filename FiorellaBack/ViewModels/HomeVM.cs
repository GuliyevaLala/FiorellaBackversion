using FiorellaBack.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FiorellaBack.ViewModels
{
    public class HomeVM
    {
        public List<Experts> Expertss { get; set; }
        public List<Flower> Flowers { get; set; }
        public Setting Setting { get; set; }
        public List<Category> Categories { get; set; }


    }
}
