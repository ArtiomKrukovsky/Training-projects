using System;

namespace ExploreCalifornia.Models
{
    public class FormattingService
    {
        public string AsReadableDate(DateTime date)
        {
            return date.ToString("d");
        }
    }
}