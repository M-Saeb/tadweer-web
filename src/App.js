// importing React Library
import React from 'react';
// importing images
import background from './assets/background.jpg'
import Bottles from './assets/bottles.jpg'
import Bags from './assets/bags.jpg'
import Paper from './assets/paper.jpg'
import Arrow from './assets/arrow.svg'
// importing components
import Box from './components/materialBox'
import NavButton from './components/navButton'

function App() {

  // a function to show and hide nav bar
  const togglenav = (e) => {
    let node = e.target
    let parnet_node = node.parentNode
    if (parnet_node.style.width == "20rem"){
      parnet_node.style.width = "6rem"
      node.style.transform = "scaleX(1)"
    }
    else{
      parnet_node.style.width = "20rem"
      node.style.transform = "scaleX(-1)"
    }
  }

  return (

    // the styling is done using tailwindcss library, which is impored on the index.js file
    <div className="App h-screen bg-no-repeat bg-center bg-cover"
    style={{backgroundImage:  `url(${background})` }}>

      <div id="header" className="bg-gray-900 h-16 flex">
        <h1 className="text-3xl font-semibold pt-2 mx-auto text-yellow-500">tadweer</h1>
      </div>

      <div id="navbar" 
      className="absolute top-0 right-0 bottom-0 flex w-24 transition-all duration-500 overflow-hidden">
        <img className="opacity-75 cursor-pointer mr-8 transition duration-500" 
        onClick={togglenav} src={Arrow}/>

        <div className="bg-pink-200 w-64 flex " 
        style={{background: "linear-gradient(270.98deg, rgba(45, 55, 72, 0.64) 0.91%, rgba(147, 152, 161, 0.47) 63.18%, rgba(255, 255, 255, 0) 99.23%)"}}>
          <div className="mt-32">
            <NavButton title="Item 1"/>
            <NavButton title="Item 2"/>
            <NavButton title="Item 3"/>
          </div>
        </div>

      </div>

      <div id="body" className="mt-12 ml-32 flex justify-around flex-wrap"
      style={{width: '80%'}}>
        <Box image={Bottles} title="Plastic Bottles"/>
        <Box image={Bags} title="Plastic Bottles"/>
        <Box image={Paper} title="Plastic Bottles"/>

        <Box image={Bags} title="Plastic Bottles"/>
        <Box image={Paper} title="Plastic Bottles"/>
        <Box image={Bottles} title="Plastic Bottles"/>
      </div>

    </div>
  );
}

export default App;
