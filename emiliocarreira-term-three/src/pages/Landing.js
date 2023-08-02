import React from 'react';
import '../App'; 
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://s3-alpha-sig.figma.com/img/9425/546e/f3ccc5fc14d8fe67c568ae945491a086?Expires=1691971200&Signature=pLriK5dwE~UJUGFjIrRyYirL8z7n~EQnFvyz-zzj0kA9UQIh5EO1~aNvPpLCC6pGpjQkViWjmR23Xhx5M~cK6M1fpvrF8-5qk1onLHX5Rr0MBj990Vi91jBJnxacKTkao-zyrFPvNnMWluTYCXJC5yLxhk1QyJOYBK-szL2TvhDzrfuzUOZ1sJK~GnhugVYeWqLVbEDizc9JW5DFVr2NxH2ypuREkIkoJZP1cXiEeIQ9GoBWr8ojEIO9~Wtt~0-B2pXkX77Lbfw2igdDin4mF6dfwCSxdStfrFnOuKlvoZjU-6zAKmYJpn-GydlMwPMRBA5UgWJ6hWoLrqRQosUxNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="First slide"></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>Slider One Item</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://i.postimg.cc/pVzg3LWn/2.jpg" alt="Second slide"></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>Slider One Item</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://i.postimg.cc/0y2F6Gpp/3.jpg" alt="Third slide"></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>Slider One Item</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, nulla, tempore. Deserunt excepturi quas vero.</p>
            </div>
          </div>
        </div>
      
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>

        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
  
  export default App;