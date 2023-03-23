// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { Card, CardImg, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'

export class Profile extends React.Component {
    public render (): JSX.Element | null {
        return <Card>
            <CardImg src={require('../../assets/images/back.png')}/>
            <div className="card-img-overlay">
                <Row>
                    <Col md="3" sm="12">
                        <Image height="100px" src={require('../../assets/images/avatar.jpg')}/>
                    </Col>
                    <Col md="9" sm="12">
                        <h5 className="card-title">About Me</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam est, voluptates distinctio maiores quos perspiciatis, eligendi perferendis, culpa quo ex corrupti doloremque? Eveniet quis aspernatur omnis accusamus sed voluptates.</p>
                        <a href="#" className="btn btn-primary">Download my CV</a>
                    </Col>
                </Row>
            </div>
            <div className="card-body">
                <Row>
                    <Col md="6" sm="12">
                        <h5 className="card-title">About Me</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam est, voluptates distinctio maiores quos perspiciatis, eligendi perferendis, culpa quo ex corrupti doloremque? Eveniet quis aspernatur omnis accusamus sed voluptates.</p>
                        <a href="#" className="btn btn-primary">Download my CV</a>
                    </Col>
                    <Col md="6" sm="12">
                        <ListGroup>
                            <ListGroupItem>Age: 23</ListGroupItem>
                            <ListGroupItem>Email: <a href="mailto:SergejSKoreshkov@gmail.com">SergejSKoreshkov@gmail.com</a></ListGroupItem>
                            <ListGroupItem>Phone: +371 22176800</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        </Card>
    }
}
