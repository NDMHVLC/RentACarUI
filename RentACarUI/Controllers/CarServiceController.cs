using Microsoft.AspNetCore.Mvc;

namespace HVLC.RentACar.UI.Areas.Admin.Controllers
{
 
    public class CarServiceController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Add()
        {
            return View();
        }

        public IActionResult Update()
        {
            return View();
        }
    }
}
