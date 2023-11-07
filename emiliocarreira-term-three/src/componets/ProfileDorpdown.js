import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import React, { useState } from 'react';

function ProfileDropdown() {
  const navigate = useNavigate();

  let token = localStorage.getItem('token');
  let decodedToken = jwtDecode(token);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/Login');
    window.location.reload();
  };

  const placeholderImageUrl =
    'https://i.pinimg.com/564x/97/53/c7/9753c72c6d14406f178f72324fab7ed3.jpg'; // Replace with your placeholder image URL

  return (
    <>
      <div className="text-end profile-dropdown-container">
        <Dropdown>
          <Dropdown.Toggle className="user-dropdown">
            {decodedToken.image ? (
              <img
                className="nav-profile-pic"
                src={`http://localhost:5000/profileImages/${decodedToken.image}`}
                alt="..."
              />
            ) : (
              <img
                className="nav-profile-pic"
                src={placeholderImageUrl}
                alt="Placeholder"
              />
            )}
            <span>
              {decodedToken.firstName} {decodedToken.lastName}
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="profile-dropdown-links">
              <Link to="/Landing">Home</Link>
              <Link to="/More">More</Link>
              <Link to="/Cart">Cart</Link>
              <Dropdown.Divider />
              <Link to="/Login" onClick={handleLogout}>
                Log Out
              </Link>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

export default ProfileDropdown;
