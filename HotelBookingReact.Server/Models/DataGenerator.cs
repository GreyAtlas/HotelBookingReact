using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;

namespace HotelBooking.Models
{
    public class DataGenerator
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new HotelBookingContext(
            serviceProvider.GetRequiredService<DbContextOptions<HotelBookingContext>>()))
            {
                if (context.Hotels.Any())
                {
                    return;  
                }
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();
                context.AddRange(
                    new Hotel { Name = "Pleasant Gardens",
                        Location = "Kaunas" ,Picture = System.IO.File.ReadAllBytes("Pictures/picture1.jpg")
                    },
                    new Hotel { Name = "Hotel #42",
                        Location = "Vilnius", Picture = System.IO.File.ReadAllBytes("Pictures/picture2.jpg")
                    },
                    new Hotel {
                        Name = "The Four Seasons",
                        Location = "Vilnius",
                        Picture = System.IO.File.ReadAllBytes("Pictures/picture3.jpg")
                    },
                    new Hotel
                    {
                        Name = "Pilis",
                        Location = "Kaunas",
                        Picture = System.IO.File.ReadAllBytes("Pictures/picture4.jpg")
                    },
                    new Hotel
                    {
                        Name = "Paradise",
                        Location = "Klaipėda",
                        Picture = System.IO.File.ReadAllBytes("Pictures/picture5.jpg")
                    },
                    new Hotel
                    {
                        Name = "The Three Seasons",
                        Location = "Klaipėda",
                        Picture = System.IO.File.ReadAllBytes("Pictures/picture6.jpg")
                    },
                    new Booking
                    {
                        Id = 1,
                        HotelId= 1,
                        HotelName = "Pleasant Gardens",
                        RoomType =0,
                        LengthOfStay = 1,
                        NumberOfPeople = 1,
                        Breakfast = false,
                        Cost = 135
                    }   

                );
                context.SaveChanges();
            }
        }
    }
}
