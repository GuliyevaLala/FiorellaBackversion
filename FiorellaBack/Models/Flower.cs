using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FiorellaBack.Models
{
    public class Flower
    {
        public int Id { get; set; }
        [Required]
        [StringLength(maximumLength: 70)]
        public string Name { get; set; }
        [Required]
        public double Price { get; set; }
        [Required]
        [StringLength(maximumLength: 500)]
        public string Description { get; set; }
        [Required]
        public int SKUCode { get; set; }
        [StringLength(maximumLength: 15)]
        public string Weight { get; set; }
        [StringLength(maximumLength: 50)]
        public string Dimension { get; set; }
        public bool InStock { get; set; }
        public int? CampaignId { get; set; }
        public Campaign Campaign { get; set; }
        public List<FlowerImage> FlowerImages { get; set; }
        public List<FlowerCategory> FlowerCategories { get; set; }
        public List<FlowerTag> FlowerTags { get; set; }


    }
}
