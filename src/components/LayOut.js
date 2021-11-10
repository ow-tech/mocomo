import React, {useState, useEffect}from 'react';
import LeaFletMap from './LeaFletMap';
import Chart from './Charts/Chart.js';

import { Layout, Menu, Divider} from 'antd';
import logo from '../logo/upandelogo.svg';

const { Header, Content, Footer } = Layout;

// styles
const rightStyle = {textAlign:"right", float:"right", marginLeft:"auto"}

// fetching data from MoCom Api


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
	const [dateState, useDateState] = useState(new Date())
	const [fetchedData, setFetchedData] = useState([])

	// fetching data frome frappe endpoint
	useEffect(() => {
		fetch('/mocomo.CustomMethods.mocomo_api.sample_results_api', {
    headers: {
		'Authorization': `token ${process.env.REACT_APP_FRAPPE_API_KEY}:${process.env.REACT_APP_API_SECRET}`,
		"method":"GET",
		"Accept": "application/json",
    	"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "http://localhost:3000",
		// "Access-Control-Allow-Origin":"*"
        
    }
})
.then(r => r.json())
.then(r => {
	setFetchedData(r.message)

 
	
	
}) .catch(err => console.log(err))
	},[])


useEffect(()=>{
	if(fetchedData){
		

	}
	// console.log(fetchedData)

})
console.log(fetchedData)


    return (
        <>
			<Layout>
				<Header className="header" >
						
					{/* <Row>
						<Col> */}
								<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{display:"flex"}}>
								<Menu.Item  >
									<img src={logo} key="0"style={{height:"40px", width:"40px", backgroundColor:"#dedcdc"}}/>
								</Menu.Item>
								
								<Menu.Item key="1" style={rightStyle}>Home</Menu.Item>
								{/* <Menu.Item key="2"style={rightStyle}>nav 2</Menu.Item> */}
								<Menu.Item key="2" >Login</Menu.Item>
							</Menu>
						{/* </Col>
					</Row> */}
					
					</Header>
					<h2 style={{textAlign:"center", paddingTop:"24px"}}>MoComo Covid 19 Monitoring Dashboard</h2>
					<Content className="site-layout" style={{ padding: '0 50px' }}>
					<div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
						
						<div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
							<LeaFletMap fetchedData={fetchedData}/>
						</div>
						
						
						<Divider/>
						
						<Chart
					/>
					</div>
				</Content>
			<Footer style={{ textAlign: 'center' }}>Powered By Upande © {dateState.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}</Footer>
	</Layout>
        </>
    )
}

export default LayOut;

