using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FiorellaBack.Models
{
    public class Setting
    {
        public int Id { get; set; }
        [StringLength(maximumLength: 150)]
        public string Logo { get; set; }
        [Required]
        public string SearchIcon { get; set; }
        [Required]
        public string BasketIcon { get; set; }
        [StringLength(maximumLength: 150)]
        public string InstagramUrl { get; set; }
        [StringLength(maximumLength: 150)]
        public string FacebookUrl { get; set; }
    }
}
