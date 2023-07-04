import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import png from './images/bell.png'
import pic from './images/shopping-bag.png'
import pict from './images/dial-pad.png'
import feed from './images/feedback (1).png'
import mob from './images/smartphone .png'
import nxt from './images/next.png'
import down from './images/arrow-down-sign-to-navigate.png'
import building from './images/building.png'
import feedbak from './images/feedbak.png'
import calender from './images/calendar.png'
import gift from './images/gift-box.png'
import locate from './images/location.png'




const Layout = () => {

  return (
    <div>
      <nav className='nav-dropdown-menu'>
        <ul className='humburger-menu-btn'>
        <button className="btn-mod" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
        <img src="https://www.bajajfinserv.in/MyAccountAsset/Login/images/menu.svg" alt="" srcset="" />
        </button>
        <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
        <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="staticBackdropLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">

        <div className='off-canvas-log'>
          <div>
            <img width={55} height={55} src="https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/my-account-v1-1?scl=1&fmt=png-alpha" alt="" />
          </div>
          <div className='offbody-text'>
            <h6>My Account</h6>
            <span className='off-para'>Make loan payments, withdrawn funds explore personalised offers, earn rewards and more</span>
          </div>
          <div>
            <Link to='SignIn'><img width={20} height={20} src={nxt} alt="" /></Link>
          </div>
        </div>

        <div className='off-canvas-build'>
          <div className='off-build-img'>
          <img width={20} height={20} src={building} alt="" />
          </div>
          <div className='off-support-full'>
          <h6>Our Companies</h6>
          <p className='off-support'>Learn more about our companies</p>
          </div> 
          <div>
          <img width={15} height={10} src={down} alt="" />
          </div> 
        </div>

        <div className='off-canvas-build'>
          <div className='off-build-img'>
          <img width={20} height={20} src={feedbak} alt="" />
          </div>
          <div className='off-support-full'>
          <h6>Help & Support</h6>
          <p className='off-support'>Raise a Query or find answers to your Questions</p>
          </div> 
          <div>
          <img width={15} height={10} src={down} alt="" />
          </div> 
        </div>

        <div className='off-canvas-build'>
          <div className='off-build-img'>
          <img width={20} height={20} src={calender} alt="" />
          </div>
          <div className='off-support-full'>
          <h6>Pay your Dues</h6>
          <p className='off-support'>Check your overdue amount and pay online</p>
          </div> 
          <div>
          <img width={15} height={10} src={down} alt="" />
          </div> 
        </div>
        <div className='off-canvas-build'>
          <div className='off-build-img'>
          <img width={20} height={20} src={gift} alt="" />
          </div>
          <div className='off-support-full'>
          <h6>My Rewards</h6>
          <p className='off-support'>View all the Rewards that you have earned so far</p>
          </div> 
          <div>
          <img width={15} height={10} src={down} alt="" />
          </div> 
        </div>
        <div className='off-canvas-build'>
          <div className='off-build-img'>
          <img width={20} height={20} src={locate} alt="" />
          </div>
          <div className='off-support-full'>
          <h6>Locate us</h6>
          <p className='off-support'>Find Bajaj finserv branch, a partner store or a hospital near you</p>
          </div> 
          <div>
          <img width={15} height={10} src={down} alt="" />
          </div> 
        </div> 

        </div>
        </div>
   
    <Link to='/'><img src="https://www.bajajfinserv.in/MyAccountAsset/images/bajajLogo.svg" alt="" /></Link>
    
    <div className='nav-bar-search'>
    <input className='nav-bar-searchbar' type="text" placeholder='Search Bajaj Finserv.in' />
    <img src="https://www.bajajfinserv.in/MyAccountAsset/images/searchBlack.svg" alt="" />
    </div>

    <div className='nav-bar-items' >
      <div className='nav-emi'>
      <img src="https://www.bajajfinserv.in/MyAccountAsset/Login/images/emicard_icon.png" alt="" />
      <Link className='nav-emi-text' to='EmiPage'>EMI Card</Link>
      </div>

      <div  className='nav-emi'>
      <button class="nav-emi-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      
      <img width={25} height={25} src={png} alt="" />
      <Link className='nav-emi-text' to='Alert'> alert</Link>

      </button>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      ...
      </div>
      </div>
      </div>

      <div  className='nav-emi'>
      <img width={25} height={25} src={pic} alt="" />
      <Link className='nav-emi-text' to='Cart'> Cart</Link>
      </div>
   
      <div  className='nav-emi'>
      <img width={25} height={25} src={pict} alt="" />
      <Link className='nav-emi-text' to='Partners'> Partners</Link>
      </div>
      <div  className='nav-emi'>
      <img src="https://www.bajajfinserv.in/MyAccountAsset/Login/images/prof.svg" alt="" />
      <Link className='nav-emi-text' to='SignIn'> SignIn</Link>       
      </div>
    </div>
   </ul>  
   <div className='dropdown-main-content'>
   <ul className='dropdown-main'>   
    <div className="dropdown">
      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Loans
      </button>
      <div>
      <ul className="dropdown-menu">
        <li className="drop-menu-content"><Link className='drop-menu-text' >All Loans</Link></li>
        <li className="drop-menu-content" ><Link className="drop-menu-text">Personal Loans</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Bussiness Loans</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Insta Personal Loans</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Gold Loans</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Loans for Doctors</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Medical Equipments Finance</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Loan for CAs</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Commercial Lending</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Home Loans</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Loan Against Property</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Lease Rental Discounting</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Loan Against Securities</Link></li>

      </ul>
    </div>
    </div> 
    <div className="dropdown">
      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        All On EMI
      </button>
      <div>
      <ul className="dropdown-menu">
        <li className="drop-menu-content"><Link className="drop-menu-text">Electronics</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Two-Wheelers</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">LifeStyles</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Travel</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Offer & Promotions</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Shop on E-Commerce</Link></li>
      </ul>
    </div>
    </div> 
    <div className="dropdown">
      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Bajaj Mall
      </button>
      <div>
      <ul className="dropdown-menu">
        <li className="drop-menu-content"><Link className="drop-menu-text">Action</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Another action</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Something else here</Link></li>
      </ul>
    </div>
    </div> 
    <div className="dropdown">
      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Cards
      </button>
      <div>
      <ul className="dropdown-menu">
        <li className="drop-menu-content"><Link className="drop-menu-text">Air Conditioners</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Air Coolers</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Smart Phones</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Two-Wheelers</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">LED TVs</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Fans</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Smart Phones</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Smart Phones</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Smart Phones</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Smart Phones</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Smart Phones</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Smart Phones</Link></li>

      </ul>
    </div>
    </div> 
    <div className="dropdown">
      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Investments
      </button>
      <div>
      <ul className="dropdown-menu">
        <li className="drop-menu-content"><Link className="drop-menu-text">Action</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Another action</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Something else here</Link></li>
      </ul>
    </div>
    </div> 
    <div className="dropdown">
      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Insurance
      </button>
      <div>
      <ul className="dropdown-menu">
        <li className="drop-menu-content"><Link className="drop-menu-text">Action</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Another action</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Something else here</Link></li>
      </ul>
    </div>
    </div> 
    <div className="dropdown">
      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Payments
      </button>
      <div>
      <ul className="dropdown-menu">
        <li className="drop-menu-content"><Link className="drop-menu-text">Action</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Another action</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Something else here</Link></li>
      </ul>
    </div>
    </div> 
    <div className="dropdown">
      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Offers
      </button>
      <div>
      <ul className="dropdown-menu">
        <li className="drop-menu-content"><Link className="drop-menu-text">Action</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Another action</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Something else here</Link></li>
      </ul>
    </div>
    </div> 
    <div className="dropdown">
      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Locate Us
      </button>
      <div>
      <ul className="dropdown-menu">
        <li className="drop-menu-content"><Link className="drop-menu-text">Action</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Another action</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Something else here</Link></li>
      </ul>
    </div>
    </div> 
    <div className="dropdown">
      <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Services
      </button>
      <div>
      <ul className="dropdown-menu">
        <li className="drop-menu-content"><Link className="drop-menu-text">Action</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Another action</Link></li>
        <li className="drop-menu-content"><Link className="drop-menu-text">Something else here</Link></li>
      </ul>
    </div>
    </div>
   </ul>
   <ul className='nav-drop-feed'>
      <div className='drop-mob'>
        <img width={20} height={20} src={feed} alt="" />
        <span className='drop-feed-back'>FeedBack</span>
      </div>
      <div className='drop-download'>
        <img width={20} height={20} src={mob} alt="" />
        <span className='drop-feed-back'>Download App</span>
      </div>
   </ul>
   </div>

   <Outlet/>
</nav>
</div>
  )
}

export default Layout