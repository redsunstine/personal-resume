using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Personal_Resume.Models;

namespace Personal_Resume.Controllers
{
    [Route("api/education")]
    [ApiController]
    public class EducationController : ControllerBase
    {
        public Education GetEducation()
        {
            var schools = JsonConvert.DeserializeObject<IEnumerable<School>>(System.IO.File.ReadAllText("./Data/schools.json"));
            var skills = JsonConvert.DeserializeObject<IEnumerable<Skill>>(System.IO.File.ReadAllText("./Data/skills.json"));
            return new Education
            {
                SchoolList = schools,
                SkillList = skills
            };
        }
    }
}
