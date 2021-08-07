using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CBSMapInfo.Models
{
    public class District
    {
        [Key]
        public int ID { get; set; }
        public int MahalleKod { get; set; }
        public string MahalleAd { get; set; }
        public string Koordinatlar { get; set; }
    }
}
