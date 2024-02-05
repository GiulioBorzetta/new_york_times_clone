import React from 'react';
import newyork from '../images/logo.png';

const Footer = (props) => {
  return (
    <div className='p-7'>
        <div>
            <hr/>
            <hr className='mt-1'/>
            <img src={newyork} className='w-52 h-8' />
            <div className='flex flex-wrap justify-evenly p-4'>
                <div>
                    <h1 className='font-bold text-sm'>NEWS</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('home')}>Home Page</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('World')}>World</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Coronavirus')}>Coronavirus</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('U.S.World')}>U.S.World</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('U.S.Politics')}>U.S.Politics</h1>
                </div>
                <div className='ml-5 mb-2'>
                    <h1 className='font-bold text-sm'>OPINION</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Opinion')}>Today's Opinion</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Editorials')}>Editorials</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('video')}>Opinion video</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Letters')}>Letters</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Columnists')}>Columnists</h1>
                </div>
                <div className='ml-5 mb-2'>
                    <h1 className='font-bold text-sm'>ARTS</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Movies')}>Movies</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Books')}>Books</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Video')}>Video</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Music')}>Music</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Dance')}>Dance</h1>
                </div>
                <div className='ml-5 mb-2'>
                    <h1 className='font-bold text-sm'>LIVING</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Food')}>Food</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Health')}>Health</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Travel')}>Travel</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Love')}>Love</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Job')}>Job</h1>
                </div>
                <div className='ml-5 mb-2'>
                    <h1 className='font-bold text-sm'>MORE</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Cooking')}>Cooking</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Graphics')}>Graphics</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Podcasts')}>Podcasts</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Video')}>Video</h1>
                    <h1 className='cursor-pointer' onClick={() => props?.setMenu('Articles')}>Articles</h1>
                </div>
            </div>

        </div>
        <hr/>
          <div className='flex flex-wrap justify-evenly p-4 text-sm'>
              <div>
                <h1>&#9400; 2024 The NewYork Times Company</h1>
              </div>
              <div className='ml-2'>
                <h1>NYTCo</h1>
              </div>
              <div className='ml-2'>
                <h1>Contact Us</h1>
              </div>
              <div className='ml-2'>
                <h1>Accessibility</h1>
              </div>
              <div className='ml-2'>
                <h1>Work with us</h1>
              </div>
              <div className='ml-2'>
                <h1>Advertise</h1>
              </div>
              <div className='ml-2'>
                <h1>T Brand Studio</h1>
              </div>
              <div className='ml-2'>
                <h1>Your Ad Choises</h1>
              </div>
              <div className='ml-2'>
                <h1>Privacy Policy</h1>
              </div>
              <div className='ml-2'>
                <h1>Terms of Service</h1>
              </div>
              <div className='ml-2'>
                <h1>Terms of Sale</h1>
              </div>
              <div className='ml-2'>
                <h1>Site Map</h1>
              </div>
              <div className='ml-2'>
                <h1>Help</h1>
              </div>
              <div className='ml-2'>
                <h1>Subscription</h1>
              </div>
          </div>
          <div className='flex items-center justify-center mt-5 text-sm'>
            <div>
              <h1>Manage Privacy Preferences</h1>
            </div>
          </div>
    </div>
  )
}

export default Footer
