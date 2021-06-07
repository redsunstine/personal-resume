using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Personal_Resume.Models;
using Newtonsoft.Json;

namespace Personal_Resume.Controllers
{
    [Route("api/jobs")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        public IEnumerable<Job> GetJobs()
        {
            string jsonText = System.IO.File.ReadAllText("./Data/jobs.json");
            return JsonConvert.DeserializeObject<IEnumerable<Job>>(jsonText);
        }
    }
}
