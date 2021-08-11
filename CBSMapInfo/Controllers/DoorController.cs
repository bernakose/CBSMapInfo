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
        public JsonResult DoorAdd(Door doorid)
        {
            _mapContext.Doors.Add(doorid);
            _mapContext.SaveChanges();

            string message = "Kayıt Başarılı!";

            return Json(true);
        }
    }
}
