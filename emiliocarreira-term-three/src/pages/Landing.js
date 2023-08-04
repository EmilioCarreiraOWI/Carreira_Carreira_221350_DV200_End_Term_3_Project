import React from 'react';
import '../App'; 
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Carousel } from 'react-carousel-minimal';
import 'react-multi-carousel/lib/styles.css';

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
    return (
      <>
        <div className="App">
          <div style={{ textAlign: "center" }}>
            <div>
              <Carousel
                data={data}
                time={3000}
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

      <Container id='container1'>
        <Row className='mt-3'>
          <Col lg={12} className='justify-content-center pupularHeading'>
              <h1>Popular Games</h1>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col id='testbox' lg={2} className='justify-content-center'>
              <img className='w-100 h-auto' src='https://i.pinimg.com/564x/83/e8/ad/83e8addf549ba7274e90cd192006ec95.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
          <Col id='testbox' lg={2} className='justify-content-center'>
              <img className='w-100 h-auto' src='https://i.pinimg.com/564x/83/e8/ad/83e8addf549ba7274e90cd192006ec95.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
          <Col id='testbox' lg={2} className='justify-content-center'>
              <img className='w-100 h-auto' src='https://i.pinimg.com/564x/83/e8/ad/83e8addf549ba7274e90cd192006ec95.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
          <Col id='testbox' lg={2} className='justify-content-center'>
              <img className='w-100 h-auto' src='https://i.pinimg.com/564x/83/e8/ad/83e8addf549ba7274e90cd192006ec95.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
          <Col id='testbox' lg={2} className='justify-content-center'>
              <img className='w-100 h-auto' src='https://i.pinimg.com/564x/83/e8/ad/83e8addf549ba7274e90cd192006ec95.jpg'></img>
              <p className='text-center mt-2'>Game Name Placeholder</p>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col id='testbox' lg={2} className='justify-content-center'>
                <img className='w-100 h-auto' src='https://i.pinimg.com/564x/83/e8/ad/83e8addf549ba7274e90cd192006ec95.jpg'></img>
                <p className='text-center mt-2'>Game Name Placeholder</p>
            </Col>
            <Col id='testbox' lg={2} className='justify-content-center'>
                <img className='w-100 h-auto' src='https://i.pinimg.com/564x/83/e8/ad/83e8addf549ba7274e90cd192006ec95.jpg'></img>
                <p className='text-center mt-2'>Game Name Placeholder</p>
            </Col>
            <Col id='testbox' lg={2} className='justify-content-center'>
                <img className='w-100 h-auto' src='https://i.pinimg.com/564x/83/e8/ad/83e8addf549ba7274e90cd192006ec95.jpg'></img>
                <p className='text-center mt-2'>Game Name Placeholder</p>
            </Col>
            <Col id='testbox' lg={2} className='justify-content-center'>
                <img className='w-100 h-auto' src='https://i.pinimg.com/564x/83/e8/ad/83e8addf549ba7274e90cd192006ec95.jpg'></img>
                <p className='text-center mt-2'>Game Name Placeholder</p>
            </Col>
            <Col id='testbox' lg={2} className='justify-content-center'>
                <img className='w-100 h-auto' src='https://i.pinimg.com/564x/83/e8/ad/83e8addf549ba7274e90cd192006ec95.jpg'></img>
                <p className='text-center mt-2'>Game Name Placeholder</p>
            </Col>
        </Row>

        <Row className='mt-4'> 
          <Col lg={12} className='justify-content-center  pupularHeading'>
              <h1>New Realests</h1>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col id='testbox' lg={2} className='justify-content-center'>
            <img className='w-100 h-auto' src='https://i.pinimg.com/564x/b6/2e/b6/b62eb6f80aa4fc27f502f0b8c51ef8c6.jpg'></img>
              <p>Hello world</p>
          </Col>
          <Col id='testbox' lg={2} className='justify-content-center'>
            <img className='w-100 h-auto' src='https://i.pinimg.com/564x/b6/2e/b6/b62eb6f80aa4fc27f502f0b8c51ef8c6.jpg'></img>
              <p>Hello world</p>
          </Col>
          <Col id='testbox' lg={2} className='justify-content-center'>
            <img className='w-100 h-auto' src='https://i.pinimg.com/564x/83/e8/ad/83e8addf549ba7274e90cd192006ec95.jpg'></img>
              <p>Hello world</p>
          </Col>
          <Col id='testbox' lg={2} className='justify-content-center'>
            <img className='w-100 h-auto' src='https://i.pinimg.com/564x/83/e8/ad/83e8addf549ba7274e90cd192006ec95.jpg'></img>
              <p>Hello world</p>
          </Col>
          <Col id='testbox' lg={2} className='justify-content-center'>
            <img className='w-100 h-auto' src='https://i.pinimg.com/564x/83/e8/ad/83e8addf549ba7274e90cd192006ec95.jpg'></img>
              <p>Hello world</p>
          </Col>
        </Row>
      </Container>
      </>
        



    );
  }
  
  export default Landing;