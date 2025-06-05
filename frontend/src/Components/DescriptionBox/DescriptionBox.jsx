import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An eCommerce website is a digital platform that enables businesses
             and individuals to buy and sell products or services online.
              It provides a seamless shopping experience by offering features 
              such as product listings, secure payment gateways, customer reviews,
               and order tracking. With the rise of mobile commerce and AI-driven 
               recommendations, eCommerce platforms personalize shopping experiences,
                making it easier for customers to find what they need.</p>
                <p>E-commerce websites typically display products or services along
                    with detailed descriptions,images,prices and any available variations
                    (e.g. sizes,colors).Each product usually has its own dedicated page with relevant information.
                </p>
      </div>
    </div>
  )
}

export default DescriptionBox
