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
        public int DistrictId { get; set; }
        public int DistrictCode { get; set; }
        public string DistrictName { get; set; }
        public string Coordinates { get; set; }
    }
}
