using FiorellaBack.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FiorellaBack.DAL
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Experts> Experts { get; set; }
        //public DbSet<Speciality> Specialities { get; set; }

        //public DbSet<Setting> Settings { get; set; }

    }
}