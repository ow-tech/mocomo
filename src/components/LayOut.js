import React, {useState}from 'react';
// import {Marker} from 'react-google-maps';
// import GoogleMap from 'react-google-maps';
import LeaFletMap from './LeaFletMap';
import Chart from './Charts/Chart.js';

import { Layout, Menu, Divider} from 'antd';
import logo from '../logo/upandelogo.svg';

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
				<Header className="header" >
						
					{/* <Row>
						<Col> */}
								<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{display:"flex"}}>
								<Menu.Item  >
									<img src={logo} style={{height:"40px", width:"40px", backgroundColor:"skyblue"}}/>
								</Menu.Item>
								
								<Menu.Item key="1" style={rightStyle}>Home</Menu.Item>
								{/* <Menu.Item key="2"style={rightStyle}>nav 2</Menu.Item> */}
								<Menu.Item key="3" >Login</Menu.Item>
							</Menu>
						{/* </Col>
					</Row> */}
					
					</Header>
					<Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
					<div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
						
						<LeaFletMap/>
						
						<Divider style={{'background-color':'darkBlue', "size":"5px"}}/>
						
						<Chart
					/>
					</div>
				</Content>
			<Footer style={{ textAlign: 'center' }}> ©2021</Footer>
	</Layout>
        </>
    )
}

export default LayOut;

