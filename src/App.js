import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import PictureCard from './components/MainBody/Card/PictureCard'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
    let getToday = new Date();
    let getDay = String(getToday.getDate()).padStart(2, '0');
    const [day, setDay] = useState(getDay);
    let month = String(getToday.getMonth() + 1).padStart(2, '0'); //January is 0!
    let year = getToday.getFullYear();

    const today = year + '-' + month + '-' + getDay
    const [dayChange, setDayChange] = useState(year + '-' + month + '-' + day)

    const [image, setImage] = useState([]);
    const [date, setDate] = useState(today);
    console.log('the date is',date)

    
    // let another = (param) => {
    //     console.log('woot', param)
    //     setDay(param)
    //     console.log({day})
    //     setDayChange(year + '-' + month + '-' + day)
    //     console.log({dayChange})
    //     setDate(dayChange)
    //     console.log({date})
    //     axios.get(`https://api.nasa.gov/planetary/apod?api_key=IhKxDSJTAJjc89d4fOXzVpvFX7iR1E1KerB5l101&date=${date}`)
    //         .then(response => {
    //             setImage(response.data)
    //             console.log('axios call', response)
    //         })
    //         .catch(error => {
    //             console.log(error.message)
    //         })
    // };

    useEffect(()=>{
        setDayChange(year + '-' + month + '-' + day)
    },[day])

    useEffect(()=>{
        setDate(dayChange)
    },[dayChange])

    useEffect(() => {
        // another(day)
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=IhKxDSJTAJjc89d4fOXzVpvFX7iR1E1KerB5l101&date=${date}`)
            .then(response => {
                setImage(response.data)
                console.log('axios call', response)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [date]);

    return (
        <div className="App">
            <Header date={date} set={setDate} />
            <PictureCard data={image} day={day} set={setDay} date={date} today={today}/>
            <Footer/>
        </div>
    );
}

export default App;
