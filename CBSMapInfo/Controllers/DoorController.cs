using CBSMapInfo.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CBSMapInfo.Controllers
{
    public class DoorController : Controller
    {
        private readonly MapContext _mapContext;

        public DoorController(MapContext mapContext)
        {
            _mapContext = mapContext;
        }
        public IActionResult Index()
        {
            return View();
        }
        public ActionResult DoorAdd()
        {
            return View();
        }
        [HttpPost]
        public JsonResult DoorAdd(int DoorNo, int DistrictCode, string Coordinates)
        {
            try
            {
                Door dn = new Door();
                dn.DoorNo = DoorNo;
                dn.Coordinates = Coordinates;

                Door dk = _mapContext.Door.FirstOrDefault(a => a.DoorNo == DoorNo);

                if (dk != null)
                {
                    string messages = "Aynı kapı kaydı zaten mevcut!";

                    return Json(false);
                }
                else
                {
                    _mapContext.Door.Add(dn);
                    _mapContext.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                return Json(false);

            }
            string message = "Kayıt Başarılı!";

            return Json(true);           
        }
    }
}
