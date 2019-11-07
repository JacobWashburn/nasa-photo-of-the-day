import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import PictureCard from './components/MainBody/Card/PictureCard'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
    const [image, setImage] = useState([]);
    const [date, setDate] = useState('');

    useEffect(() => {
        let today = new Date();
        let day = String(today.getDate()).padStart(2, '0');
        let month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let year = today.getFullYear();
        today = year + '-' + month + '-' + day;
        setDate(today)
    }, []);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
            .then(response => {
                setImage(response.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }, [date]);

    return (
        <div className="App">
            <Header date={date} setDate={setDate} />
            <PictureCard data={image}/>
            <Footer/>
        </div>
    );
}

export default App;
