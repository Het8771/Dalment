import { Globe, BookOpen, UserSquare2, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import main from "../image/main.png";
import map from "../image/map.svg";
import mapPin from "../image/mapPin.png"; // Import the map pin image
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import home1 from "../image/home1.svg";
import home2 from "../image/home2.svg";
import Header from "./Header";


const TestimonialCard = ({ image, name, position, testimonial }) => (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img src={main} alt={name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-blue-700">{name}</h3>
            <p className="text-gray-600 text-sm mb-2">{position}</p>
            <p className="text-gray-700 text-center">{testimonial}</p>
        </div>
    </div>
);

export default function CoreValues() {
    const scrollContainerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mapImageUrl, setMapImageUrl] = useState(map); // Initialize with imported map

    const [locations, setLocations] = useState([
        { id: 1, x: 28, y: 29, name: 'New York' }, // New York
        { id: 2, x: 45, y: 20, name: 'Europe' }, // Europe
        { id: 3, x: 68, y: 48, name: 'India' }, // India
        { id: 4, x: 58, y: 63, name: 'Africa' }, // Africa
    ]);

    const [hoveredLocation, setHoveredLocation] = useState(null);

    const values = [
        {
            icon: Globe,
            title: "Worldwide Connectivity",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        },
        {
            icon: BookOpen,
            title: "Recognised Excellence",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        },
        {
            icon: UserSquare2,
            title: "Customer-Centric Approach",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        },
        {
            icon: Clock,
            title: "Timely Delivery",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        },
    ];

    // Double the items array for smooth infinite scroll
    const doubledValues = [...values, ...values];

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        let animationFrameId;

        const scroll = () => {
            if (!isHovered) {
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += 1; // Adjust scroll speed by changing this value
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isHovered]);

    const testimonials = [
        {
            image:
                "https://pplx-res.cloudinary.com/image/upload/v1740044867/user_uploads/PdayhCYYHhefHSz/image.jpg",
            name: "Cameron Williamson",
            position: "Marketing Coordinator",
            testimonial:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        },
        {
            image:
                "https://pplx-res.cloudinary.com/image/upload/v1740044884/user_uploads/YgBypnxRWKKMBPF/image.jpg",
            name: "Cameron Williamson",
            position: "Marketing Coordinator",
            testimonial:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        },
        {
            image:
                "https://pplx-res.cloudinary.com/image/upload/v1740045338/user_uploads/yPQPgOswkddenJD/image.jpg",
            name: "Cameron Williamson",
            position: "Marketing Coordinator",
            testimonial:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        },
        {
            image:
                "https://pplx-res.cloudinary.com/image/upload/v1740045362/user_uploads/ReoSoAERnbIkKpS/image.jpg",
            name: "Cameron Williamson",
            position: "Marketing Coordinator",
            testimonial:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
        <Header/>
    <div className="bg-white py-8 md:py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Image Section */}
      <div className="relative w-full max-w-[400px] mx-auto lg:mx-0">
        {/* Main Image */}
        <img
          src={home1}
          alt="Offshore Oil Rig"
          className="w-full rounded-xl shadow-md"
        />

        {/* Overlay Image */}
        <img
          src={home2}
          alt="Cargo Ship"
          className="absolute bottom-[6%] left-[70%] w-1/3 sm:w-[180px] lg:w-[200px] rounded-xl "
        />
      </div>

      {/* Text Content */}
      <div className="mt-8 lg:mt-0">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#045CA6] mb-4">WHO WE ARE</h2>
        <p className="text-gray-700 mb-4 text-sm md:text-base text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.
        </p>
        <p className="text-gray-700 mb-6 text-sm md:text-base text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.
        </p>
        <a href="#" className="inline-block bg-[#045CA6] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
          Read More &gt;
        </a>
      </div>
    </div>

    {/* Statistics Section */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
      <div className="border-r border-gray-300 last:border-r-0 md:last:border-r">
        <p className="text-3xl md:text-4xl font-bold text-[#045CA6]">100+</p>
        <p className="text-gray-700 text-sm md:text-base">Countries</p>
      </div>
      <div className="border-r-0 md:border-r border-gray-300">
        <p className="text-3xl md:text-4xl font-bold text-[#045CA6]">200+</p>
        <p className="text-gray-700 text-sm md:text-base">Port Cities</p>
      </div>
      <div className="border-r border-gray-300 md:border-r-0 lg:border-r">
        <p className="text-3xl md:text-4xl font-bold text-[#045CA6]">20+</p>
        <p className="text-gray-700 text-sm md:text-base">Million FT Cargo</p>
      </div>
      <div>
        <p className="text-3xl md:text-4xl font-bold text-[#045CA6]">300+</p>
        <p className="text-gray-700 text-sm md:text-base">Professionals</p>
      </div>
    </div>
  </div>
</div>
   
        <div className="mx-auto px-4 py-16">
       <div class="text-center px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16">
       <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#045CA6] mb-2 sm:mb-3 lg:mb-4 relative inline-block">
        OUR CORE VALUE
        <span class="absolute bottom-[-4px] sm:bottom-[-6px] lg:bottom-[-8px] left-1/2 transform -translate-x-1/2 w-10 sm:w-12 lg:w-16 h-[2px] sm:h-[3px] bg-[#045CA6]"></span>
       </h2>
       <p class="text-justify text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto text-gray-600 mt-3 sm:mt-4 lg:mt-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
       </p>
      </div>
      <div
    ref={scrollContainerRef}
    className="flex overflow-x-auto md:overflow-x-hidden whitespace-nowrap scrollbar-hide"
    style={{ scrollBehavior: "auto" }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
>
    {doubledValues.map((value, index) => (
        <div key={index} className="inline-flex flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="text-center w-full">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#045CA6] mb-4 sm:mb-6">
                    <value.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#045CA6] mb-2 sm:mb-4 whitespace-normal">
                    {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed whitespace-normal">
                    {value.description}
                </p>
                <a
                    href="#"
                    className="inline-flex items-center text-sm sm:text-base text-[#045CA6] hover:underline font-medium group whitespace-normal"
                >
                    Explore More
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                        →
                    </span>
                </a>
            </div>
        </div>
    ))}
</div>

            <br />
            <br />

            <div className="bg-[#045CA6] py-8 sm:py-12">
    <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white uppercase mb-2">
                TESTIMONIALS
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="text-center text-white mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-justify sm:text-center max-w-3xl mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
            </p>
        </div>
        <div className="px-2 sm:px-0">
            <Slider {...sliderSettings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="px-1 sm:px-2">
                        <TestimonialCard
                            image={testimonial.image}
                            name={testimonial.name}
                            position={testimonial.position}
                            testimonial={testimonial.testimonial}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    </div>
</div>


            <div className="relative bg-white py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-[#045CA6] mb-4 relative inline-block">
                            OUR GLOBAL PRESENCE
                             <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#045CA6]"></span>
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s.
                        </p>
                    </div>

                    <div className="relative">
                        <img
                            src={mapImageUrl}
                            alt="Global Map"
                            className="w-full "
                        />

                        {locations.map((location) => (
                            <div
                                key={location.id}
                                className="absolute  cursor-pointer"
                                style={{
                                    left: `${location.x}%`,
                                    top: `${location.y}%`,
                                    transform: 'translate(-50%, -50%)', /* Center the pin */
                                    width: '30px', /* Adjust size as needed */
                                    height: 'auto',
                                }}
                                onMouseEnter={() => setHoveredLocation(location)}
                                onMouseLeave={() => setHoveredLocation(null)}
                            >
                                <img
                                    src={mapPin}
                                    alt={location.name}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                    }}
                                />
                            </div>
                        ))}

                        {hoveredLocation && (
                            <div
                                className="absolute bg-yellow-500 text-black px-4 py-2 rounded shadow-md"
                                style={{
                                    left: `${hoveredLocation.x}%`,
                                    top: `${hoveredLocation.y + 3}%`, // Adjust position to appear below the marker
                                    transform: 'translateX(-50%)',
                                    zIndex: 10, // Ensure it's above the map
                                }}
                            >
                                {hoveredLocation.name}
                            </div>
                        )}
                    </div>
                </div>
            </div>
 <div className="flex items-center justify-center ">
      <div className="bg-white  overflow-hidden  w-full">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Form */}
          <div className="p-8 lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#045CA6] mb-2 sm:mb-3 lg:mb-7 relative inline-block">
              GET IN TOUCH
              <span className="absolute bottom-[-4px] sm:bottom-[-6px] lg:bottom-[-8px] left-1/2 transform -translate-x-1/2 w-10 sm:w-12 lg:w-16 h-[2px] sm:h-[3px] bg-[#045CA6]"></span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto text-gray-600 mt-3 sm:mt-4 lg:mt-6 ml-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <br />
            <form>
  <div className="mb-4">
    <label htmlFor="fullName" className="block text-black-700 text-sm mb-2">
      Full Name
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      </div>
      <input
        type="text"
        id="fullName"
        name="fullName"
        placeholder="Enter Your Full Name"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 pl-10 text-sm"
        required
      />
    </div>
  </div>

  <div className="mb-4">
    <label htmlFor="email" className="block text-black-700 text-sm mb-2">
      Email
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
          <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
        </svg>
      </div>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter Your Email Address"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 pl-10 text-sm"
        required
      />
    </div>
  </div>

  <div className="mb-4">
    <label htmlFor="mobile" className="block text-black-700 text-sm mb-2">
      Mobile Number
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      </div>
      <input
        type="tel"
        id="mobile"
        name="mobile"
        placeholder="Enter Your Mobile Number"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 pl-10 text-sm"
        required
      />
    </div>
  </div>

  <div className="mb-4">
    <label htmlFor="message" className="block text-black-700 text-sm mb-2">
      Message
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      </div>
      <textarea
        id="message"
        name="message"
        placeholder="Enter Your Message"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 border-gray-300 pl-10 text-sm"
        required
      ></textarea>
    </div>
  </div>

  <div className="flex items-center justify-center">
    <button className="bg-[#045CA6] hover:bg-blue-700 text-white py-3 px-4 w-full rounded focus:outline-none focus:shadow-outline text-sm" type="submit">
      Send Message
    </button>
  </div>
</form>
 </div>

          {/* Right Side - Contact Info */}
          <div className="bg-[#045CA6] text-white p-8 lg:w-1/2 flex flex-col justify-start relative ">
            {/*<div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <svg
                className="absolute top-0 left-0"
                width="100%"
                height="100%"
                viewBox="0 0 400 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H400V600L0 400V0Z"
                  fill="#045CA6"
                  opacity="0.8"
                />
              </svg>
            </div>*/}
            <div className="bg-white p-12 relative z-10 lg:absolute mt-52 ml-[-80px] w-50 h-60 mb-20">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2 text-[#045CA6]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.913A2.25 2.25 0 012.25 7.007V6.75m19.5 0h-19.5" />
                </svg>
                <span className="text-sm text-gray-700 ">xyztechnology04@gmail.com</span>
              </div>
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2 text-[#045CA6]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                <span className="text-sm text-gray-700">+91 83000 00042</span>
              </div>
              <div className="flex items-start mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2 text-[#045CA6]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm text-gray-700">B-8, 210, Township-2 Sarthana Jakatnaka, Surat Gujarat 395006</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</div>
</>        
    );
}
