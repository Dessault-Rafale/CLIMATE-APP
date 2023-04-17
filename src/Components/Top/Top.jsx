import React, { useState } from 'react'
import "./top.css"
import Air from '@mui/icons-material/Air';
import CellTower from '@mui/icons-material/CellTower';
import Bloodtype from '@mui/icons-material/Bloodtype';
import WbSunny from '@mui/icons-material/WbSunny';
import WbTwilight from '@mui/icons-material/WbTwilight';
import moment from 'moment'



export default function Top({ inputchange, submitbutton, topdata }) {

console.log(topdata);
    return (
        <div >
           


            <>
            <div className='firstbox'>
                <h2 className='firsthead'>{topdata.city},{topdata.country}</h2>
                <h4 className='secondhead'>{moment().format('dddd Do MMMM')}</h4>
                <h5 className='thirdhead'>Population:{topdata.population}</h5>
            </div>
            <div className='secondbox'>
                <img className='image1' alt="" src="./Assets/clouds.jpg" />
                <h1 className='heading1'>{topdata.htemp}°C</h1>
                <p className='para1'>{topdata.main}, {topdata.desc}</p>
                <div className='air'><Air /> <span>{topdata.pressure} hpa</span></div>
                <div className='blood'><Bloodtype /> <span>{topdata.humidity} %</span> </div>
                <div className='tower'><CellTower /> <span>{topdata.wind} m/s N</span></div>
                <div className='time1'><WbSunny/> <span>{topdata.sunrise} A.M.</span></div>
                <div className='time2'><WbTwilight/> <span>{topdata.sunset} P.M.</span></div>
                </div>
                </>
            
        </div>
    )
}
