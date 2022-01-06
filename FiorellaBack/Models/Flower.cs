using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FiorellaBack.Models
{
    public class Flower
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public int Code { get; set; }
        public string Weight { get; set; }
        public string Dimension { get; set; }
        public bool InStock { get; set; }
        public List<FlowerCategory> FlowersCategories { get; set; }
        public List<FlowerImage> FlowerImages { get; set; }
    }
}
