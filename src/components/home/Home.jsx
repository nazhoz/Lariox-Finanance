import React from 'react'
import loan from './images/loan.png'
import house from './images/home.png'
import dr from './images/doctor.png'
import portfolio from './images/portfolio.png'
import emicard from './images/credit-card (1).png'
import shop from './images/shop.png'
import electro from './images/electronics.png'
import offer from './images/discount.png'
import crcard from './images/credit-card (3).png'
import rs from './images/rupee-indian.png'
import phone from './images/smartphone.png'
import bulb from './images/idea.png'
import coin from './images/coin-stack.png'
import drcard from './images/credit-card (4).png'
import gas from './images/gas-cylinder.png'
import build from './images/building.png'
import invest from './images/graph.png'
import investmnt from './images/investment.png'
import tick from './images/verify.png'
import verify from './images/correct.png'
import { Link } from 'react-router-dom'
import HomePartOne from './HomePartOne'


const Home = () => {
  return (
    <div className='home-main-page'>
        <div className='home-first-content'>
          <div className='home-cards'>

            <div className='home-credit-card'>
              <h6 className='home-text-loan'>Loans</h6>
              <div className='home-person-card'>
              <div className='home-person-text'>
                <div className='home-person-img'>
                <img width={35} height={35} src={loan} alt="" />
                </div>
                <p>Personal</p>
              </div>
              <div className='home-person-text'>
                <div className='home-person-img'>
                <img width={30} height={30} src={house} alt="" />
                </div>
                <p>Home</p>
              </div>
              <div className='home-person-text'>
                <div className='home-person-img'>
                <img width={30} height={30} src={dr} alt="" />
                </div>
                <p>Doctor</p>
              </div>
              <div className='home-person-text'>
                <div className='home-person-img'>
                <img width={30} height={30} src={portfolio} alt="" />
                </div>
                <p>Business</p>
              </div>
              </div>
            </div>

            <div className='home-debit-card'>
              <h6 className='home-text-loan'>EMI Network Card</h6>
              <div className='home-person-card'>
              <div className='home-person-text'>
                <div className='home-person-imgs'>
                <img width={35} height={35} src={emicard} alt="" />
                </div>
                <p>EMI Card</p>
              </div>
              <div className='home-person-text'>
                <div className='home-person-imgs'>
                <img width={30} height={30} src={shop} alt="" />
                </div>
                <p>Bajaj Mall</p>
              </div>
              <div className='home-person-text'>
                <div className='home-person-imgs'>
                <img width={30} height={30} src={electro} alt="" />
                </div>
                <p>Partners</p>
              </div>
              <div className='home-person-text'>
                <div className='home-person-imgs'>
                <img width={30} height={30} src={offer} alt="" />
                </div>
                <p>Offers</p>
              </div>
              </div>
            </div>
            <div className='home-cre-card'>
              <h6 className='home-text-loan'>Co-brand Credit Card</h6>
              <div className='home-person-card'>
              <div className='home-person-text'>
                <div className='home-person-imgs'>
                <img width={35} height={35} src={crcard} alt="" />
                </div>
                <p>Check Offer</p>
              </div>
              <div className='home-person-text'>
                <div className='home-person-imgs'>
                <img width={30} height={30} src={rs} alt="" />
                </div>
                <p>Joining Bonus</p>
              </div>
              <div className='home-person-text'>
                <div className='home-person-imgs'>
                <img width={30} height={30} src={offer} alt="" />
                </div>
                <p>Offers</p>
              </div>
              <div className='home-person-text'>
                <div className='home-person-imgs'>
                <img width={30} height={30} src={crcard} alt="" />
                </div>
                <p>Card Benfits</p>
              </div>
              </div>
            </div>

          </div>

          <div className='home-first-content-body'>
            <div className='home-billsitem-box'>
              <h5>Bills & Recharges</h5>
              <Link className='home-viewall' to=''>View All</Link>
            </div>

            <div className='home-recharge-box'>
              <div className='home-recharge-img'>
              <div className='home-mob-img'>
                <img width={40} height={40} src={phone} alt="" />
              </div>
              <p className='home-mob'>Mobile</p>
              </div>
              <div className='home-recharge-img'>
              <div>
                <img width={40} height={40} src={bulb} alt="" />
              </div>
              <p className='home-mob'>Electricity</p>
              </div>   
              <div className='home-recharge-img'>
              <div>
                <img width={40} height={40} src={coin} alt="" />
              </div>
              <p className='home-mob'>Loan</p>
              </div>   
              <div className='home-recharge-img'>
              <div>
                <img width={40} height={40} src={drcard} alt="" />
              </div>
              <p className='home-mob'>Credit Card</p>
              </div>  
              <div className='home-recharge-img'>
              <div>
                <img width={40} height={40} src={gas} alt="" />
              </div>
              <p className='home-mob'>LPG Gas</p>
              </div>
              </div>
          </div>
          <HomePartOne/>
        </div>


        <div className='home-scnd-content'>
            <div className='home-card-store'>
              <div className='home-superstore-head'>
                <h6 className='home-super-text'>Superstores</h6>
              </div>
              <div className='home-superstore-imgs'>
              <img src={build} alt="" />
              <span className='home-bajajmall'>Bajaj Mall</span>
              </div>
              <div className='home-superstore-imgs'>
              <img src={invest} alt="" />
              <span className='home-bajajmall'>Investments</span>
              </div>
              <div className='home-superstore-imgs'>
              <img src={investmnt} alt="" />
              <span className='home-bajajmall'>insurance Mall</span>
              </div>
              <div className='home-superstore-imgs'>
              <img src={tick} alt="" />
              <span className='home-bajajmall'>Securities</span>
              </div>
            </div>

            <div className='home-card-store'>
              <div className='home-superstore-head'>
                <img className='' src={verify} alt="" />
              </div>
              <div>
                <h5>Savadhaan Rahein.</h5>
                <h5>Safe Rahein.</h5>
              </div>
              <div className='home-verify-text'>
              <div>
                <span className='home-beware-text'>Beware of fraud calls/ SMSes/ emails/ fake online and print ads. Bajaj Finance never asks for advance payments for providing loans.</span>               
              </div>
              <div>
              <Link className='home-knowall'>Know All</Link>
              </div>
              </div>
              
            </div>
        </div>
    </div>
    
  )
}

export default Home