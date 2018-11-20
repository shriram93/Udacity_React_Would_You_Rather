import React from 'react'
import './page-not-found.scss'
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className="page-not-found">
    <div className="container">
      <div className="page-not-found-image">
        <img src='/images/404-error.svg' alt="404-error" />
      </div>
      <label className="custom-label--medium">The page you are trying to access does not exist or has been moved.</label>
      <label className="custom-label--medium">Try going back to our homepage.</label>
      <Link to="/" className="custom-button waves-effect waves-light btn">Home</Link>
    </div>
  </div>
);

export default PageNotFound