using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FiorellaBack.Models
{
    public class Category
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Fill the blank")]
        [StringLength(maximumLength: 20, ErrorMessage = "The name of the category cannot be longer than 20 characters.")]
        public string Name { get; set; }
        public List<FlowerCategory> FlowersCategories { get; set; }

    }
}