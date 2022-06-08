import React from 'react'
import './Service.css'
import service from '../../Assets/Img/img_service.png'
import checklist from '../../Assets/Img/Group 53.png'

const Service = () => {
    return (
    <div className='row'>
        <div className='col-md-6'>
            <div className='img-our-service'>
                <img src={service} alt="" className='img-fluid'/>
            </div>
        </div>
        <div className='col-md-6 align-self-center mb-4'>
            <h2>Best Car Rental for any kind of trip Bekasi!</h2>
            <p>Sewa mobil di Bekasi bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <div className='img'>
              <img className='list' src={checklist} alt=""/>Sewa Mobil Dengan Supir di Bekasi 12 Jam <br/>
              <img className='list' src={checklist} alt=""/>Sewa Mobil Lepas Kunci di Bekasi 24 Jam <br/>
              <img className='list' src={checklist} alt=""/>Gratis Antar - Jemput Mobil di Bandara <br/>
              <img className='list' src={checklist} alt=""/>Layanan Airport Transfer / Drop In Out<br/>
            </div>
        </div>
    </div>
    )
  }
  
  export default Service