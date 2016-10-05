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
       
        
        public List<Settlement> instances { get; set; }


        public static List<Settlement> GetSettlements()
        {
            var client = new RestClient("http://data.unhcr.org/api");
            var request = new RestRequest("/instances/list.json");

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
