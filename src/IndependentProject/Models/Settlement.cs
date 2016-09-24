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
        public int r04m { get; set; }
        public int r04f { get; set; }
        public int r511m { get; set; }
        public int r511f { get; set; }
        public int r1217m { get; set; }
        public int r1217f { get; set; }
        public int r1859m { get; set; }
        public int r1859f { get; set; }
        public int r60m { get; set; }
        public int r60f { get; set; }
        public int value { get; set; }
        public DateTime updated { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string search { get; set; }

        public static List<Settlement> GetSettlements()
        {
            var client = new RestClient("http://data.unhcr.org/api");
            var request = new RestRequest("/population/settlements.json?instance_id=liberia");

            var response = new RestResponse();
            Task.Run(async () =>
            {
                response = await GetResponseContentAsync(client, request) as RestResponse;
            }).Wait();
            var jsonResponse = JsonConvert.DeserializeObject<JArray>(response.Content);
            var settlementList = JsonConvert.DeserializeObject<List<Settlement>>(jsonResponse.ToString());
            return settlementList;
          


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
