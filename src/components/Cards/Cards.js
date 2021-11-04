import React from 'react'
import { Card, Row, Col, Space } from 'antd';

const { Meta } = Card;

function Cards() {
    return (
        <div >
             {/* <Space> */}
            <Row justify="center">
                <Col  xs={24} xl={8}>
                    <Card
                            hoverable
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                </Col>
                <Col  xs={24} xl={8}>
                    <Card
                            hoverable
                        >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
                <Col  xs={24} xl={8}>
                <Card
                        hoverable
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </Col>
               
                
            </Row>
        </div>
    )
}

export default Cards
