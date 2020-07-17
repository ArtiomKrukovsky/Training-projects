using System;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;
using Newtonsoft.Json;

namespace ExploreCalifornia.Models
{
    public class Post
    {
        public int Id { get; set; }

        private string _key;

        public string Key
        {
            get
            {
                if (_key != null) return _key;
                _key = Regex.Replace(Title.ToLower().ToLower(), "[^a-z0-9]", "-");

                return _key;
            }
            set => _key = value;
        }

        [Display(Name="Post title")]
        [Required]
        [DataType(DataType.Text)]
        [StringLength(100, MinimumLength = 5, ErrorMessage = "Title must be between 5 and 100 characters long")]
        public string Title { get; set; }

        public string Author { get; set; }

        [Display(Name = "Body")]
        [Required]
        [DataType(DataType.MultilineText)]
        [MinLength(100, ErrorMessage = "Blog posts must be at least 100 characters long")]
        public string Body { get; set; }

        public DateTime Posted { get; set; }
    }
}