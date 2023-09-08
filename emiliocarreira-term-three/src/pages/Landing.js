import React, { useEffect, useState } from 'react';
import '../App'; 
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Carousel } from 'react-carousel-minimal';
import 'react-multi-carousel/lib/styles.css';
import {useNavigate} from 'react-router-dom';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import DisplayIDs_10 from '../componets/10_IDS';
import DisplayIDs_5 from '../componets/5_IDS';
import axios from 'axios';




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

    const [ids, setIds] = useState([]);

  useEffect(() => {
    
    // Make the Axios request to fetch the IDs
    axios
      .get('http://localhost:5000/api/games')
      .then((response) => {
        // Assuming your API returns an array of IDs
        const idsData = response.data;
        // Slice the first 10 IDs to display
        const first10Ids = idsData.slice(0, 10);
        setIds(first10Ids);
      })
      .catch((error) => {
        console.error('Error fetching IDs:', error);
      });
  }, []);

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
        <Row>
          <Col>
            <DisplayIDs_10 />
          </Col>
        </Row>
        <Row className='mt-4'> 
          <Col lg={12} className='justify-content-center  pupularHeading'>
              <h1>New Realests</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DisplayIDs_5 />
          </Col>
        </Row>
     </Container>
      </>
        



    );
  }

  
  export default Landing;