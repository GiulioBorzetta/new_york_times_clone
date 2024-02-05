import React, { useState } from 'react';
import Logo from '../images/logo.png';
import Google from '../images/google.svg';
import Facebook from '../images/facebook.svg';
import Apple from '../images/apple.svg';
import { Link } from 'react-router-dom';
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { googleProvider, auth, facebookProvider, appleProvider } from '../firebase/setup';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='flex flex-col '>
      <div className='shadow-md p-4 mb-8 flex justify-center'>
        <Link to='/'>
          <img src={Logo} className='w-40' alt='Logo' />
        </Link>
      </div>
      <div className='text-center  flex-col flex items-center justify-center'>
        <h1 className='text-gray-700 font-semibold text-2xl mb-4'>Log in or create an account</h1>
        <label className='font-bold text-base'>Email Address</label>
        <input type='email' onChange={(e) => setEmail(e.target.value)} className='w-11/12 p-2 border border-black mb-2 w-80' />
        <label className='font-bold text-base'>Password</label>
        <input type='password' onChange={(e) => setPassword(e.target.value)} className='w-11/12 p-2 border border-black mb-4 w-80' />
        <button onClick={handleEmailLogin} className='bg-black text-white w-11/12 p-2 font-semibold mb-4 w-80'>
          Create Account
        </button>
        <p>
          By continuing, you agree to the Terms of Sale, Terms of Service, and <br /> Privacy Policy.
        </p>
        <div onClick={() => handleSocialLogin(googleProvider)} className='border border-black w-11/12 p-2 flex items-center justify-center mb-2 cursor-pointer w-80'>
          <img src={Google} className='w-4 h-4 mr-4' alt='Google Icon' />
          <span className='font-bold'>Continue with Google</span>
        </div>
        <div onClick={() => handleSocialLogin(facebookProvider)} className='border border-black w-11/12 p-2 flex items-center justify-center mb-2 cursor-pointer w-80'>
          <img src={Facebook} className='w-4 h-4 mr-4' alt='Facebook Icon' />
          <span className='font-bold'>Continue with Facebook</span>
        </div>
        <div onClick={() => handleSocialLogin(appleProvider)} className='border border-black w-11/12 p-2 flex items-center justify-center cursor-pointer w-80'>
          <img src={Apple} className='w-4 h-4 mr-4' alt='Apple Icon' />
          <span className='font-bold'>Continue with Apple</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
