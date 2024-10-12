import { useEffect } from 'react'
import axios from 'axios'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery'
import Loader from './components/Loader/Loader'
import SearchBar from './components/SearchBar/SearchBar'



function App() {
  useEffect(() => {
  axios.get('https://api.unsplash.com/photos/?client_id=41cosF564XUZ5gR0hUuTx32XpetmnkYga7XyLCIyg2U').then(res => console.log(res.data))
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
