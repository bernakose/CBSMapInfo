using System.ComponentModel.DataAnnotations;

namespace CBSMapInfo.Models
{
    public class District
    {
        [Key]
        public int ID { get; set; }
        public string DistrictName { get; set; }
        public string Coordinates { get; set; }
    }
}
