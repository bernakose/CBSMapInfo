using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CBSMapInfo.Models
{
    public class Context:DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(LocalDb)\\v11.0;Database=CBSMapInfo;Trusted_Connection=True;MultipleActiveResultSets=true");
        }

        public DbSet<District> Districts { get; set; }
        public DbSet<Door> Doors { get; set; }
    }
}
