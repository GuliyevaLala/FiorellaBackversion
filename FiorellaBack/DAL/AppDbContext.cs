using FiorellaBack.Models;
using FiorelloBack.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FiorellaBack.DAL
{
    public class AppDbContext: IdentityDbContext<AppUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Experts> Expertss { get; set; }
        public DbSet<Flower> Flowers { get; set; } 
        public DbSet<Category> Categories { get; set; }
        public DbSet<FlowerCategory> FlowersCategories { get; set; }
        public DbSet<FlowerImage> FlowerImages { get; set; }
        public DbSet<Campaign> Campaigns { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<FlowerTag> FlowerTags { get; set; }
        public DbSet<Setting> Settings { get; set; }
        public DbSet<Slider> Sliders { get; set; }

    }
}
   