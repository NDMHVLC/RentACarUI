using Microsoft.AspNetCore.Mvc;

namespace HVLC.RentACar.UI.Areas.Admin.Controllers
{
  
    public class HomeController : Controller
    {
       
        public IActionResult Index()
        {
            return View();
        }
    }
}
