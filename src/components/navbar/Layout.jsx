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
   <div className='dropdown-main-box'>
   <div className='dropdown-box-full'>
   <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <Link>Link 1</Link>
    <Link>Link 2</Link>
    <Link>Link 3</Link>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <Link>Link 1</Link>
    <Link>Link 2</Link>
    <Link>Link 3</Link>
  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <Link>Link 1</Link>
    <Link>Link 2</Link>
    <Link>Link 3</Link>
  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <Link>Link 1</Link>
    <Link >Link 2</Link>
    <Link >Link 3</Link>
  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <Link >Link 1</Link>
    <Link >Link 2</Link>
    <Link >Link 3</Link>
  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <Link >Link 1</Link>
    <Link >Link 2</Link>
    <Link >Link 3</Link>
  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <Link >Link 1</Link>
    <Link >Link 2</Link>
    <Link >Link 3</Link>
  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <Link >Link 1</Link>
    <Link >Link 2</Link>
    <Link >Link 3</Link>
  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <Link >Link 1</Link>
    <Link >Link 2</Link>
    <Link >Link 3</Link>
  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <Link >Link 1</Link>
    <Link >Link 2</Link>
    <Link >Link 3</Link>
  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <Link >Link 1</Link>
    <Link >Link 2</Link>
    <Link >Link 3</Link>
  </div>
</div>
</div>
<div className='drop-mob'>
        <img width={20} height={20} src={feed} alt="" />
        <span className='drop-feed-back'>FeedBack</span>
      </div>
      <div className='drop-download'>
        <img width={20} height={20} src={mob} alt="" />
        <span className='drop-feed-back'>Download App</span>
      </div>
</div>
   <Outlet/>
</nav>
</div>
  )
}

export default Layout