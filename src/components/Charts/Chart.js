import React, {useState, useEffect} from 'react';
import { Row, Col, Card} from "antd"
import { PieChart, Pie, Tooltip, ResponsiveContainer,  ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Legend,BarChart,Bar, ReferenceLine } from 'recharts';

const Chart = (props)=> {
    const [positive, setPositive] = useState(0);
    const [negative, setNegative] = useState(0);
    const [invalid, setInvalid] = useState(0);
    const [brGraphData, setBrGraphData]=useState()

  
    useEffect(()=>{
   
    // looping through the data and counting test results for all the tests
    if(props.fetchedData !== undefined && props.fetchedData.length > 0){
    props.fetchedData.forEach(function(item) {
    console.log(item.status_result)
        if (item.status_result == "Positive") {
            setPositive(positive =>(positive + 1))
        } else if (item.status_result == "Negative") {
            setNegative(negative=>(negative + 1))
        } else {
            setInvalid(invalid =>(invalid+ 1))
        }
    })}
  
   
   
},[props.fetchedData])

let totalTests = positive + negative + invalid;

// generating a set of location names to be used to loop through fetched data and assign each location name total
// value of test_results
    useEffect(()=>{
        let setLocationNames = new Set();
        props.fetchedData.map(function(item) {
        setLocationNames.add(item.location_name)
        console.log(setLocationNames)
    })


    //  nested loop to create object data as per setLocationNames
    let barGraphArray = [];
        let Positive =0;
        let Negative =0;
        let Invalid =0;
     setLocationNames.forEach(function(item) {
        props.fetchedData.forEach(function(i){
               
            if (i.location_name === item) {
                if(i.status_result === "Positive"){
                    Positive =Positive +1
                } else if (i.status_result === "Negative"){
                    Negative =Negative +1
                }else{
                    Invalid =Invalid +1
                }
            }
     })
        barGraphArray.push({name:item,
        Positive:Positive,
        Negative:Negative,
        Invalid:Invalid})
        
        setBrGraphData(barGraphArray)
    })
    console.log(brGraphData)
   
},[props.fetchedData])

    const { Meta } = Card;

    const data = [
        {
            name:"Positive",
            value:positive
        },
        {
            name:"Negative",
            value:negative,
        },
        {
            name:"Invalid/Undefined",
            value:invalid,
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



        
    return (
        // <div style={{textAlign:"center", display:"flex", justifyContent:"space-between",}}>
        <>
             <Row justify="start">
                <Col  xs={24} xl={8}>
                <Card
                        hoverable
                    >
                        <Meta title="Third Chart" description="commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto" />
                        <ResponsiveContainer width={1000} height={400}>
                            <BarChart
                            width={50}
                            height={100}
                            data={brGraphData}
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
                            <Bar dataKey="Positive" fill="#FF0000" />
                            <Bar dataKey="Negative" fill="#82ca9d" />
                            <Bar dataKey="Invalid" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>
                </Col> 
            </Row>
        <Row justify="center">
        <Col  xs={24} xl={8}>
                    <Card
                        hoverable
                        >
                             <Meta title={"Total Tests " + totalTests} description="This Pie is a representative of all the test done so far , with each sector representing status results" />
                             
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
        </Row>
    </>
         

    
       


      
// </div>
    )
}

export default Chart
