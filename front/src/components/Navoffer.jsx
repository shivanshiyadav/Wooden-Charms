import React from 'react'

const Navoffer = () => {
  return (

    <div>
      <div class="sidebar" style={{zIndex: 2}}>
        <div class="logo-details">
          <i class='bx bxl-c-plus-plus'></i>
          <span class="logo_name">Furniture</span>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#" class="active">
              <i class='bx bx-grid-alt' ></i>
              <span class="links_name">Discount</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-box' ></i>
              <span class="links_name">Wish List</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-list-ul' ></i>
              <span class="links_name">Order list</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i class='bx bx-coin-stack' ></i>
              <span class="links_name">Stock</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-book-alt' ></i>
              <span class="links_name">Total order</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-user' ></i>
              <span class="links_name">Team</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-message' ></i>
              <span class="links_name">Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-heart' ></i>
              <span class="links_name">Favrorites</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-cog' ></i>
              <span class="links_name">Setting</span>
            </a>
          </li>
          <li class="log_out">
            <a href="#">
              <i class='bx bx-log-out'></i>
              <span class="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
      <section class="home-section">
        <div class="home-content">
          <div class="overview-boxes">
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Order</div>
                <div class="number">40,876</div>
                <div class="indicator">
                  <i class='bx bx-up-arrow-alt'></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class='bx bx-cart-alt cart'></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Sales</div>
                <div class="number">38,876</div>
                <div class="indicator">
                  <i class='bx bx-up-arrow-alt'></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class='bx bxs-cart-add cart two' ></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Profit</div>
                <div class="number">₹12,876</div>
                <div class="indicator">
                  <i class='bx bx-up-arrow-alt'></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class='bx bx-cart cart three' ></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Return</div>
                <div class="number">11,086</div>
                <div class="indicator">
                  <i class='bx bx-down-arrow-alt down'></i>
                  <span class="text">Down From Today</span>
                </div>
              </div>
              <i class='bx bxs-cart-download cart four' ></i>
            </div>
          </div>
          <div class="sales-boxes">
            <div class="recent-sales box">
              <div class="title">Recent Sales</div>
              <div class="sales-details">
                <ul class="details">
                  <li class="topic">Date</li>
                  <li><a href="#">06 Jan 2024</a></li>
                  <li><a href="#">06 Jan 2024</a></li>
                  <li><a href="#">06 Jan 2024</a></li>
                  <li><a href="#">06 Jan 2024</a></li>
                  <li><a href="#">06 Jan 2024</a></li>
                  <li><a href="#">06 Jan 2024</a></li>
                  <li><a href="#">06 Jan 2024</a></li>
                  <li><a href="#">06 Jan 2024</a></li>
                </ul>
                <ul class="details">
                  <li class="topic">Customer</li>
                  <li><a href="#">Alex Doe</a></li>
                  <li><a href="#">David Mart</a></li>
                  <li><a href="#">Roe Parter</a></li>
                  <li><a href="#">Diana Penty</a></li>
                  <li><a href="#">Martin Paw</a></li>
                  <li><a href="#">Doe Alex</a></li>
                  <li><a href="#">Aiana Lexa</a></li>
                  <li><a href="#">Rexel Mags</a></li>
                  <li><a href="#">Tiana Loths</a></li>
                </ul>
                <ul class="details">
                  <li class="topic">Sales</li>
                  <li><a href="#">Delivered</a></li>
                  <li><a href="#">Pending</a></li>
                  <li><a href="#">Returned</a></li>
                  <li><a href="#">Delivered</a></li>
                  <li><a href="#">Pending</a></li>
                  <li><a href="#">Returned</a></li>
                  <li><a href="#">Delivered</a></li>
                  <li><a href="#">Pending</a></li>
                  <li><a href="#">Delivered</a></li>
                </ul>
                <ul class="details">
                  <li class="topic">Total</li>
                  <li><a href="#">₹204,908</a></li>
                  <li><a href="#">₹24,505</a></li>
                  <li><a href="#">₹25,808</a></li>
                  <li><a href="#">₹170,606</a></li>
                  <li><a href="#">₹56,506</a></li>
                  <li><a href="#">₹44,905</a></li>
                  <li><a href="#">₹67,303</a></li>
                  <li><a href="#">₹23,503</a></li>
                  <li><a href="#">₹46,502</a></li>
                </ul>
              </div>
              <div class="button">
                <a href="#">See All</a>
              </div>
            </div>
            <div class="top-sales box">
              <div class="title">Top Seling Product</div>
              <ul class="top-sales-details">
                <li>
                  <a href="#">
                    <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww" alt="" />
                    <span class="product">Vuitton Sunglasses</span>
                  </a>
                  <span class="price">$1107</span>
                </li>
                <li>
                  <a href="#">
                    <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <span class="product">Hourglass Jeans </span>
                  </a>
                  <span class="price">$1567</span>
                </li>
                <li>
                  <a href="#">
                    <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <span class="product">Nike Sport Shoe</span>
                  </a>
                  <span class="price">$1234</span>
                </li>
                <li>
                  <a href="#">
                    <img src="https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D" alt="" />
                    <span class="product">Hermes Silk Scarves.</span>
                  </a>
                  <span class="price">$2312</span>
                </li>
                <li>
                  <a href="#">
                    <img src="https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D" alt="" />
                    <span class="product">Succi Ladies Bag</span>
                  </a>
                  <span class="price">$1456</span>
                </li>

                <li>
                  <a href="#">
                    <img src="https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D" alt="" />
                    <span class="product">Bilack Wear's Shirt</span>
                  </a>
                  <span class="price">$1245</span>
                </li>
                <li>
                  <a href="#">
                    <img src="https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D" alt="" />
                    <span class="product">Gucci Womens's Bags</span>
                  </a>
                  <span class="price">$2345</span>
                  <li />
                  <a href="#">
                    <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <span class="product">Addidas Running Shoe</span>
                  </a>
                  <span class="price">$2345</span>
                </li>
              </ul>
            </div>
          </div>
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
            <div className="card" style={{ zIndex: -1 }}>
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
      </section>
      
    </div>
  )
}

export default Navoffer