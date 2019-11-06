import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import PictureCard from './components/MainBody/Card/PictureCard'
import Header from './components/Header/Header'

function App() {
    const [image, setImage] = useState([])
    const [date, setDate] = useState('2016-07-14')

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
            .then(response => {
                console.log(response)
                setImage(response.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    },[date])

    return (
        <div className="App">
            <Header/>
            <PictureCard data={image}/>
        </div>
    );
}

export default App;
