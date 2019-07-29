import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './SocialAuth.css';

const SocialAuth = () => (
  <div className="social-container">
    <a href="/"><FontAwesomeIcon icon={faGoogle} size="1x" /></a>
    <a href="/"><FontAwesomeIcon icon={faFacebook} size="1x" /></a>
    <a href="/"><FontAwesomeIcon icon={faTwitter} size="1x" /></a>
  </div>
);

export default SocialAuth;
