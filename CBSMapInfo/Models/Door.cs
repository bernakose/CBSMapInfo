using System.ComponentModel.DataAnnotations;

namespace CBSMapInfo.Models
{
    public class Door
    {
        [Key]
        public int ID { get; set; }
        public int DoorNo { get; set; }
        public int DistrictCode { get; set; }
        public string Coordinates { get; set; }
        //public District District { get; set; }

    }
}
