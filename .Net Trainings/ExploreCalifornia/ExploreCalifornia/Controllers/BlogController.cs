using System;
using System.Linq;
using System.Threading.Tasks;
using ExploreCalifornia.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ExploreCalifornia.Controllers
{
    [Route("blog")]
    public class BlogController : Controller
    {
        private readonly BlogDbContext _dbContext;

        public BlogController(BlogDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [Route("")]
        public async Task<IActionResult> Index()
        {
            var posts = await _dbContext.Posts.OrderByDescending(x=> x.Posted).Take(5).ToListAsync();
            return View(posts);
        }

        [Route("{year:min(2000)}/{month:range(1,12)}/{key}")]
        public IActionResult Post(int year, int month, string key)
        {
            var post = _dbContext.Posts.FirstOrDefault(x=> x.Key == key);

            return View(post);
        }

        [HttpGet]
        [Route("create")]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [Route("create")]
        public IActionResult Create(Post post)
        {
            if (!ModelState.IsValid)
            {
                return View();
            }

            post.Author = User.Identity.Name;
            post.Posted = DateTime.Now;

            _dbContext.Posts.Add(post);
            _dbContext.SaveChanges();

            return RedirectToAction("Post", "Blog", new
            {
                year = post.Posted.Year,
                month = post.Posted.Month,
                key = post.Key
            });
        }
    }
}