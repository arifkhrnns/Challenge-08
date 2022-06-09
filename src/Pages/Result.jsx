import React, { Component } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Panel from '../Components/Search/Search'
import Footer from '../Components/Footer/Footer'
import Cars from '../Components/Card/Cars'
import {connect} from 'react-redux';


class Home extends Component {

    state = {
        data: []
    }

    async getData() {
        let data = await fetch('https://rent-cars-api.herokuapp.com/admin/car')
        let datas = await data.json();
        this.setState({data: datas})
    }


    componentDidMount() {
        this.props.getData();
    }

    getDevi

  render() {
    return (
      <div>
          <Navbar></Navbar>
          <div className='' style={{height:`100px`}}>

          </div>
          <Panel show="true" edit="true"></Panel>

          <div className="row">
            <div className="container d-flex flex-wrap justify-content-between w-80">
            { this.props.data.map((e,key)=>{ 
                return <Cars key={key} {...e}/>
            }) }
            </div>
          </div>
          <Footer></Footer>
      </div>
    )
  }
}

const getData = () => async(dispatch) => {
  let data = await fetch('https://rent-cars-api.herokuapp.com/admin/car')
  let datas = await data.json();
  return dispatch({type:'FETCH_DATA', payload: datas})
}

const mapDispatchToProps = (dispatch) => {
  return {
      getData : () => dispatch(getData())
  }
}

const mapStateToProps = (state) => {
  console.log('dari global : ');
  console.log(state.data);
  return {
      data : state.data,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)