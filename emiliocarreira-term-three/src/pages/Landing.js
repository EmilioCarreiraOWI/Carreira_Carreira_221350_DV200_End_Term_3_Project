import React from 'react';
import '../App'; 
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Carousel } from 'react-carousel-minimal';
import 'react-multi-carousel/lib/styles.css';
import {useNavigate} from 'react-router-dom';


const data = [{
          image: "https://cdn1.epicgames.com/rosemallow/offer/TOW_EGS_LandscapeProductImage_2560x1440-2560x1440-4f2adef2a0292ae2e3a91a7b6b076547.jpg",
          caption: `<div>
                      The outer worlds
                      <br/>
                      Next line
                    </div>`
        },
        {
          image: "https://w0.peakpx.com/wallpaper/1004/530/HD-wallpaper-games-game-poster.jpg",
          caption: "Gears of war 4"
        },
        {
          image: "https://cdn1.epicgames.com/clary/offer/GameName_Store_Landscape_2560x1440%20(1)-2560x1440-2456ec2b7ad7c1a093330e607965d985.jpg",
          caption: "Assassin's Creed: Odyssey"
        },
        {
          image: "https://i.pinimg.com/originals/a7/1e/70/a71e70f0be92196f8567e6806da06738.png",
          caption: "Crysis 3"
        },
        {
          image: "https://m.media-amazon.com/images/I/71HsBff1RfL.jpg",
          caption: "Minecraft"
        },
        {
          image: "https://wallpapercave.com/wp/wp7095300.jpg",
          caption: "Horizon: Forbidden West"
        },
        {
          image: "https://wallpapercave.com/wp/wp6072817.jpg",
          caption: "Halo 5"
        },
        {
          image: "https://cutewallpaper.org/28/cool-pc-video-game-wallpaper-hd/291372088.jpg",
          caption: "Titanfall 2"
        },
        {
          image: "https://images.hdqwalls.com/download/call-of-duty-modern-warfare-3-4k-do-1366x768.jpg",
          caption: "Cakk of Duty: MW3"
        }
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }

    

function Landing() {

    const navigate = useNavigate();

    const navigateToIndevidual = () => {
      // 👇️ navigate to /contacts
      navigate('/Indevidual.js');
    };

    

    return (
      <>
      <Container id='topheading1'>
          <Row className='mt-3 mb-3'>
            <Col lg={12} className='justify-content-center'>
                <h2>HOME</h2>
            </Col>
          </Row>
        </Container>

        <Container id='container2'>
            <Row className='mt-3 mb-3'>
                <Col lg={12} className='justify-content-center'>
                    <h2 className='headings'>PAGE INFORMATION: </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='normal-text'>
                    The home page has 3 main Categories: Carousel, Popular, and New Games. the user should be able to click on the images or the game name for the hover effect. the carousel has two buttons on die left and right-hand side, The button allows the carousel to move where the user wish to go, but the carousel is nothing more than an image slider.
                    </p>
                </Col>
            </Row>
        </Container>

      <Container>

      
        <div className="App">
          <div style={{ textAlign: "center" }}>
            <div>
              <Carousel
                data={data}
                time={2500}
                width="950px"
                height="600px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  textAlign: "center",
                  maxWidth: "950px",
                  maxHeight: "600px",
                  margin: "40px auto",
                }}
              />
            </div>
          </div>
        </div>
</Container>
      <Container id='container1'>
        <Row className='mt-3'>
          <Col lg={12} className='justify-content-center pupularHeading'>
              <h1>Popular Games</h1>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col id='testbox' md={2} className='normal-text justify-content-center btn' onClick={navigateToIndevidual}>
              <img className='card-img w-100 h-auto' src='https://i.pinimg.com/236x/61/bf/73/61bf735782a9298796178aa7d3e8249b.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
          <Col id='testbox' md={2} className='normal-text justify-content-center btn' onClick={navigateToIndevidual}>
              <img className='card-img w-100 h-auto' src='https://i.pinimg.com/236x/b7/fb/81/b7fb81dfc8a7e6079a1430fdd482931c.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
          <Col id='testbox' md={2} className='normal-text justify-content-center btn' onClick={navigateToIndevidual}>
              <img className='card-img w-100 h-auto' src='https://i.pinimg.com/564x/55/ca/51/55ca5103558befbce5988b5057bca65a.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
          <Col id='testbox' md={2} className='normal-text justify-content-center btn' onClick={navigateToIndevidual}>
              <img className='card-img w-100 h-auto' src='https://i.pinimg.com/236x/5e/a8/d1/5ea8d10a3417714d1cd442b4ebecb0ce.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
          <Col id='testbox' md={2} className='normal-text justify-content-center btn' onClick={navigateToIndevidual}>
              <img className='card-img w-100 h-auto' src='https://i.pinimg.com/236x/ea/73/e3/ea73e33f2602cc085c8af5141a84af79.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
          
        </Row>
        <Row className='mt-3'>
          <Col id='testbox' md={2} className='normal-text justify-content-center btn' onClick={navigateToIndevidual}>
              <img className=' card-img w-100 h-auto' src='https://i.pinimg.com/236x/56/db/9e/56db9edaf12186df68c9e55a4d056c12.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
          <Col id='testbox' md={2} className='normal-text justify-content-center btn' onClick={navigateToIndevidual}>
              <img className='card-img w-100 h-auto' src='https://i.pinimg.com/236x/4c/94/b3/4c94b322b88866b428054484d84d1899.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
          <Col id='testbox' md={2} className='normal-text justify-content-center btn' onClick={navigateToIndevidual}>
              <img className='card-img w-100 h-auto' src='https://i.pinimg.com/564x/86/01/3d/86013d73534ca07e46fd1735fec59c84.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
          <Col id='testbox' md={2} className='normal-text justify-content-center btn' onClick={navigateToIndevidual}>
              <img className='card-img w-100 h-auto' src='https://i.pinimg.com/564x/11/1f/08/111f08386ead58ece38736b59430dd62.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
          <Col id='testbox' md={2} className='normal-text justify-content-center btn' onClick={navigateToIndevidual}>
              <img className='card-img w-100 h-auto' src='https://i.pinimg.com/564x/b6/2e/b6/b62eb6f80aa4fc27f502f0b8c51ef8c6.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
        </Row>

        <Row className='mt-4'> 
          <Col lg={12} className='justify-content-center  pupularHeading'>
              <h1>New Realests</h1>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col id='testbox' md={2} className='normal-text justify-content-center btn' onClick={navigateToIndevidual}>
              <img className=' card-img w-100 h-auto' src='https://i.pinimg.com/564x/60/51/1d/60511d3c833cc10aada357ee2a8790a0.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
          <Col id='testbox' md={2} className='normal-text justify-content-center btn' onClick={navigateToIndevidual}>
              <img className='card-img w-100 h-auto' src='https://i.pinimg.com/564x/c1/5e/a4/c15ea43f3c02e15697bb478395db01d8.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
          <Col id='testbox' md={2} className='normal-text justify-content-center btn' onClick={navigateToIndevidual}>
              <img className='card-img w-100 h-auto' src='https://i.pinimg.com/564x/de/ab/e8/deabe8f697b8fb26a5b9d09daaf73802.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
          <Col id='testbox' md={2} className='normal-text justify-content-center btn' onClick={navigateToIndevidual}>
              <img className='card-img w-100 h-auto' src='https://i.pinimg.com/564x/19/5c/7f/195c7f34ed8609d177089897df0fc27b.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
          <Col id='testbox' md={2} className='normal-text justify-content-center btn' onClick={navigateToIndevidual}>
              <img className='card-img w-100 h-auto' src='https://i.pinimg.com/564x/25/57/f2/2557f23797242715588bb4afe7503814.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
        </Row>
      </Container>
      </>
        



    );
  }

  
  export default Landing;