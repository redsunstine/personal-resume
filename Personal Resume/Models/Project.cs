using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Personal_Resume.Models
{
    public class Project
    {
        public int Id { get; set; }
        public String Title { get; set; }
        public String Description { get; set; }
        public String Stack { get; set; }
        public String Image { get; set; }
        public bool HasWebLink { get; set; }
        public String WebUrl { get; set; }
        public bool HasGithubLink { get; set; }
        public String GithubUrl { get; set; }
        public bool HasDownloadLink { get; set; }
        public String DownloadUrl { get; set; }
        public bool HasButtonScript { get; set; }
        public String ButtonScript { get; set; }
    }
}
