import React, { Component } from 'react';

import Carousel from 'nuka-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends React.Component{
    
    render(){
    return (
       
        <section id = "welcome">
        <div class = "container">
        <h2>Traditionz Jewelry Shop</h2>
        <p><h3>Welcome to Jewelry world and enjoy our amazing offers on Adorable Jewelry Collection!! </h3>
        </p>
        <div class = "carousel">
        <Carousel>
                <div>
                  <a href = "/ProductList">
                  <p className="legend"><h3>Ruby Studded gold ring for only $1500!!!</h3></p>
                    <img src="../img/product-2.png" alt='jewelry' style = {{marginLeft: 'auto',marginRight:'auto', display: 'block', width: '40%',opacity: '0.8'}}/> </a>
                </div>
                <div>
                  <a href = "/ProductList">
                  <p className="legend"><h3>Diamond Layered Chain only $1800</h3></p>
                <img src="../img/product-1.png" alt='jewelry'style = {{marginLeft: 'auto',marginRight:'auto', display: 'block', width: '40%', opacity: '0.8'}}/>
                    
                </a>
                </div>
                <div>
                  <a href = "/ProductList">
                  <p className="legend"><h3>Necklace Set only $800</h3></p>
                <img src="../img/product-3.png" alt='jewelry' style = {{marginLeft: 'auto',marginRight:'auto', display: 'block', width: '40%', opacity: '0.8'}}/>
                   
                </a>
                </div>
            </Carousel>
      </div> 
      <div id = "content">
      <h1>ABOUT US</h1>
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>             
        </div>

  </section>
    //----------------------------------------//
   
    
    );
}
}