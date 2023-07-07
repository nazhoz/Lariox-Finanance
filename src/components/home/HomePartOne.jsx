import React from 'react'
import health from './images/health-care.png'
import car from './images/car.png'
import bike from './images/motorcycle.png'
import fam from './images/family.png'
import injury from './images/injury.png'
import rsbag from './images/rs-bag.png'
import pigbank from './images/piggy-bank.png'
import sig from './images/investment.png'
import moneybag from './images/moneybag.png'
import trade from './images/trading.png'



const HomePartOne = () => {


  return (
    <div  className="homepart-main-cards">
      <div className='homepart-first-cards'>
        <div className='homepart-first-items'>
          <h5>Insurance Bazaar</h5>
          <span>Explore</span>
        </div>

        <div className='homepart-scnd-items'>
          <div className='homepart-scnd-img'>
            <div className='homepart-imgs'>
            <img src={health} alt="" />
            </div>
            <span>Health</span>
          </div>
          <div className='homepart-scnd-img'>
            <div className='homepart-imgs'>
            <img src={car} alt="" />
            </div>
            <span>Car</span>
          </div>
          <div className='homepart-scnd-img'>
            <div className='homepart-imgs'>
            <img src={bike} alt="" />
            </div>
            <span>Bike</span>
          </div>
          <div className='homepart-scnd-img'>
            <div className='homepart-imgs'>
            <img src={fam} alt="" />
            </div>
            <span>Term Life</span>
          </div>
          <div className='homepart-scnd-img'>
            <div className='homepart-imgs'>
            <img src={injury} alt="" />
            </div>
            <span>Accident</span>
          </div>
        </div>
      </div>

      <div className='homepart-first-cards'>
        <div className='homepart-first-items'>
          <h5>Invesmtent Bazaar</h5>
          <span>Explore</span>
        </div>

        <div className='homepart-scnd-items'>
          <div className='homepart-scnd-img'>
            <div className='homepart-imgs'>
            <img src={rsbag} alt="" />
            </div>
            <span>Mutual</span>
          </div>
          <div className='homepart-scnd-img'>
            <div className='homepart-imgs'>
            <img src={pigbank} alt="" />
            </div>
            <span>Open FD</span>
          </div>
          <div className='homepart-scnd-img'>
            <div className='homepart-imgs'>
            <img src={sig} alt="" />
            </div>
            <span>SIG</span>
          </div>
          <div className='homepart-scnd-img'>
            <div className='homepart-imgs'>
            <img src={moneybag} alt="" />
            </div>
            <span>SDP SMS</span>
          </div>
          <div className='homepart-scnd-img'>
            <div className='homepart-imgs'>
            <img src={trade} alt="" />
            </div>
            <span>Trading ac</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePartOne