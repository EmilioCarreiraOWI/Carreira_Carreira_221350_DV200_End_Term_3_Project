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

  return (
    <>
      <div className="profile-dropdown-container">
        <Dropdown>
          <Dropdown.Toggle className="user-dropdown">
            <span>
              {decodedToken.firstName} {decodedToken.lastName}
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="text-center profile-dropdown-links">
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
