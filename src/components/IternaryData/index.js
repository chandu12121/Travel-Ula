import {Link} from "react-router-dom"
import React, { useState } from "react";
import "./index.css";
import Header from "../Header"

const itineraryData = [
  {
    day: "Day 1 - Nov 14th 2023 - Maasai Mara Journey",
    details: `Our drivers would pick up from the JKIA airport at 7AM. You would board our 4*4 Landcruisers to embark on your journey to Maasai Mara. The road journey takes about 5 to 6 hours, but you would be amazed by the landscape enroute. You would first see the Nairobi national park on your left side. On a lucky day, you would also see a White Rhino grazing near the fence. Nairobi city has a national park right in its heart!! And it is home for Lions, Leopards, White rhinos, gazzelles, Giraffes, crowned cranes, and other mammals and birds. This is the only city in the World which boasts a National park within the city limits. 
    After one hour you would climb up to The Great Rift Valley. This is one priced attraction of Kenya. Formed a millions years back, this valley boasts beautiful lakes and escarpments, which provide havens for plentiful wildlife. The Great Rift Valley runs for 4,000 miles (6,400 kilometers), from Jordan in southwestern Asia to the coast of the Indian Ocean in central Mozambique. We suggest you request your driver to stop when you are on top and enjoy the views of this Nature’s marvel. 
    You would reach Maasai Mara by noon. Complete your check in formalities and proceed to lunch. After lunch, you would go on your first game drive on the great plains of Maasai Mara!! 
    This afternoon, our experienced Maasai guides/drivers would take you around the Talek and Topi plains area. There you would find a lot of ungulates, antelopes, zebras and also a huge pride of Lions. This pride is called the  ‘Topi Pride’. Relax, sit back and enjoy God’s creations. You would be so excited to see the endless plains of Maasai Mara with its dwellers. 
    Return to your camp after 6PM. Refresh yourself and head towards the camp fire. Meet up with your group and listen to their first day experience at Mara. Share your magical experiences with them. Have dinner and retire for the day ( LD ) 
`,
  },
  {
    day: "Day 2 - Nov 15th 2023 - Morning Game Drive",
    details: `Wake up early. Freshen yourself and head to the restaurant for a hot cup of coffee or tea. The mornings are cold at Mara, so do wear your fleece jacket for the morning game drive. Breakfast would be packed for you. Explore the mornings at Mara. The Sunrise you witness at Mara is something which you would never get to witness anywhere in the World. Just pray that it does not rain!! 
    Our guides would park the vehicle under a tree for you to have a bush breakfast. This is an out of the World experience. At a distance you can see the animals peacefully grazing while you are enjoying your food. Post your breakfast, proceed again on the game drive. Mid mornings while the Lions sleep is a good time to look around for the cheetahs. November is also the season when the Topis give birth to young ones. On a lucky day, you might witness a Topi giving birth to a little one. Keep a watch on the hyenas as they would always be around a pregnant Topi!
    Return to your camp around 11.30AM. Take a nice shower and some much needed rest. Lunch would be served from 12.30 Noon. Have a hot lunch and a short nap. The afternoon game drive would start at 3PM. Today our drivers would try and locate a leopard for you. 
    Do ask your driver to stop where ever you want to click pictures. Return to the camp post sunset and enjoy your evening at the camp fire with your group. Have dinner and retire early as you have a full day game drive tomorrow.  ( BLD )
`,
  },
  {
    day: "Day 3 - Nov 16th 2023 - Full Day Game Drive",
    details: `Today is a very busy day for you at Mara. Wake up early, freshen yourself, have a hot beverage and jump into your designated vehicles. Today you would be going towards the border of Maasai Mara. You would be going for a full day game drive with packed breakfast and lunch. 
    Sand river is the border for Maasai Mara and Tanzania. This has been the entry point of the migratory animals for millions of years. You would be amazed to see such a small river separates two different countries!! Enjoy every bit your time as this is your last day of game drive for this trip. Have lunch and take a small nap like our Maasai guides. Then proceed towards your camp. On the way back encounter a pride of lion. During your stay at Mara, you would have seen the Big 4 our of the Big 5. The Rhino being very elusive is going to be a difficult find. But this area is know for the Rhinos. If you are lucky you would get to see one. 
    Return to the camp with great memories. Spend you evening at the camp fire before having dinner. Retire for the day. 
    Sadly the holiday has come to an end. But at the end you would release that it was the journey which was so beautiful. Have a blissful night. ( BLD )
`,
  },
  {
    day: "Day 4 - Nov 17th 2023 - Return to Nairobi",
    details: `Wake up at leisure, have a nice and heavy breakfast while you discuss about your experience with your group. Board the designated Landcruisers to embark on the journey to Nairobi. You would be dropped at the JKIA airport. End of services. ( B )
`,
  },
];

