import React, { Component } from 'react';
import Clarifai from 'clarifai';

import './App.css';
import Navi from './Components/Navi/Navi';
import Header from './Components/Header/Header';
import Input from './Components/Input/Input';
import Content from './Components/Content/Content';


const app = new Clarifai.App({
  apiKey: '535818a426bf405c8cbcd84b4171e7e6'
 });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgURL: 'https://media.gettyimages.com/videos/modern-question-mark-line-icon-animation-on-white-background-video-id1213673269?s=640x640',
      imgBOX: [],
      imgR: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imgURL: this.state.input});
    app.models
      .predict(Clarifai.GENERAL_EMBED_MODEL, this.state.input)
      .then((response) => console.log(response))
      .catch(err => console.log('eroou:',err));
  }

  onImgRead = (param) => {
    const mapeador = param.outputs[0].data.concepts
    .map((res, i) => {
      return `${Math.round(res.value*100).toFixed(2)}% 
              ${res.name.charAt(0).toUpperCase() + res.name.slice(1)}`
    });
  this.setState({imgBOX: mapeador});
  }

  render() {
    const { imgURL, imgBOX } = this.state;
    return (
      <div>
          <Header/>
          <Navi/>
          <Input onInputChange= {this.onInputChange} onButtonSubmit= {this.onButtonSubmit} />
          <Content imgURL= {imgURL} imgBOX={imgBOX}/>
      </div>
    );  
  }

}

export default App;
