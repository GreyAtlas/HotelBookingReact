namespace HotelBooking.Models
{
    public class Booking
    {
        public  int Id {  get; set; }
        public  int HotelId { get; set; }
        public string HotelName { get; set; } = string.Empty;
        public  int RoomType { get; set; }
        public  int LengthOfStay { get; set; }
        public  int NumberOfPeople { get; set; }
        public  bool Breakfast { get; set; }

        public decimal Cost { get; set; }
    }
}

namespace HotelBooking.Models
{
    public class BookingSubmissionDTO
    {
        public int HotelId { get; set; }
        public string HotelName { get; set; } = string.Empty;
        public int RoomType { get; set; }
        public int LengthOfStay { get; set; }
        public int NumberOfPeople { get; set; }
        public bool Breakfast { get; set; }

    }
}

