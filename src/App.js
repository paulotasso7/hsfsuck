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
      imgURL: 'https://media.istockphoto.com/vectors/identification-card-vector-line-icon-isolated-on-white-background-vector-id1138583106?k=20&m=1138583106&s=612x612&w=0&h=Za2SHan6eBmxsma6SZfohNfJzGJODzYn9OAfKqsxMmk=',
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
      .predict(Clarifai.MODERATION_MODEL, this.state.input)
      .then((response) => this.onImgRead(response))
      .catch(err => console.log('eroou:',err));
  }

  onImgRead = (param) => {
    const mapeador = param.outputs[0].data.concepts
    .map((res, i) => {
      return(<li>{res.name}: {res.value*100}%</li>);
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
