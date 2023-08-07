import React from 'react';
import '../App'; 
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function Library() {
    return (
      <>
        <Container id='topheading1'>
          <Row className='mt-3 mb-3'>
            <Col lg={12} className='justify-content-center'>
                <h2>MY LIBRARY</h2>
            </Col>
          </Row>
        </Container>

        <Container id='container2'>
          <Row className='mt-3'>
            <Col id='testbox' lg={2} className='normal-text justify-content-center btn'>
                <img className='card-img w-100 h-auto' src='https://i.pinimg.com/236x/61/bf/73/61bf735782a9298796178aa7d3e8249b.jpg'></img>
                <p className='text-center mt-2'>Game Name Placeholder</p>
            </Col>
            <Col id='testbox' lg={2} className='normal-text justify-content-center btn'>
                <img className='card-img w-100 h-auto' src='https://i.pinimg.com/236x/b7/fb/81/b7fb81dfc8a7e6079a1430fdd482931c.jpg'></img>
                <p className='text-center mt-2'>Game Name Placeholder</p>
            </Col>
            <Col id='testbox' lg={2} className='normal-text justify-content-center btn'>
                <img className='card-img w-100 h-auto' src='https://i.pinimg.com/564x/55/ca/51/55ca5103558befbce5988b5057bca65a.jpg'></img>
                <p className='text-center mt-2'>Game Name Placeholder</p>
            </Col>
            <Col id='testbox' lg={2} className='normal-text justify-content-center btn'>
                <img className='card-img w-100 h-auto' src='https://i.pinimg.com/236x/5e/a8/d1/5ea8d10a3417714d1cd442b4ebecb0ce.jpg'></img>
                <p className='text-center mt-2'>Game Name Placeholder</p>
            </Col>
            <Col id='testbox' lg={2} className='normal-text justify-content-center btn'>
                <img className='card-img w-100 h-auto' src='https://i.pinimg.com/236x/ea/73/e3/ea73e33f2602cc085c8af5141a84af79.jpg'></img>
                <p className='text-center mt-2'>Game Name Placeholder</p>
            </Col>
          </Row>

          <Row className='mt-3'>
            <Col id='testbox' lg={2} className='normal-text justify-content-center btn'>
                <img className=' card-img w-100 h-auto' src='https://i.pinimg.com/236x/56/db/9e/56db9edaf12186df68c9e55a4d056c12.jpg'></img>
                <p className='text-center mt-2'>Game Name Placeholder</p>
            </Col>
            <Col id='testbox' lg={2} className='normal-text justify-content-center btn'>
                <img className='card-img w-100 h-auto' src='https://i.pinimg.com/236x/4c/94/b3/4c94b322b88866b428054484d84d1899.jpg'></img>
                <p className='text-center mt-2'>Game Name Placeholder</p>
            </Col>
            <Col id='testbox' lg={2} className='normal-text justify-content-center btn'>
                <img className='card-img w-100 h-auto' src='https://i.pinimg.com/564x/86/01/3d/86013d73534ca07e46fd1735fec59c84.jpg'></img>
                <p className='text-center mt-2'>Game Name Placeholder</p>
            </Col>
            <Col id='testbox' lg={2} className='normal-text justify-content-center btn'>
                <img className='card-img w-100 h-auto' src='https://i.pinimg.com/564x/11/1f/08/111f08386ead58ece38736b59430dd62.jpg'></img>
                <p className='text-center mt-2'>Game Name Placeholder</p>
            </Col>
            <Col id='testbox' lg={2} className='normal-text justify-content-center btn'>
                <img className='card-img w-100 h-auto' src='https://i.pinimg.com/564x/b6/2e/b6/b62eb6f80aa4fc27f502f0b8c51ef8c6.jpg'></img>
                <p className='text-center mt-2'>Game Name Placeholder</p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
  
  export default Library;