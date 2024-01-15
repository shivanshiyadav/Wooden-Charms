import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const Bed = () => {
  return (

    <div>

      

      <div className="footer">
        <div className="city-text">
          <h1 className="city-text-head">Cities We Deliver</h1>
          <p className="city-text-head-city" >Delhi| Hooghly | Kolkata | Siliguri | Kharagpur | Midnapur | Howrah | Durgapur | Visakhapatnam | Chittoor | Nellore</p>
        </div>
        <hr />
        <h5 className="city-text-2ndhead" >Popular Categories</h5>
        <p className="city-text-2ndhead">Sofas,
          Center Tables,
          Recliners,
          Entertainment Units,
          Shoe Racks,
          Beds,
          Dresser and Bedside Tables,
          Wardrobes,
          Storage and Accessories,
          Mattresses,
          Dining Tables Sets,
          Dining Storage,
          Tables,
          Storage and Cupboards,
          Chairs,
          Modular Kitchen,
          Modular Wardrobes</p>
        <hr />
        <div className="row">
          <div className="col-md-2 p-2 ">
            <div className="card">
              <h4> Company</h4>
              <ul>
                <li> About Us</li>
                <li>ContactUs</li>
                <li>Our Store</li>
                <li>Disclaimer</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 p-2">
            <div className="card">
              <h4>Product Categories</h4>
              <ul>
                <li>Living</li>
                <li>Dining Sets</li>
                <li>Study and Office Furniture</li>
                <li>Collections</li>
                <li>Modular Furniture</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 p-2">
            <div className="card">
              <h4>Help</h4>
              <ul>
                <li>Bulk Enquiry</li>
                <li>Terms and Condition</li>
                <li>Privacy Policy</li>
                <li>Cancellation Policy</li>
                <li>Refund Policy</li>
                <li>Grievance Redressal Policy</li>
                <li>Code of Ethics </li>
                <li>Payment & Security</li>
                <li>Shipping & Delivery</li>
                <li>FAQ </li>
              </ul>

            </div>

          </div>

          <div className="col-md-4 p-2">
            <div className="card">
              <img className='last' src="/logos.png" alt=" not found" />
              <h5>Wooden Charms </h5>
              <p>Wooden Charms is among the World's Largest Furniture Manufacturers offering a diverse range of modern and traditional furniture. Since Damro was established in 1986, it has achieved a rapid success and has expanded to over 250 showrooms in South Asia. Damro's success has grown from it's ability to produce high quality furniture at affordable prices with outstanding customer service.</p>

              <p> Please use the store locator to find your nearest Damro showroom.</p>
              <p>For further enquiries contact or visit any Damro showroom where our friendly staff will gladly assist you</p>
              <p><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/phone-disconnected.png" alt="phone-disconnected" /> Customer care number :1800 425 1122</p>
              <p><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/phone-disconnected.png" alt="phone-disconnected" />Alternate number :+918867764895</p>

              <h3>Follow Us</h3></div>
            <img width="70" height="70" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
            <img width="70" height="70" src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter--v1" />
            <img width="70" height="70" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new" />
            <img width="70" height="70" src="https://img.icons8.com/fluency/48/linkedin-circled.png" alt="linkedin-circled" />
            <img width="70" height="70" src="https://img.icons8.com/fluency/48/youtube-play.png" alt="youtube-play" />
          </div>

          <div className="mapouter"><div className="gmap_canvas">
            <iframe width="720" height="460" id="gmap_canvas" src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
              ko</iframe>


            <hr />

          </div>

          </div>
          <br />
          <hr />
          <div className="money ">
            <h1>We Accept</h1>
            <img width="80" height="80" src="https://img.icons8.com/fluency/48/visa.png" alt="visa" />
            <img width="80" height="80" src="https://img.icons8.com/fluency/48/google-pay.png" alt="google-pay" />
            <img width="80" height="80" src="https://img.icons8.com/fluency/48/amex.png" alt="amex" />
            <img width="80" height="80" src="https://img.icons8.com/fluency/48/mastercard.png" alt="mastercard" />
            <img width="80" height="80" src="https://img.icons8.com/color/48/bhim.png" alt="bhim" />
          </div>
        </div>

      </div>

    </div>

  )
}

export default Bed