import ImageCarousel from "../ImageCarousel"
import { motion } from "framer-motion";
import "./index.css"
import Faq from "../Faq";
const Home=()=>{
    const cards = [
        { title: "Expert Wildlife Safaris" , url:"https://www.shutterstock.com/image-vector/animal-conservation-logo-design-wildlife-600nw-2057470013.jpg"},
        { title: "Luxury Leisure Experiences", url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhlhBX2m36hjGv6ME_IGsNNIhds6N110k0Q&s"},
        { title: "International & Domestic Reach", url:"https://images.livemint.com/img/2020/12/09/600x338/2020-12-09T082302Z_1_LYNXMPEGB80GL_RTROPTP_3_INDIA-ANTITRUST-AVIATION_1607503152568_1607503162762.JPG"},
        { title: "Customized Tour Packages", url:"https://5.imimg.com/data5/SELLER/Default/2024/3/403276300/BB/PU/CR/216981964/customised-tour-package.jpg" },
      ];

    const destinations=[
        {id:1, title:"Kenya", description:"Kenya is a country of dramatic extremes and one of the most diverse places on Earth. Its open plains and dense forests, snow-capped mountains and deserts, ancient vibrant culture, and bustling modern life, along with its freshwater lakes and coral reefs, create a unique landscape found nowhere else in the world. Kenya is renowned for its savannah safaris and is often referred to as the 'Mecca of Wildlife.",url:"https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/Iceland%2Fsutirta-budiman-kjOBqwMUnWw-unsplash.webp?alt=media&token=ff839f1a-5077-4420-bdb5-a604fd2723a2", button:"Explore Kenya's Wildlife advantures"},
        {id:2, title:"Vietnam", description:"With its rich history, vibrant culture, and breathtaking landscapes, Vietnam is one of the most popular holiday destinations in the world today. Vietnam can be visited year-round, as the weather across the country is suitable for various seasons. It is also one of the most tourist-friendly places and very affordable compared to many other countries. Vietnam is an excellent holiday destination for friends and families, offering a wide range of activities for different age groups.",url:"https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Home%2Fbridge.webp?alt=media&token=9be18ce8-3563-4205-9795-19f8fc54a322", button:"Discover the beauty of Vietnam"},
        {id:3, title:"Tanzania", description:"Known for its vast wilderness, this is one of the most sought-after wildlife destinations in the world. It is home to Africa’s highest mountain, Mount Kilimanjaro, and is famously known as the 'Land of Safaris.' Millions of wildebeests and other ungulates traverse this land during the Great Migration, crossing into Maasai Mara every year. During February, on the plains of Ndutu, these animals give birth to millions of calves, a truly spectacular sight to witness.", url:"https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d/o/tu-home%2Ftu-home-imgs%2Ftanzania.avif?alt=media&token=dea821f8-7080-403b-ab6d-4eed631aa15d", button:"Experience the Serengeti in Tanzania"},
        {id:4,title:"Kenya", description:"Kenya is a country of dramatic extremes and one of the most diverse places on Earth. Its open plains and dense forests, snow-capped mountains and deserts, ancient vibrant culture, and bustling modern life, along with its freshwater lakes and coral reefs, create a unique landscape found nowhere else in the world. Kenya is renowned for its savannah safaris and is often referred to as the 'Mecca of Wildlife.",url:"https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/Iceland%2Fsutirta-budiman-kjOBqwMUnWw-unsplash.webp?alt=media&token=ff839f1a-5077-4420-bdb5-a604fd2723a2", button:"Explore Kenya's Wildlife advantures"},
        {id:5, title:"Vietnam", description:"With its rich history, vibrant culture, and breathtaking landscapes, Vietnam is one of the most popular holiday destinations in the world today. Vietnam can be visited year-round, as the weather across the country is suitable for various seasons. It is also one of the most tourist-friendly places and very affordable compared to many other countries. Vietnam is an excellent holiday destination for friends and families, offering a wide range of activities for different age groups.",url:"https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Home%2Fbridge.webp?alt=media&token=9be18ce8-3563-4205-9795-19f8fc54a322", button:"Discover the beauty of Vietnam"},
        {id:6, title:"Tanzania", description:"Known for its vast wilderness, this is one of the most sought-after wildlife destinations in the world. It is home to Africa’s highest mountain, Mount Kilimanjaro, and is famously known as the 'Land of Safaris.' Millions of wildebeests and other ungulates traverse this land during the Great Migration, crossing into Maasai Mara every year. During February, on the plains of Ndutu, these animals give birth to millions of calves, a truly spectacular sight to witness.", url:"https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d/o/tu-home%2Ftu-home-imgs%2Ftanzania.avif?alt=media&token=dea821f8-7080-403b-ab6d-4eed631aa15d", button:"Experience the Serengeti in Tanzania"},
        {id:7, title:"Kenya", description:"Kenya is a country of dramatic extremes and one of the most diverse places on Earth. Its open plains and dense forests, snow-capped mountains and deserts, ancient vibrant culture, and bustling modern life, along with its freshwater lakes and coral reefs, create a unique landscape found nowhere else in the world. Kenya is renowned for its savannah safaris and is often referred to as the 'Mecca of Wildlife.",url:"https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/Iceland%2Fsutirta-budiman-kjOBqwMUnWw-unsplash.webp?alt=media&token=ff839f1a-5077-4420-bdb5-a604fd2723a2", button:"Explore Kenya's Wildlife advantures"},
        {id:8, title:"Vietnam", description:"With its rich history, vibrant culture, and breathtaking landscapes, Vietnam is one of the most popular holiday destinations in the world today. Vietnam can be visited year-round, as the weather across the country is suitable for various seasons. It is also one of the most tourist-friendly places and very affordable compared to many other countries. Vietnam is an excellent holiday destination for friends and families, offering a wide range of activities for different age groups.",url:"https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/TU-Home%2Fbridge.webp?alt=media&token=9be18ce8-3563-4205-9795-19f8fc54a322", button:"Discover the beauty of Vietnam"},
        {id:9, title:"Tanzania", description:"Known for its vast wilderness, this is one of the most sought-after wildlife destinations in the world. It is home to Africa’s highest mountain, Mount Kilimanjaro, and is famously known as the 'Land of Safaris.' Millions of wildebeests and other ungulates traverse this land during the Great Migration, crossing into Maasai Mara every year. During February, on the plains of Ndutu, these animals give birth to millions of calves, a truly spectacular sight to witness.", url:"https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d/o/tu-home%2Ftu-home-imgs%2Ftanzania.avif?alt=media&token=dea821f8-7080-403b-ab6d-4eed631aa15d", button:"Experience the Serengeti in Tanzania"},
        
    ]  
    return (
        <>
       
        <ImageCarousel />
        <div>
            <div className="cards-container">
                {cards.map((card, index) => (
                    <div key={index} className="cards" >
                        <div className="images">
                            <img src={card.url} alt={card.title} className="images" />
                        </div>
                        <h1 className="card-title">{card.title}</h1>
                    
                    </div>
                ))}
            </div>
            <div className="destinations-container">
        {destinations.map((each, index) => (
            <div key={index} className="destination-card">
            {index % 2 === 0 ? (
                <div className="destination-content">
                <div className="text-section">
                    <h1>{each.title}</h1>
                    <p>{each.description}</p>
                    <button>{each.button}</button>
                </div>
                <motion.div
                    className="image-section"
                    initial={{ x: "40vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 8, ease: "easeOut" }}
                >
                    <img src={each.url} alt={each.title} />
                </motion.div>
                </div>
            ) : (
                <div className="destination-content">
                <motion.div
                    className="image-section"
                    initial={{ x: "-40vw", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 8, ease: "easeOut" }}
                >
                    <img src={each.url} alt={each.title} />
                </motion.div>
                <div className="text-section">
                    <h1>{each.title}</h1>
                    <p>{each.description}</p>
                    <button>{each.button}</button>
                </div>
                </div>
            )}
            </div>
        
            ))}
            </div>
            <div className="travel-agency-container">
      <h1 className="agency-title">Which Company is Best for Travel Agency in Bangalore?</h1>
      <p className="agency-intro">
        If you’re looking for the best travel agency in Bangalore, your search ends with 
        <strong> Travel Unbounded</strong>. Known for its exceptional customer service and carefully curated 
        tour packages, Travel Unbounded stands out as a top choice for travelers seeking memorable experiences.
      </p>
      
      <h2 className="why-choose-title">Why Choose Travel Unbounded?</h2>
      <ul className="why-choose-list">
        <li><strong>🌍 Wide Range of Destinations:</strong> From the serene backwaters of Kerala to thrilling safaris in Kenya and cultural tours in Vietnam.</li>
        <li><strong>🛫 Customized Packages:</strong> We understand that every traveler is unique, which is why we offer personalized itineraries.</li>
        <li><strong>💰 Affordable Pricing:</strong> With competitive pricing, we ensure that your dream vacation fits your budget.</li>
        <li><strong>📞 Expert Guidance:</strong> Our team of travel experts provides 24/7 assistance, ensuring a hassle-free journey.</li>
        <li><strong>👍 Client Testimonials:</strong> Hundreds of satisfied customers vouch for our professionalism and attention to detail.</li>
      </ul>
    </div>
    <div>
        <Faq/>
    </div>

        </div>
        </>
    )
}
export default Home