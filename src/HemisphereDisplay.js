import React from 'react'
import './hemisphere.css'
import NorthernImage from './image/NorthernHemisphere.jpg';
import SouthernImage from './image/SouthernHemisphere.jpg';


const hemisphereConfig = {
    Northern: {
        text: 'Hey! You Are In Northern Hemisphere',
        picture: NorthernImage

    },
    Southern:{

        text: 'Hey! You Are In Southern Hemisphere',
        picture: SouthernImage

    }
}

const HemisphereDisplay =({latitude})=>{

    // Using Ternary operator 
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const { text, picture} = hemisphereConfig[hemisphere]
    /*const picture = latitude > 0 ? NorthernImage : SouthernImage;*/
    return (
        <div className={hemisphere}>
            <div clasname = 'ui raised text container segment'>
               <div className="image">
                    <img src={picture} alt ="Hemisphere Pic"/>
                </div>
                <div className='ui teal bottom attached label'>
                    <h1>{ text }</h1>
                </div>
            </div>
        </div>
    )

}

export default HemisphereDisplay;