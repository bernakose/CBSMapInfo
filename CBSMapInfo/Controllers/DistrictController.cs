using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using CBSMapInfo.Models;

namespace CBSMapInfo.Controllers
{
    public class DistrictController : Controller
    {

        private readonly MapContext _mapContext;

        public DistrictController(MapContext context)
        {
            _mapContext = context;
        }

        // GET: Districts
        public async Task<IActionResult> Index()
        {
            return View(await _mapContext.District.ToListAsync());
        }

        // GET: Districts/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var district = await _mapContext.District
                .FirstOrDefaultAsync(m => m.ID == id);
            if (district == null)
            {
                return NotFound();
            }

            return View(district);
        }

        // GET: Districts/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Districts/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ID,DistrictCode,DistrictName,Coordinates")] District district)
        {
            if (ModelState.IsValid)
            {
                _mapContext.Add(district);
                await _mapContext.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(district);
        }

        // GET: Districts/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var district = await _mapContext.District.FindAsync(id);
            if (district == null)
            {
                return NotFound();
            }
            return View(district);
        }

        // POST: Districts/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ID,DistrictCode,DistrictName,Coordinates")] District district)
        {
            if (id != district.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _mapContext.Update(district);
                    await _mapContext.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!DistrictExists(district.ID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(district);
        }

        // GET: Districts/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var district = await _mapContext.District
                .FirstOrDefaultAsync(m => m.ID == id);
            if (district == null)
            {
                return NotFound();
            }

            return View(district);
        }

        // POST: Districts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var district = await _mapContext.District.FindAsync(id);
            _mapContext.District.Remove(district);
            await _mapContext.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool DistrictExists(int id)
        {
            return _mapContext.District.Any(e => e.ID == id);
        }


        [HttpPost]
        public JsonResult DistrictAdd(string DistrictName, string Coordinates)
        {

            try
            {
                District dr = new District();
                dr.DistrictName = DistrictName;
                dr.Coordinates = Coordinates;

                District ds = _mapContext.District.FirstOrDefault(a => a.DistrictName == DistrictName);

                if (ds != null)
                {
                    string messages = "Aynı mahalle adı ile kayıt zaten mevcut!";

                    return Json(false);

                }
                else
                {
                    _mapContext.District.Add(dr);
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
