using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using RestSharp;
using RestSharp.Authenticators;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections;

namespace IndependentProject.Models
{
    public class Settlement
    {
        public string name { get; set; }
        public string country { get; set; }
        public string latitude { get; set; }
        public string longitude { get; set; }

        public List<JObject> population { get; set; }

        public static List<Settlement> GetSettlements()
        {
            var client = new RestClient("http://data.unhcr.org/api");
            var request = new RestRequest("/population/regions.json?&instance_id=syria");

            var response = new RestResponse();
            Task.Run(async () =>
            {
                response = await GetResponseContentAsync(client, request) as RestResponse;
            }).Wait();
            var jsonResponse = JsonConvert.DeserializeObject<JObject>(response.Content);
            var settlementList = JsonConvert.DeserializeObject<List<Settlement>>(jsonResponse.ToString());

            return settlementList;
          
        }

        public static List<Settlement> GetPopulation()
        {
            var client = new RestClient("http://data.unhcr.org/api");
            var request = new RestRequest("/population/regions.json?&instance_id=syria");

            var response = new RestResponse();
            Task.Run(async () =>
            {
                response = await GetResponseContentAsync(client, request) as RestResponse;
            }).Wait();
            var jsonResponse = JsonConvert.DeserializeObject<JArray>(response.Content);
            var poplist = JsonConvert.DeserializeObject<List<Settlement>>(jsonResponse["population"].ToString());

            return poplist;
        }

        public static Task<IRestResponse> GetResponseContentAsync(RestClient theClient, RestRequest theRequest)
        {
            var tcs = new TaskCompletionSource<IRestResponse>();
            theClient.ExecuteAsync(theRequest, response => {
                tcs.SetResult(response);
            });
            return tcs.Task;
        }


    }

}
