import React from 'react';
import {Divider, Row, Col, Card} from "antd"
import { PieChart, Pie, Tooltip, ResponsiveContainer,  ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Legend,BarChart,Bar,Cell, ReferenceLine } from 'recharts';

function Chart() {
    const { Meta } = Card;

    const data = [
        {
            name:"Kenya",
            value:20000
        },
        {
            name:"Uganda",
            value:5000000,
        },
        {
            name:"Tanzania",
            value:7000000,
        }
    ]
// second chart data

const data01 = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: 45, y: 100 },
  { x: 50, y: 400 },
  { x: 70, y: 150 },
  { x: 100, y: 250 },
];
const data02 = [
  { x: 30, y: 20 },
  { x: 50, y: 180 },
  { x: 75, y: 240 },
  { x: 100, y: 100 },
  { x: 120, y: 190 },
];

// third chart data
const datat = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: -3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: -2000,
      pv: -9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: -1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: -3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

        
    return (
        // <div style={{textAlign:"center", display:"flex", justifyContent:"space-between",}}>
             <Row justify="center">
                <Col  xs={24} xl={8}>
                    <Card
                        hoverable
                        >
                             <Meta title="Third Chart" description="commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto" />
                            <ResponsiveContainer width="100%" height={400}>
                                    <PieChart width={400} height={400}>
                                    <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                                    <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                                    <Tooltip />
                                    </PieChart>
                                    {/* <Tooltip/> */}
                            </ResponsiveContainer>

                        </Card>
                </Col>
                <Col  xs={24} xl={8}>
                    <Card
                            hoverable
                        >
                        <Meta title="Second Chart" description="Lorem ipsum dolor sit               amet                              consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint" />
                         {/* second chart */}
                                <ResponsiveContainer width="100%" height={400}>
                                <ScatterChart
                                width={500}
                                height={400}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                }}
                                >
                                <CartesianGrid />
                                <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                                <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                                <ZAxis type="number" range={[100]} />
                                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                <Legend />
                                <Scatter name="A school" data={data01} fill="#8884d8" line shape="cross" />
                                <Scatter name="B school" data={data02} fill="#82ca9d" line shape="diamond" />
                                </ScatterChart>
                            </ResponsiveContainer>
                    </Card>
                </Col>
                <Col  xs={24} xl={8}>
                <Card
                        hoverable
                    >
                        <Meta title="Third Chart" description="commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto" />
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart
                            width={500}
                            height={300}
                            data={datat}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <ReferenceLine y={0} stroke="#000" />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Col>
               
                
            </Row>
         

    
       


      
// </div>
    )
}

export default Chart
