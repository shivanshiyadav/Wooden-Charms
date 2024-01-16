import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const Bed = () => {

   const [furnitureList, setFurnitureList] = useState([]);

   const fetchFurnitureData = async () => {
      const response = await fetch('http://localhost:5000/furniture/getall');
      const data = await response.json();
      console.log(data);
      setFurnitureList(data);
   }

   useEffect(() => {
      fetchFurnitureData();
   }, [])
   

   const displayFurniture = () => {
      return furnitureList.map((furniture, index) => {
         return (
            <div className='col-md-4'>
               <div className="card">
                  <img src={'http://localhost:5000/'+furniture.image} alt="" />
                  <div className="card-body">
                     <p>{furniture.name}</p>
                     <h5>MRP ₹ {furniture.price} </h5>
                     <div className="like">
                        <img className="heart" width="30" height="30" src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png" alt="like--v1" />
                        <button className='button-green'>Avaiable Online</button>
                     </div>
                  </div>
               </div>
            </div>
         )
      })
   }

   return (

      <div>

         <div >

            <div className="row m-0">

               {
                  displayFurniture()
               }

               {/* <div className='col-md-4 h-100 '>
                  <div className="card">
                     <img src="data:image/jpeg;base64,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" alt="" />
                     <div className="card-body">
                        <p>Tampa Center Table</p>
                        <h5>MRP ₹ 1,490 </h5>
                        <div className="like">
                           <img className="heart" width="30" height="30" src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png" alt="like--v1" />
                           <button className='button-green'>Avaiable Online</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='col-md-4  h-100'>
                  <div className="card ">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOySVBRmj-qeKJM6WDjtD5ChZ4ZWqEzTnywsG6aLVpCU4ZcN-yR3pShpFYBSDRyEbkOlE&usqp=CAU" alt="" />
                     <div className="card-body">
                        <p>Tampa Shoe Rack</p>
                        <h5>MRP ₹ 2,790 </h5>
                        <div className="like">
                           <img className="heart" width="30" height="30" src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png" alt="like--v1" />
                           <button className='button-green'>Avaiable Online</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='col-md-4  h-100'>
                  <div className="card ">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3__Y9rQmThFSj_CtxfKEGxgBPYfiB7rgQQ&usqp=CAU" alt="" />
                     <div className="card-body">
                        <p>Tampa Writing Table</p>
                        <h5>MRP ₹ 4,100 </h5>
                        <div className="like">
                           <img className="heart" width="30" height="30" src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png" alt="like--v1" />
                           <button className='button-green'>Avaiable Online</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='col-md-4  h-100'>
                  <div className="card">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zwweus0qYPLwbV0jkoe8aT5ULxtpIbENHg&usqp=CAU" alt="" />
                     <div className="card-body">
                        <p>Prxomia sofa set 2+3 seater</p>
                        <h5>MRP ₹ 44,390   <span className='cut'><h6>54,300</h6></span><span className='red-text'>(32% off)</span></h5>
                        <div className="like">
                           <img className="heart" width="30" height="30" src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png" alt="like--v1" />
                           <button className='button-green'>Avaiable Online</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='col-md-4  h-100'>
                  <div className="card">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_L7x4guUHou8TiEwlHjQRLKuvigGAcz3opo34cJsirKiVWdn7tJ-ACRNzlyAro6djyo&usqp=CAU" alt="" />
                     <div className="card-body">
                        <p>Audio Video Rack</p>
                        <h5>MRP ₹ 5,590 </h5>
                        <div className="like">
                           <img className="heart" width="30" height="30" src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png" alt="like--v1" />
                           <button className='button-green'>Avaiable Online</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='col-md-4  h-100'>
                  <div className="card">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQryCT6pv6VVPH9rsW8uGmQ20SBVAj9kmnjWw&usqp=CAU" alt="" />
                     <div className="card-body">
                        <p>Milli Study Table with Drawer and Cupboard</p>
                        <h5>MRP ₹ 9,990 <span className='cut'><h6>₹16,890</h6></span><span className='red-text'>(22% off)</span></h5>

                        <div className="like">
                           <img className="heart" width="30" height="30" src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png" alt="like--v1" />
                           <button className='button-green'>Avaiable Online</button>
                        </div> </div>
                  </div>
               </div>
               <div className='col-md-4  h-100'>

                  <div className="card">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWoi-c0S3aE86Fjmr_NWnMst8dBx0EYCr3w&usqp=CAU" alt="" />
                     <div className="card-body">
                        <p>SpiffyCupboard with 2 half glass Doors</p>
                        <h5>MRP ₹ 11,190 <span className='cut'><h6>₹18,890</h6></span><span className='red-text'>(26% off)</span> </h5>

                        <div className="like">
                           <img className="heart" width="30" height="30" src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png" alt="like--v1" />
                           <button className='button-green'>Avaiable Online</button>
                        </div></div>
                  </div>
               </div>

               <div className='col-md-4  h-100'>
                  <div className="card">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_R-4alCW0XOBR3tdl-UPxPF4KgkTvYytGQ&usqp=CAU" alt="" />
                     <div className="card-body">
                        <p> VidEm erson Queen Bed</p>
                        <h5>MRP ₹ 32,990 <span className='cut'><h6>₹6,000</h6></span><span className='red-text'>(40% off)</span></h5>
                        <div className="like">
                           <img className="heart" width="30" height="30" src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png" alt="like--v1" />
                           <button className=' button-green'>Avaiable Online</button>

                        </div>
                     </div>
                  </div>
               </div>
               <div className='col-md-4  h-100'>
                  <div className="card">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-US36uupMNGr_ndlx7XQPd2x2xcSw2IyDTw&usqp=CAU" alt="" />
                     <div className="card-body">
                        <p> VidEmerson Queen Bed</p>
                        <h5>MRP ₹ 32,990 <span className='cut'><h6>₹6,000</h6></span><span className='red-text'>(40% off)</span></h5>
                        <div className="like">
                           <img className="heart" width="30" height="30" src="https://img.icons8.com/ios-filled/50/FA5252/like--v1.png" alt="like--v1" />
                           <button className=' button-green'>Avaiable Online</button>

                        </div>
                     </div>
                  </div>
               </div> */}
            </div>
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
                     {/* <div className="vid">
<ul class="slideshow">
 <li><span></span></li>
 <li><span>2</span></li>
 <li><span></span></li>
 <li><span></span></li>
 <li><span></span></li>
</ul>                          
                                                                                                                 
</div> */}
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


      </div>

   )
}

export default Bed