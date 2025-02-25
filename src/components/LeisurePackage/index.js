import {Link} from "react-router-dom"
import "./index.css"
import ImageCarousel from "../ImageCarousel";
const cards = [
    { title: "Discover Maasai Mara" ,for:"For 4N/5D",costonRequest:"Cost on Request", url:"https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fswitz-2.webp?alt=media&token=8f4f6e94-6530-492e-9177-f559c9b535cf"},
    { title: "Switzerland Highlights" ,for:"For 3N/4D",costonRequest:"Cost on Request", url:"https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fswitz-7.webp?alt=media&token=a40461da-906d-46c4-9a30-a792c6d90045"},
    { title: "Discover Switzerland" ,for:"For 4N/5D",costonRequest:"Cost on Request", url:"https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fswitz-2.webp?alt=media&token=8f4f6e94-6530-492e-9177-f559c9b535cf"},
    { title: "Discover Switzerland" ,for:"For 4N/5D",costonRequest:"Cost on Request", url:"https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fswitz-2.webp?alt=media&token=8f4f6e94-6530-492e-9177-f559c9b535cf"},
    { title: "Discover Switzerland" ,for:"For 4N/5D",costonRequest:"Cost on Request", url:"https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fswitz-2.webp?alt=media&token=8f4f6e94-6530-492e-9177-f559c9b535cf"},
    { title: "Discover Switzerland" ,for:"For 4N/5D",costonRequest:"Cost on Request", url:"https://firebasestorage.googleapis.com/v0/b/phone-auth-d0a8d.appspot.com/o/packageTemplate%2Fswitz-2.webp?alt=media&token=8f4f6e94-6530-492e-9177-f559c9b535cf"},
  
  ];
  

  const LeisurePackage = () => {
    return (
        <>
            <ImageCarousel />
            <div className="cards-container">
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <div className="image">
                            <img src={card.url} alt={card.title} />
                        </div>
                        <h2 className="card-title title">{card.title}</h2>
                        <p className="card-title">{card.for}</p>
                        <p className="card-title">{card.costonRequest}</p>
                        <div className="button-container">
                            <Link to="/iternary"><button className="button button1">View Itinerary</button></Link>
                        </div>   
                        <div className="button-container"> 
                            <Link to="/bookingform"><button className="button">Book Now</button></Link>
                        </div>
                    </div>
                    
                ))}
            </div>
            
        </>
    );
};

export default LeisurePackage;