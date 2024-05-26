using Microsoft.EntityFrameworkCore;


namespace HotelBooking.Models
{
    public class HotelBookingContext : DbContext
    {
        public HotelBookingContext(DbContextOptions<HotelBookingContext> options) 
            : base(options){ }

        public DbSet<Hotel> Hotels { get; set; }
        public DbSet<Booking> Bookings { get; set; }

    }
}
