import React from 'react'
import car from '../../Assets/Img/img_car.png'
import './Hero.css'

const Hero = () => {
  return (
    <section class="hero">
            <div class="row">
                <div class="col-md-6" id="content-hero">
                    <div class="content-hero">
                        <h1 class="h1-hero-content mb-4">
                            Sewa & Rental Mobil Terbaik di Kawasan Bekasi
                        </h1>
                        <p class="p-hero-content">
                          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                        </p>
                        <button class="btn btn-custom mt-4">
                          Mulai Sewa Mobil
                        </button>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="img-hero d-flex justify-content-end">
                        <img src={car} alt="car-image" class="img-fluid"/>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Hero