import React, {useState}from 'react';
// import {Marker} from 'react-google-maps';
// import GoogleMap from 'react-google-maps';
import LeaFletMap from './LeaFletMap';
import Card from './Cards/Cards'

import { Layout, Menu, Divider, Row, Col} from 'antd';
import Cards from './Cards/Cards';

const { Header, Content, Footer } = Layout;

// styles
const rightStyle = {textAlign:"right", float:"right", marginLeft:"auto"}


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
				<Header  >
					<div className="logo" />
					{/* <Row>
						<Col> */}
								<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{display:"flex"}}>
								
								<Menu.Item key="1" style={rightStyle}>Home</Menu.Item>
								{/* <Menu.Item key="2"style={rightStyle}>nav 2</Menu.Item> */}
								<Menu.Item key="3" >Login</Menu.Item>
							</Menu>
						{/* </Col>
					</Row> */}
					
					</Header>
					<Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
					<div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
						{/* <Map
							googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
							loadingElement= {<div style={{ height: `100%` }} />}
							containerElement = {<div style={{ height: `400px` }} />}
							mapElement = {<div style={{ height: `100%` }} />}

						>
							
						</Map> */}
						
							<LeaFletMap/>
						
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

