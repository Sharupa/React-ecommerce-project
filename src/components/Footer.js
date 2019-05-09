import React, { Component } from 'react';




export default class Footer extends React.Component{

    render(){
        return(
<footer class="page-footer font-small pt-4">

   
    <div class="container">

     
      <ul class="list-unstyled list-inline text-center">
        <li class="list-inline-item">
          <a class="btn-floating btn-fb mx-1">            
            
            <a href="https://www.facebook.com" target="blank"><i class="fab fa-facebook-f"/></a>

          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-tw mx-1">
          <a href="https://www.twitter.com" target="blank"><i class="fab fa-twitter"/> </a>
          </a>
        </li>
        
        <li class="list-inline-item">
          <a class="btn-floating btn-li mx-1">
          <a href="https://www.linkedin.com" target="blank"> <i class="fab fa-linkedin-in"/> </a>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="btn-floating btn-dribbble mx-1">
          <a href="https://www.dribbble.com" target="blank"><i class="fab fa-dribbble"/> </a>
          </a>
        </li>
      </ul>
      

    </div>
    

   
    <div class="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="Saradha"> sharumbwebspl@gmail.com</a>
    </div>
  

  </footer>
        );
}
}