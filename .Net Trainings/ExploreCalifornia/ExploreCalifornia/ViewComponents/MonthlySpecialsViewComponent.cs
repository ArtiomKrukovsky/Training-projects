using System.Linq;
using ExploreCalifornia.Models;
using Microsoft.AspNetCore.Mvc;

namespace ExploreCalifornia.ViewComponents
{
    [ViewComponent]
    public class MonthlySpecialsViewComponent: ViewComponent
    {
        private readonly BlogDbContext _blogDbContext;

        public MonthlySpecialsViewComponent(BlogDbContext blogDbContext)
        {
            _blogDbContext = blogDbContext;
        }

        public IViewComponentResult Invoke()
        {
            var specials = _blogDbContext.MonthlySpecials.ToList();
            return View(specials);
        }
    }
}