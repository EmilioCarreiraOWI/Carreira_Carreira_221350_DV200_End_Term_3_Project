import React from 'react';
import '../App'; 
import 'bootstrap/dist/css/bootstrap.css';

function Landing() {
    return (
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner mt-5">
          <div class="carousel-item active">
            
            <div class="carousel-caption d-none d-md-block">
              <div>
                <img src="https://s3-alpha-sig.figma.com/img/9d5c/3b6f/867fdd9fec280218ea29f8a263357829?Expires=1691971200&Signature=lKSu4c-~LDYbckvW3kKWBrc0L91CKpRAJdt8~ITme3gJ4GtAEhq1TtCA-pXmGYC9h9RZLXJhBlavk5FZjoV0huZ2MdOzbNSaA3YxoOejm3zlLvG4Vq7ulU6SSkn0u~kgiujDD5qjodiGWs0stg39kCjjVJNtsNidmIe0PILC0ETz0BH4wxeiK8XORNctaURYLo7FvDlP6JFWdr~SDOs6aS~s6SkiwW198aoOiRyPRcmnlAEFcF2V3pUw4rhEBtFmgoUlhXSE60ADn8N4hGNALiferNG1efhoGiEZDuG~4sWWilhzSsLy7TEMmnC1LuAzOxHJVMDmLdFV8APm6M-YDA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" class="bigImg" alt='placeholder-bigImg'></img>
              </div>
              
              <h5>Cyberpunk</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
            </div>
          </div>
        </div>
      
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>

        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
      </div>
    );
  }
  
  export default Landing;