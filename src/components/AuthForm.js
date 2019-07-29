import React, { useState } from 'react';

import SocialAuth from './SocialAuth';
import './AuthForm.css';

const AuthForm = ({ isSignIn }) => {
  const [signIn, setSignIn] = useState(isSignIn);

  return (
    <div className={signIn ? "container right-panel-active" : "container"} id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <SocialAuth />
          <span>or use your email for registration</span>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <SocialAuth />
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="/">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={() => setSignIn(false)}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={() => setSignIn(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
