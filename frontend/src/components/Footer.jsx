import React from 'react';
import logo from "../assets/logo.png";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import '../styles/animations.css';

export default function Footer() {
  return (
    <div className='relative'>
    <div className="absolute top-0 w-full bg-white text-black pb-8 pt-14 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-3 md:grid-cols-5 border-b-2 border-gray-600 py-8">
        <div className='ml-5 pt-3'>
          <div className='zoom-in'><figure><img className='rounded-[50%]' width={180} src={logo} alt="logo" /></figure></div>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, molestias. Harum aliquid repudiandae soluta itaque.</p> */}
        </div>
        <div className='ml-5'>
          <h6 className="font-bold uppercase py-2 relative">
            Location
            <div className='mt-1 w-20 h-1 bg-black rounded-md absolute top-8 left-0'>
              <span className='w-3.5 h-1 bg-white rounded-md absolute top-0 left-2.5'>
              </span>
            </div>
          </h6>
          <ol>
            <p className="py-1">TCET</p>
            {/* <p className="py-1">Thakur Village</p> */}
            <p className="py-1">Kandivali (E)</p>
            <p className="py-1">Mumbai-101</p>
            <p className="py-1">Class 608</p>
          </ol>
        </div>
        <div className='ml-5 md:ml-0'>
          <h6 className="font-bold uppercase py-2 relative">
            Links
            <div className='mt-1 w-12 h-1 bg-black rounded-md absolute top-8 left-0'>
              <span className='w-3.5 h-1 bg-white rounded-md absolute top-0 left-2.5'>
              </span>
            </div>
          </h6>
          <ol className="links">
            <li className="py-1"><a href="/">Home</a></li>
            <li className="py-1"><a href="/achievements">Achievements</a></li>
            <li className="py-1"><a href="/students">Students</a></li>
            {/* <li className="py-1"><a href="/resources">Resources</a></li> */}
            <li className="py-1"><a href="/contact">Contact</a></li>
          </ol>
        </div>
        <div className="mx-5 col-span-3 md:col-span-2 mt-8 md:mt-0 pt-2">
          <h6 className="pb-2 font-bold uppercase relative">
            Newsletter
            <div className='w-[105px] h-1 bg-black rounded-md absolute top-7 left-0'>
              <span className='w-3.5 h-1 bg-white rounded-md absolute top-0 left-2.5'>
              </span>
            </div>
          </h6>
          <p className="py-4">The latest achievements, opportunities and resources sent to your inbox weekly.</p>
          <form className="flex flex-col sm:flex-row">
            <input className="w-full p-2 mr-4 rounded-md mb-2 border-2 border-black" type="email" placeholder="Enter email" />
            <button className="px-4 py-2 mb-2 rounded-md bg-blue-600 text-white" type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center">
        <p>2024 &copy;PublicSquare, All rights reserved.</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl gap-2">
            <a className='zoom-in' href="#" target='_blank'><figure><FaFacebook /></figure></a>
            <a className='zoom-in' href="https://www.github.com/Alstudd" target='_blank'><figure><FaGithub /></figure></a>
            <a className='zoom-in' href="#" target='_blank'><figure><FaInstagram /></figure></a>
            <a className='zoom-in' href="#" target='_blank'><figure><FaWhatsapp /></figure></a>
            <a className='zoom-in' href="#" target='_blank'><figure><FaTwitter /></figure></a>
        </div>
      </div>
    </div>
    </div>
  )
}