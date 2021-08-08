using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CBSMapInfo.Models
{
    public class MapContext: DbContext
    {
        public MapContext(DbContextOptions<MapContext> options) : base(options)
        {

        }

        public DbSet<District> Districts { get; set; }
        public DbSet<Door> Doors { get; set; }
    }
}
