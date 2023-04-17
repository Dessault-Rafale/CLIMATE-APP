import Top from "./Components/Top/Top";
import Bottom from "./Components/Bottom/Bottom";
import { useState, } from "react"
import Search from '@mui/icons-material/Search';

// import react, { useEffect } from "react"
// import axios from 'axios'

function App() {
  const [input, setInput] = useState({
    cityname: "",
    citydetails: {},
    weekdetails: []

  })





  const inputchanger = (event) => {
    // console.log(event.target.name);

    const value = event.target.value
    setInput({ ...input, cityname: value })
    console.log(input);
  }


  const Searchbutton = () => {
    console.log(input.cityname);
    fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${input.cityname}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`)
      .then(res => res.json())
      .then(response => {
        console.log(response)

        //   const months = ['january','February','March','April','May','June','July','August','september','october','November','December']
        //   const days = ['Sunday','Monday','Tuesday','wednesday','Thursday','Friday','Saturday','Sunday']
        //   const currentDate = new Date()
        //   console.log("day----",currentDate.getDate());
        //   const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
        //   console.log(currentDate.getMonth())
        //   console.log("date--",date);
        const sunset = new Date(response.list[0].sunset * 1000).toLocaleTimeString().slice(0, 4)
        console.log(sunset);
        const sunrise = new Date(response.list[0].sunrise * 1000).toLocaleTimeString().slice(0, 4)
        console.log(sunrise);

        const currentData = {
          city: response?.city?.name,
          country: response?.city?.country,
          pressure: response?.list[0]?.pressure,
          humidity: response?.list[0]?.humidity,
          sunrise: sunrise,
          sunset: sunset,
          clouds: response?.list[0]?.clouds,
          desc: response?.list[0]?.weather[0]?.description,
          main: response?.list[0]?.weather[0]?.main,
          icon: response?.list[0]?.weather[0]?.icon,
          population: response?.city?.population,
          wind: response?.list[0]?.speed,
          htemp: response?.list[0]?.temp.max,
          ltemp: response?.list[0]?.temp.min,
          date: response.list[0]?.dt

        }
        console.log(currentData);

        setInput({
          ...input,
          citydetails: currentData,
          weekdetails: response.list
        })
        console.log(input);

      })


  }

  console.log(input.weekdetails);




  return (
    <div className='first'>
      < >
        <input className='searchbox' name='searcher' onChange={inputchanger} placeholder='calicut' />
      </>
      <div className='searchicon' onClick={Searchbutton}>
        <Search />
      </div>
      {console.log(input.citydetails.city)}
      {input.citydetails.city == undefined ? <></> : <>
        <Top inputchange={inputchanger} submitbutton={Searchbutton} topdata={input.citydetails} />
        <Bottom dayitem={input.weekdetails} />

      </>}


    </div>
  );
}


export default App;
