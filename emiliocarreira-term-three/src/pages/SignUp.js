import React from 'react';
import '../App'; 
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function SignUp() {

  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url = "http://localhost:5000/api/registerUser";
          const { data: res } = await axios.post(url, data);
          localStorage.setItem("token", res.data);
          navigate("/Login");
        } catch (error) {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            setError(error.response.data.message);
          }
        }
      };

    return (

        <>

        <Container id='topheading1'>
          <Row className='mt-3 mb-3'>
            <Col lg={12} className='justify-content-center'>
                <h2>CREATE ACCOUNT</h2>
            </Col>
          </Row>
        </Container>

        <Container id='container2'>
            <Row>
            <Col md={4} className='mt-4'>
                <svg id='svg-center' width="350" height="350" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="72" height="73" fill="#E5E5E5"/>
                <g id="Group 31">
                <g id="Group 27">
                <rect id="Rectangle 333" x="-98" y="-31" width="1868.42" height="2494" fill="#1C1C1C"/>
                <g id="Rectangle 257">
                <mask id="path-2-inside-1_0_1" fill="white">
                <path d="M-98 -31H1770.42V101H-98V-31Z"/>
                </mask>
                <path d="M-98 -31H1770.42V101H-98V-31Z" fill="#2D2D2D"/>
                <path d="M1770.42 96H-98V106H1770.42V96Z" fill="white" mask="url(#path-2-inside-1_0_1)"/>
                </g>
                <g id="Group 26">
                <path id="Ellipse 70" d="M70.3261 36.5C70.3261 56.132 54.8457 72 35.8066 72C16.7675 72 1.28711 56.132 1.28711 36.5C1.28711 16.868 16.7675 1 35.8066 1C54.8457 1 70.3261 16.868 70.3261 36.5Z" fill="#A26337" stroke="white" stroke-width="2"/>
                <ellipse id="Ellipse 71" cx="26.3754" cy="36.8242" rx="19.1742" ry="13.5664" fill="#111111"/>
                <ellipse id="Ellipse 72" cx="18.8619" cy="13.242" rx="18.8619" ry="13.242" transform="matrix(0.998004 0.0631493 -0.0598145 0.99821 26.8906 26.6133)" fill="#111111"/>
                <ellipse id="Ellipse 73" cx="38.0071" cy="27.7782" rx="11.9446" ry="12.2743" fill="#111111"/>
                <rect id="Rectangle 313" x="26.6914" y="31.6562" width="17.6026" height="6.46018" fill="#D9D9D9"/>
                <ellipse id="Ellipse 74" cx="4.41435" cy="6.76313" rx="4.41435" ry="6.76313" transform="matrix(0.939728 0.341923 -0.325771 0.945449 26.6973 28.4258)" fill="#D9D9D9"/>
                <ellipse id="Ellipse 75" cx="4.41222" cy="6.76625" rx="4.41222" ry="6.76625" transform="matrix(0.949307 -0.31435 0.299218 0.954185 36.1191 31.1992)" fill="#D9D9D9"/>
                <ellipse id="Ellipse 76" cx="31.4056" cy="35.8533" rx="1.57166" ry="1.61504" fill="#111111"/>
                <ellipse id="Ellipse 77" cx="38.9506" cy="35.8533" rx="1.57166" ry="1.61504" fill="#111111"/>
                </g>
                </g>
                </g>
                </svg>
            </Col>
            <Col sm={7} className='mt-4'>
                <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control className="form-input" 
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                onChange={handleChange}
                                value={data.firstName}
                                required
                            />
                            <p className='post-descriptor headings'>Enter First name</p>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Control className='form-input' 
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                onChange={handleChange}
                                value={data.lastName}
                                required
                        />
                        <p className='post-descriptor headings'>Enter Last Name</p>
                        </Form.Group>
                    </Col>
                </Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='form-input' 
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                        />
                        <p className='post-descriptor headings'>Enter Email</p>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='form-input' 
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                        />
                        <p className='post-descriptor headings'>Enter Password</p>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className='headings' type="checkbox" label="Except the term of Agreement" />
                    </Form.Group>

                        {error && <div className='error_msg'>{error}</div>}

                    {/* <Button onClick={navigateToCancel}  variant="secondary" type="submit">
                        Cancel?
                    </Button> */}
                    <Button type="submit" id='Form-btn-login' className='btn btn-primary'>
                        Sign Up!
                    </Button>

                    {/* <Button id='' variant="primary" type="submit">
                        Sign Up!
                    </Button> */}
                </Form>
            </Col>
            </Row>
            
        </Container>
        
    </>
    )
    }

    export default SignUp;