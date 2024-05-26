namespace HotelBooking.Models
{
    public class Hotel
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Location { get; set; }

        public required byte[] Picture { get; set; }
    }
}

namespace HotelBooking.Models
{
    public class HotelDescriptionDTO
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Location { get; set; }
    }
}

namespace HotelBooking.Models
{
    public class HotelImageDTO
    {
        public int Id { get; set; }
        public required byte[] Picture { get; set; }
    }
}