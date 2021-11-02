import React, {useState}from 'react';
// import {Marker} from 'react-google-maps';
// import GoogleMap from 'react-google-maps';
import Map from './Maps'
import Card from './Cards/Cards'

import { Layout, Menu, Breadcrumb, Divider, Space } from 'antd';
import Cards from './Cards/Cards';

const { Header, Content, Footer } = Layout;

const covidData = [
  {id:"kasarani",
  cordinates:[-1.228440,36.910700]
  },
  {id:"langata",
  cordinates:[-1.345570, 36.742480]},
  {id:"Westlands",
  cordinates:[1.265190, 36.804770]},
  {id:"zimmerman",
  cordinates:[-1.285790, 36.820030]},

]


const LayOut = () =>{
 


    return (
        <>
         <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
       <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
        loadingElement= {<div style={{ height: `100%` }} />}
        containerElement = {<div style={{ height: `400px` }} />}
        mapElement = {<div style={{ height: `100%` }} />}

       >
        
       </Map>
       <Divider/>
    
            <Cards/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}> ©2021</Footer>
  </Layout>
        </>
    )
}

export default LayOut;

