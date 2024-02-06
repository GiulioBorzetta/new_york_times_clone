import React, { useState } from 'react';
import { TfiAlignRight } from "react-icons/tfi";
import { FiSearch } from "react-icons/fi";
import moment from 'moment';
import logo from '../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { auth } from '../firebase/setup';
import { signOut } from 'firebase/auth';

const NavBar = (props) => {

  const key = 'v9PSRdpw3WYn0kO0e08zwwImaJ0kXscl';

  async function updateAPI() {
    try {
      const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${props.search}&api-key=${key}`);

        if (response.data && response.data.response && response.data.response.docs) {
            props.setApiUp(response.data.response.docs);
        } else {
            console.error(response.data);
        }

    } catch (err) {
        console.error(err);
    }
};

  const [searchIcon, setSearchIcon] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const navigate = useNavigate()

  const logout = async () => {
    try{
      await signOut(auth);
      setTimeout(() => {
        navigate('/');
      },1000)
    }catch(err){
      console.error(err);
    }
  }

  return (
    <div className='grid grid-rows-3 md:p-7'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
          <TfiAlignRight onClick={() => setSideMenu(true)} className='w-5 h-5 cursor-pointer'/>
            { sideMenu && <div onMouseLeave={() => setSideMenu(false)} className='font-bold text-sm pl-5 pt-40 pb-4 z-10 absolute bg-white mt-60 shadow-2xl border border-gray-300 left-0 w-48'>
            <h1 onClick={() => props?.setMenu('Home')} className='mt-2 cursor-pointer'>Home Page</h1>
            <h1 onClick={() => props?.setMenu('World')} className='mt-2 cursor-pointer'>World</h1>
            <h1 onClick={() => props?.setMenu('Business')} className='mt-2 cursor-pointer'>Business</h1>
            <h1 onClick={() => props?.setMenu('Politics')} className='mt-2 cursor-pointer'>U.S.Politics</h1>
            <h1 onClick={() => props?.setMenu('News')} className='mt-2 cursor-pointer'>U.S.News</h1>
            <h1 onClick={() => props?.setMenu('Sports')} className='mt-2 cursor-pointer'>Sports</h1>
            <h1 onClick={() => props?.setMenu('Health')} className='mt-2 cursor-pointer'>Health</h1>
            <h1 onClick={() => props?.setMenu('Opinion')} className='mt-2 cursor-pointer'>Opinion</h1>
            <h1 onClick={() => props?.setMenu('Science')} className='mt-2 cursor-pointer'>Science</h1>
            <h1 onClick={() => props?.setMenu('Tech')} className='mt-2 cursor-pointer'>Tech</h1>
            <h1 onClick={() => props?.setMenu('Arts')} className='mt-2 cursor-pointer'>Arts</h1>
            <h1 onClick={() => props?.setMenu('Book Review')} className='mt-2 cursor-pointer'>Book Review</h1>
            <h1 onClick={() => props?.setMenu('Style')} className='mt-2 cursor-pointer'>Style</h1>
            <h1 onClick={() => props?.setMenu('Food')} className='mt-2 cursor-pointer'>Food</h1>
            <h1 onClick={() => props?.setMenu('Travel')} className='mt-2 cursor-pointer'>Travel</h1>
            <h1 onClick={() => props?.setMenu('Magazine')} className='mt-2 cursor-pointer'>Magazine</h1>
            </div>}
            <FiSearch onClick={() => setSearchIcon(!searchIcon)} className='w-4 h-4 ml-2 cursor-pointer'/>
            {searchIcon && <input onChange={(e) => props?.setSearch(e.target.value)} placeholder='SEARCH' className='border border-black rounded-sm p-1 ml-3'/>}
            {searchIcon && <button onClick={() => {props?.searchRef?.current?.scrollIntoView({behavior:'smooth'}); updateAPI()}} className='bg-blue-100 text-white text-xs font-medium p-2 rounded-sm ml-1'>GO</button>}
          </div>
            <div className='flex items-center'>
            {searchIcon ? <h1 className='text-xs ml-48 hidden md:block'>U.S</h1> :
            <h1 className='text-xs ml-96 hidden md:flex'>U.S</h1>}
            <h1 className='text-xs font-semibold ml-5 hidden md:flex'>INTERNATIONAL</h1>
            <h1 className='text-xs ml-5 hidden md:flex'>CANADA</h1>
            <h1 className='text-xs ml-5 hidden md:flex'>ESPANOL</h1>
            </div>
            {auth?.currentUser ? <button className='text-xs md:ml-96 bg-slate-400 p-1 w-16 text-white font-bold rounded-sm' onClick={logout}>LOGOUT</button>  : <Link to='/Login'>
              <button className='text-xs md:ml-96 bg-slate-400 p-1 w-16 text-white font-bold rounded-sm'>LOGIN</button>
            </Link>}
        </div>


        <div className='flex items-center justify-evenly md:mr-80'>
          <div>
            <h1 className='font-bold text-xs'>{moment(new Date()).format('DD-MM-YYYY')}</h1>
            <h1 className='hidden md:block'>Today's paper</h1>
          </div>
          <img src={logo} className='w-18 h-9 md:w-96 md:h-16' />
        </div>
        <div className='hidden md:block'>
          <hr className='mt-2' />
        </div>

        <div className='hidden md:flex flex justify-center text-sm mt-3 mr-60'>
          <h1 onClick={() => props?.setMenu('US')} className='ml-52 cursor-pointer'>U.S.</h1>
          <h1 onClick={() => props?.setMenu('World')} className='ml-7 cursor-pointer'>World</h1>
          <h1 onClick={() => props?.setMenu('Business')} className='ml-7 cursor-pointer'>Business</h1>
          <h1 onClick={() => props?.setMenu('US')} className='ml-7 cursor-pointer'>Arts</h1>
          <h1 onClick={() => props?.setMenu('Arts')} className='ml-7 cursor-pointer'>Lifestyle</h1>
          <h1 onClick={() => props?.setMenu('Opinion')} className='ml-7 cursor-pointer'>Opinion</h1>
          <h1 className='ml-4'>|</h1>
          <h1 onClick={() => props?.setMenu('Audio')} className='ml-5 cursor-pointer'>Audio</h1>
          <h1 onClick={() => props?.setMenu('Games')} className='ml-7 cursor-pointer'>Games</h1>
          <h1 onClick={() => props?.setMenu('Cooking')} className='ml-7 cursor-pointer'>Cooking</h1>
          <h1 onClick={() => props?.setMenu('Wirecutter')} className='ml-7 cursor-pointer'>Wirecutter</h1>
          <h1 onClick={() => props?.setMenu('Athletic')} className='ml-7 cursor-pointer'>The Athletic</h1>
        </div>
        <hr className='mt-2 border-black' />
        <hr className='hidden md:block mt-1  border-black' />
      
    </div>
  )
}

export default NavBar
