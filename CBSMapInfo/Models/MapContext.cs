using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Reflection;

namespace CBSMapInfo.Models
{
    public class MapContext: DbContext
    {
        protected readonly IConfiguration Configuration;

        public MapContext(DbContextOptions<MapContext> options, IConfiguration configuration) : base(options)
        {
            Configuration = configuration;
        }
        protected MapContext(DbContextOptions options, IConfiguration configuration)
                                                                     : base(options)
        {
            Configuration = configuration;
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

                base.OnConfiguring(optionsBuilder.UseSqlServer(Configuration.GetConnectionString("DevConnection")).EnableSensitiveDataLogging());
            }

        }

        public DbSet<District> District{ get; set; }
        public DbSet<Door> Door { get; set; }

    }
}
