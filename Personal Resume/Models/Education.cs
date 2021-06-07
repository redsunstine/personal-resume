using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Personal_Resume.Models
{
    public class Education
    {
        public IEnumerable<School> SchoolList { get; set; }
        public IEnumerable<Skill> SkillList { get; set; }
    }
}