const inclusions = [
  "Internal transfers from JKIA airport to Maasai Mara and back by Landcruiser on shared basis",
  "Stay on twin sharing basis at Maasai Mara either at Zebra plains or ",
  "Game drives in Landcruisers in shared basis - minimum 4 paxs per vehicle",
  "Water during game drives",
  "All meals as mentioned in the itinerary",
  "Park Fees",
  "Guide Fees",
  "English speaking guides/drivers"

];

const exclusions = [
  "Any airfare or VISA charges",
  "Personal and medical expenses during the tour",
  "Tips and gratitude",
  "Anything other than mentioned in the Inclusions section",
];

const Itinerary = () => {
  const [openDay, setOpenDay] = useState(null);

  return (
    <>
    <Header/>
    <div className="tour-container">
        <div>
            <img src="https://media.istockphoto.com/id/168252293/photo/safari-car-is-waiting-for-crossing-elephants.jpg?s=1024x1024&w=is&k=20&c=fRY-r5V1J3EzeVtqS1Ax5hxYC4uZaCloZm6RjMK14fQ=" alt="pic" className="pic"/>
        </div>
        <h1>Discover Maasai Mara</h1>
        <p>For 4N/5D</p>
      <h1 className="tour-title">Great Migration Tour (Nov 14th 2023 - Nov 17th 2023)</h1>
      <h2 className="tour-duration">For 6N/7D</h2>

      <div className="overview-section">
        <h2 className="section-title">Overview</h2>
        <p className="tour-description">
          Experience the Great Migration with <span className="highlight">Travel Unbounded</span>
        </p>
        <p>
          Embark on the adventure of a lifetime as we take you to witness the world-famous Great Migration in Maasai Mara. 
          Every year, over two million wildebeests, zebras, and gazelles journey from the Serengeti to Maasai Mara, 
          driven by the search for fresh grazing and water. Along the way, they face dramatic river crossings, 
          predators, and the raw beauty of Africa’s wilderness—a truly unforgettable spectacle.
        </p>
        <p>
          Our passionate guides will provide you with rich insights into the ecosystem while ensuring you’re 
          comfortable throughout your stay in luxurious, hand-picked lodges or tented camps.
        </p>
      </div>
      <div className="why-us-section">
        <h2 className="section-title">Why Travel Unbounded?</h2>
        <ul className="why-us-list">
          <li>🌍 <strong>Expert Guides:</strong> Knowledgeable guides who bring the Mara to life.</li>
          <li>👨‍👩‍👦 <strong>Tailored for All:</strong> Perfect for families, wildlife lovers, and photographers.</li>
          <li>🦁 <strong>Wildlife Drama:</strong> Witness the thrill of river crossings and predator hunts.</li>
          <li>🏕 <strong>Comfort:</strong> Enjoy luxury stays in hand-picked lodges or camps.</li>
          <li>💳 <strong>Flexible Payments:</strong> Pay in easy installments to make your dream trip possible.</li>
        </ul>
      </div>
      
      <div className="pricing-section">
        <h2 className="section-title">Pricing</h2>
        <ul className="pricing-list">
          <li>
            <span className="price-label">Cost per adult, Ex Nairobi:</span> 
            <span className="price">USD 1582 (incl. of local taxes)</span>
          </li>
          <li>
            <span className="price-label">Cost per child (4 to 9 years), Ex Nairobi:</span> 
            <span className="price">USD 1400 (incl. of taxes)</span>
          </li>
          <li>
            <span className="price-label">Special Independence Day Offer (Book before August 14, 2023) - Cost per adult:</span> 
            <span className="price special-offer">USD 1322</span>
          </li>
          <li>
            <span className="price-label">Special Independence Day Offer (Book before August 14, 2023) - Cost per child:</span> 
            <span className="price special-offer">USD 1127</span>
          </li>
          <li>
            <span className="price-label">Cost per person on twin shared accommodation (Ex Nairobi):</span> 
            <span className="price">USD 2550</span>
          </li>
          <li>
            <span className="price-label">Cost per couple on twin sharing accommodation (Ex Nairobi):</span> 
            <span className="price">USD 4900</span>
          </li>
          <li>
            <span className="price-label">Cost per person for repeat travelers:</span> 
            <span className="price">USD 2450</span>
          </li>
        </ul>
      </div>
      

    <div className="itinerary-container">
      <h1 className="itinerary-title">Maasai Mara Travel Itinerary</h1>

      {itineraryData.map((item, index) => (
        <div key={index} className="day-section">
          <div
            className="day-title"
            onClick={() => setOpenDay(openDay === index ? null : index)}
          >
            {item.day} <span>{openDay === index ? "➖" : "➕"}</span>
          </div>
          {openDay === index && <p className="day-details">{item.details}</p>}
        </div>
      ))}
      </div>
      <div className="includes-excludes">

      <div className="info-section">
        <h2 className="section-title">✔ Inclusions</h2>
        <ul className="info-list inclusions">
          {inclusions.map((item, index) => (
            <li key={index} className="included-item">✅ {item}</li>
          ))}
        </ul>
      </div>

      <div className="info-section">
        <h2 className="section-title exclusion-title">❌ Exclusions</h2>
        <ul className="info-list exclusions">
          {exclusions.map((item, index) => (
            <li key={index} className="excluded-item">❌ {item}</li>
          ))}
        </ul>
      </div>
      </div>

      <div className="info-section terms-section">
        <h2 className="section-title">📜 Terms & Conditions</h2>
        <p>-Costs are based at 4 paxs per vehicle for game drives and 5 per vehicle for Internal transfers</p>
        <p>  -Stay at Mara would be at Zebra plains or Loyk camp or Julia river camp.</p>
        <p>  -Last day to confirm the tour is August 14th 2023.</p>
        <p>  -Guests travelling should process valid passports with a minimum of 6 months validity from the date of return.</p>
        <p> -Guests traveling should be administered with Yellow fever vaccination and Oral polio vaccination. The vaccines should be taken at least 15 days prior to travel. The certificates has to be shared for us to send you the invite letter for VISA application.</p>
        <p>  -Guests should intimate us on any medical ailment and Travel Unbounded World Pvt Ltd is not liable for any loss or damage to the guests during the tour.</p>
        <p> -Guests should provide International travel insurance 15 days prior to travel.</p>
        <p>  -Guests staying at Nairobi one day prior to the travel dates have to reach JKIA airport at 7AM on Nov 14th</p>
        <p> -Guests staying at Nairobi on Nov 17th would have to arrange their transport from JKIA airport after we drop you.</p>
        <p> -Lunch on the return on Nov 17th is not a part of the package</p>
        <p> -Meals are mentioned in brackets at the end of the Day’s itinerary</p>
        <p> -Groups above 5 can avail special discounts</p>
        <p> -Vehicles are provided only for internal transfers and game drives, they are not for another purposes or use.</p>
      </div>

      <div className="info-section payment-section">
        <h2 className="section-title">💳 Payment & Cancellation Policy</h2>
        <p>- 100% payment required at the time of booking.</p>
        <p>- 50% of the tour cost would be given back as credit if the tour is cancelled 60 days before the travel dates.</p>
        <p>- No refund is provided if tour is cancelled within thirty days of the travel dates.</p>
      </div>
      <div className="cta-section">
        <Link to="/bookingform"><button className="book-now-btn">Book Now</button></Link>
      </div>
    </div>
    
    </>
  );
};

export default Itinerary;
