using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CBSMapInfo.Models
{
    public class Door
    {
        [Key]
        public int ID { get; set; }
        public int DoorNo { get; set; }
        public string Coordinates { get; set; }

    }
}
