using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Personal_Resume.Models
{
    public class Skill
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public string[] SkillsList { get; set; }
    }
}
