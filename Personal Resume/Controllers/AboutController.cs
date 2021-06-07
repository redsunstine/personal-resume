using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Personal_Resume.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Personal_Resume.Controllers
{
    [ApiController]
    [Route("api/about")]
    public class AboutController
    {
        [HttpGet]
        public About GetAboutInfo()
        {
            //Reads text from about.json
            string jsonText = System.IO.File.ReadAllText("./Data/about.json");
            //Deserializes into About object
            return JsonConvert.DeserializeObject<About>(jsonText);
        }
    }
}
