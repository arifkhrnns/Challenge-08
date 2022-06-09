import React, { Component } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Panel from '../Components/Search/Search'
import Footer from '../Components/Footer/Footer'
import Service from '../Components/Service/Service'
import WhyUs from '../Components/WhyUs/WhyUs'
import Testimonial from '../Components/Testimonial/Testimonial'
import Order from '../Components/Order/Order'
import FAQ from '../Components/FAQ/FAQ'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const state = {
  labels: ['Brio', 'Ayla', 'Ertiga','Avanza', 'Xenia'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#c5d2db',
        '#2096ba',
        '#874e4c',
        '#ff7f5f',
        '#a0c1b8'
      ],
      hoverBackgroundColor: [
      '#9fb4c2',
      '#166a80',
      '#5e3534',
      '#9e4e3a',
      '#667d77'
      ],
      data: [15, 20, 5, 23, 20]
    }
  ]
}

export default class Home extends Component {
  render() {
    return (
      <div>
          <Navbar></Navbar>
          <Hero></Hero>
          <Panel show="true" cari="false"></Panel>
          
          <div className="row justify-content-center my-5">
            <div className="col-4">
              <h4 className="text-center fw-bold">Data mobil terlaris bulan ini</h4>
              <Pie
                options={{
                  title:{
                    display:true,
                    text:'Average Rainfall per month',
                    fontSize:20
                  },
                  legend:{
                    display:true,
                    position:'right'
                  }
                }}
                data={state}
              />
            </div>
          </div>
          <Service></Service>
          <WhyUs></WhyUs>
          {/* <Testimonial  ></Testimonial> */}
          <Order></Order>
          <FAQ></FAQ>
          <Footer></Footer>
      </div>
    )
  }
}
