import React, { useEffect, useState } from 'react'
import Header from './Header'
import {useLocation, Link} from 'react-router-dom';
import '../styles/navs.style.css'
import axios from 'axios'
import ShowCard from './ShowCard';
const LINKS = [
    { to: '/', text: 'Nearest rides' },
    { to: '/upcomming-rides', text: 'Upcomming rides (35)' },
    { to: '/past-rides', text: 'Post rides (20)' },
]
const Navs = () => {
    const location = useLocation();
  return (
    <div className='HomeBackground'>
        <div className='container d-flex'>
        {LINKS.map(item => (
          <div className='p-2' key={item.to}>
            <Link
              to={item.to}
              className={item.to === location.pathname ? 'active' : 'noActive'}
            >
              {item.text}
            </Link>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Navs