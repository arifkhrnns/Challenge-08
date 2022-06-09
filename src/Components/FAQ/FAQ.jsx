import React from 'react'
import './FAQ.css'

const FAQ = () => {
    return (
        <div class="container mb-5">
        <div class="row">
          <div class="col-6">
              <h2 class="h2-faq mb-4">Frequently Ask Question</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="col-6">
            <select class="form-select form-select-lg mb-3" aria-label="Default select example">
              <option selected>Apa saja yang dibutuhkan?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="form-select form-select-lg mb-3" aria-label="Default select example">
              <option selected>Berpa hari minimal lepas kunci?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="form-select form-select-lg mb-3" aria-label="Default select example">
              <option selected>Berpa hari sebelumnya sebaiknya booking sewa mobil</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="form-select form-select-lg mb-3" aria-label="Default select example">
              <option selected>Apakah ada biaya antar-jemput?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="form-select form-select-lg mb-2" aria-label="Default select example">
              <option selected>Bagaimana jika terjadi kecelakaan?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    )
}

export default FAQ