using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using IndependentProject.Models;
using Microsoft.AspNetCore.Identity;
using RestSharp;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace IndependentProject.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _db;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public HomeController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, ApplicationDbContext db)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _db = db;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public static Task<IRestResponse> GetResponseContentAsync(RestClient theClient, RestRequest theRequest)
        {
            var tcs = new TaskCompletionSource<IRestResponse>();
            theClient.ExecuteAsync(theRequest, response => {
                tcs.SetResult(response);
            });
            return tcs.Task;
        }
        public IActionResult Refugees()
        {
            
            return View();

        }


        public IActionResult settlementResult(string name, string instance_id)
        {
            var client = new RestClient("http://data.unhcr.org/api");
            var request = new RestRequest("/population/search.json?name=" + name + "&level=settlement&instance_id=" + instance_id);
            var response = new RestResponse();
            Task.Run(async () =>
            {
                response = await GetResponseContentAsync(client, request) as RestResponse;
            }).Wait();
            JObject jsonResponse = JsonConvert.DeserializeObject<JObject>(response.Content);
            ViewBag.result = jsonResponse;
            return View();
        }
        public IActionResult Countries()
        {
           var client = new RestClient("http://data.unhcr.org/api");
           var request = new RestRequest("/stats/origin.json");

           var response = new RestResponse();
           Task.Run(async () =>
           {
               response = await GetResponseContentAsync(client, request) as RestResponse;
           }).Wait();
           var jsonResponse = JsonConvert.DeserializeObject<JArray>(response.Content);
           ViewBag.Origin = jsonResponse;


           return View();


        }

    }
}