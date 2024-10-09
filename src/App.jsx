import { useEffect } from 'react'
import axios from 'axios'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'
import SearchBar from './components/SearchBar/SearchBar'


function App() {
  useEffect(() => {
  axios.get('https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY')
}, [])
  return (
    <>
    <SearchBar />
    <ImageGallery />
    <Loader />
    </>
  )
}

export default App
