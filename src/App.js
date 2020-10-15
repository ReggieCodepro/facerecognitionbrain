import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'abcb33311e694dc1a570307d3f57561d'
});

const particlesOptions = {
  
    particles: {
      number:{
        value: 60,
        density: {
          enable: true,
          value_area: 800
        }
      }

    }
  }

class App extends Component { 
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onButtonSubmit = () => {
    console.log('click');
    app.models.predict(Clarifai.COLOR_MODEL,
     "https://samples.clarifai.com/face-det").then(
    function(reponse){
      console.log(reponse);
      
    },
    function(err){

    }
    );
  }
  render(){
    return (
      <div className="App"> 
      
            <Particles className='particles'
              params={particlesOptions}
            />
      <Navigation />
      <Logo />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <Rank />
      <FaceRecognition />
      </div>
    )
  }
}

export default App;
