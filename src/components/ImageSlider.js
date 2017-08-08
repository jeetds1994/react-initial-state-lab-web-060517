// Bomb Component Code Goes Here


import React from 'react';
import ReactDOM from 'react-dom';


 class ImageSlider extends React.Component{
   constructor(){
     super()

     this.state = {
       currentSlideIndex: 0
     }
   }

   render() {
     const message = this.state.currentSlideIndex
     return (
       <div>I am on slide {message}</div>
     )
   }
 }


export default ImageSlider
