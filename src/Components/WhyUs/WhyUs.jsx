import React from 'react'
import './WhyUs.css'
import hrs from '../../Assets/Img/icon_24hrs.png'
import complete from '../../Assets/Img/icon_complete.png'
import price from '../../Assets/Img/icon_price.png'
import proffesional from '../../Assets/Img/icon_professional.png'

const WhyUs = () => {
    return (
        <div className='container mt-5 mb-5'>
        <div className='row'>
          <h2>Why Us?</h2>
          <p className='why mt-4'>Mengapa harus pilih binar car rental?</p>
        </div>
          <div className='row mt-4'>
            <div className='col-md-3 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <img src={complete} classNamecard-img-top mb-3 alt="icon_complete"/>
                  <h5 className='card-title mb-4'>Mobil Lengkap</h5>
                  <p className='card-text'>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </div>
              </div>
            </div>
            <div className='col-md-3 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <img src={price} className='card-img-top mb-3' alt="icon_price"/>
                  <h5 className='card-title mb-4'>Harga Murah</h5>
                  <p className='card-text'>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                </div>
              </div>
            </div><div className='col-md-3 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <img src={hrs} className='card-img-top mb-3' alt="icon_24hrs"/>
                  <h5 className='card-title mb-4'>Layanan 24 Jam</h5>
                  <p className='card-text'>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                </div>
              </div>
            </div><div className='col-md-3 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <img src={proffesional} className='card-img-top mb-3' alt="icon_professional"/>
                  <h5 className='card-title mb-4'>Sopir Professional</h5>
                  <p className='card-text'>Sopir yang professional, berpengalaman, jujur dan selalu tepat waktu</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}

export default WhyUs