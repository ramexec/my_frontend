import React from 'react'
import Marquee from "react-fast-marquee";
import { images } from './data'
import './AMarquee.css'

export const AMarquee = () => {
  return (
    <div className='amarquee-main'>
        <div className="amarquee-body">
            <Marquee speed={50} pauseOnHover gradient={false}>
                {images.map((val,i) => (
                    <img src={val} className='amarquee-img' alt="" />
                ))}
            </Marquee>
        </div>
    </div>
  )
}
