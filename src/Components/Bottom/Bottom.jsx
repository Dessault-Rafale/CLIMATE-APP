import React from 'react'
import "./bottom.css"
import moment from 'moment'


export default function Bottom({ dayitem }) {
  console.log(dayitem);
  return (
    <div className='seconddiv'>


      <div className='jins'>
        {dayitem&&dayitem.map((value) =>

          <div className='box1'>
            <center>
              {/* {console.log(value)} */}
              <h2 className='today'>{moment(value?.dt * 1000).format("dddd")}</h2>
              <img src="./Assets/clouds.jpg" className='imageA' />
              <p className='degree'> {value?.temp.min} ° C - {value.temp.max} °C</p>
              <p className='rain'>{value?.weather[0]?.main},</p>
              <p className='light'>{value?.weather[0]?.description}</p>
            </center>
          </div>
        )}




        {/* <div className='box1'>
        <center>
          <h2 className='today'>Sat</h2>
          <img src="./Assets/clouds.jpg" className='imageA' />
          <p className='degree'> 23.62 ° C - 28.29 °C</p>
          <p className='rain'>Rain,</p>
          <p className='light'>light rain</p>
        </center></div>


      <div className='box1'>
        <center>
          <h2 className='today'>Sun</h2>
          <img src="./Assets/clouds.jpg" className='imageA' />
          <p className='degree'> 24.7 ° C - 28.42 °C</p>
          <p className='rain'>Rain,</p>
          <p className='light'>moderate rain</p>
        </center></div>


      <div className='box1'>
        <center>
          <h2 className='today'>Mon</h2>
          <img src="./Assets/clouds.jpg" className='imageA' />
          <p className='degree'> 24.12 ° C - 28.69 °C</p>
          <p className='rain'>Rain,</p>
          <p className='light'>light rain</p>
        </center></div>

        <div className='box1'>
        <center>
          <h2 className='today'>Tue</h2>
          <img src="./Assets/clouds.jpg" className='imageA' />
          <p className='degree'> 24.12 ° C - 28.69 °C</p>
          <p className='rain'>Rain,</p>
          <p className='light'>light rain</p>
        </center></div>

        <div className='box1'>
        <center>
          <h2 className='today'>Wed</h2>
          <img src="./Assets/clouds.jpg" className='imageA' />
          <p className='degree'> 24.12 ° C - 28.69 °C</p>
          <p className='rain'>Rain,</p>
          <p className='light'>light rain</p>
        </center></div>

        <div className='box1'>
        <center>
          <h2 className='today'>Thu</h2>
          <img src="./Assets/clouds.jpg" className='imageA' />
          <p className='degree'> 24.12 ° C - 28.69 °C</p>
          <p className='rain'>Rain,</p>
          <p className='light'>light rain</p>
        </center></div> */}
      </div>
    </div>
  )
}
