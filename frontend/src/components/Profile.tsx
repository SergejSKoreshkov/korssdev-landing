// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'

export class Profile extends React.Component {
    public render (): JSX.Element | null {
        return <Card border='light'>
            <Card.Header className='home-card-header'>
                <Row>
                    <Col md='3' sm='12' className='text-center'>
                        <Card.Img className='p-4' src={require('../../assets/images/avatar.jpg')}></Card.Img>
                    </Col>
                    <Col md='9' sm='12' className='m-auto'>
                        <div className='text-center'>
                            <h3>Text</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                            <a href='#' className='btn'>Download my CV</a>
                        </div>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Row className='mt-4'>
                    <Col md='6' sm='12' className='mb-4'>
                        <div className='p-4'>
                            <h5 className='card-title'>About Me</h5>
                            <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam est, voluptates distinctio maiores quos perspiciatis, eligendi perferendis, culpa quo ex corrupti doloremque? Eveniet quis aspernatur omnis accusamus sed voluptates.</p>
                        </div>
                    </Col>
                    <Col md='6' sm='12' className='mb-4'>
                        <ListGroup className='home-card-list p-3'>
                            <ListGroupItem>Residence: Latvia</ListGroupItem>
                            <ListGroupItem>Age: 23</ListGroupItem>
                            <ListGroupItem>Email: <a href='mailto:SergejSKoreshkov@gmail.com'>SergejSKoreshkov@gmail.com</a></ListGroupItem>
                            <ListGroupItem>Phone: +371 22176800</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    }
}
