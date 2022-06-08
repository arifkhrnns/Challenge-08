import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { BsCheckCircleFill } from 'react-icons/bs';
import PDF from '../Assets/doc/contoh.pdf';
import { Viewer,Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const Invoice = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <BsCheckCircleFill className="text-success fs-1"></BsCheckCircleFill>
                <div className="text-center mt-2">
                    <h5 className="fw-bold">Pembayaran berhasil</h5>
                    <p>Tunjukan invoice ini kepetugas BCR ditempat</p>
                </div>
            </div>

            <div className="row">
                <div className="col-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <div className="row clearfix">
                                <div className="position-relative">
                                    <a href={PDF} type="button" className="btn btn-outline-primary float-end">Unduh</a>
                                </div>
                                <h5 className="fw-bold">Invoice</h5>
                                <p className="text-muted">No invoice</p>
                            </div>
                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">

                                <Viewer fileUrl={PDF} />
                            </Worker>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Invoice