// import { fetchImages } from './utils';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import './App.css';

const App = () => {
  const [images, setImages] = useState([])
  const [userInput, setUserInput] = useState()
  const [title, setTitle] = useState()

  // useEffect(() => {
  //   fetchImages(setImages)
  // }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    setTitle(userInput)
  }

  return (
    <div className="App">
      <Navbar />
      <Profile />
      {/* <form onSubmit={submitHandler}>
        <Header title={title} />
        <input type="text" onChange={(e) => setUserInput(e.target.value)}/>
      </form>
      {title ? <h2>You wrote a title</h2> : <h2>Hurry up and write a title</h2>}
      {title && <h2>Hooray title is true</h2>}
      {images.map((image, i) => {
        return (
          <img 
            src={image.download_url} 
            alt={`random file from unslpash number ${i}`} 
            className="display-images"
          />
        )
      })} */}
    </div>
  );
}

export default App;
