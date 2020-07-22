using System;
using ExploreCalifornia.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ExploreCalifornia
{
    public class Startup
    {
        private readonly IConfiguration configuration;

        public Startup(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<FeatureToggle>(x => new FeatureToggle()
            {
                DeveloperExceptions = configuration.GetValue<bool>("EnableDeveloperExceptions")
            });

            services.AddTransient<FormattingService>();

            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddDbContext<BlogDbContext>(options =>
            {
                var connection = configuration.GetConnectionString("BlogDbContext");
                options.UseSqlServer(connection);
            });

            services.AddDbContext<IdentityDbContext>(options =>
            {
                var connection = configuration.GetConnectionString("IdentityDbContext");
                options.UseSqlServer(connection);
            });

            services.AddIdentity<IdentityUser, IdentityRole>()
                .AddEntityFrameworkStores<IdentityDbContext>();

            services.AddMvc(option => option.EnableEndpointRouting = false);
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Latest);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, FeatureToggle featureToggle)
        {

            app.UseExceptionHandler("/error.html");

            if (featureToggle.DeveloperExceptions)
            {
                app.UseDeveloperExceptionPage();
            }

            app.Use( async (context, next) =>
            {
                if (context.Request.Path.Value.StartsWith("/invalid"))
                {
                    throw new Exception("ERROR");
                }

                await next();
            });

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            app.UseFileServer();
        }
    }
}
