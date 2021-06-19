using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Personal_Resume.Models
{
    public class Job
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public string Link { get; set; }
        public string Logo { get; set; }
        public string JobTitle { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string Location { get; set; }
        public string Vision { get; set; }
        public string[] JobDuties { get; set; }
        public string[] Accomplishments { get; set; }
        public string[] AccomplishmentLinks { get; set; }
    }
}
