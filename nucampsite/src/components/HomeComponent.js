
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({ item }) {
    {
        return (
            <React.Fragment>
                <Card>
                    <CardImg src={item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>


            </React.Fragment >

        );
    }
}

function RenderHomeImage() {
    return (
        <div className="container">
            <Card>
                <CardImg top src="/assets/images/dancing-montage.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>See our inspiration</CardTitle>
                    <CardText>
                        As you grow older, you will discover that you have two hands — one for helping yourself, the other for helping others.
                        <hr></hr>
                        - Audrey Hepburn
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1 d-flex">
                    <RenderCard item={props.persona} />
                </div>
                <div className="col-md m-1  d-flex">
                    <RenderCard item={props.wiki} />
                </div>
                <div className="col-md m-1 d-flex">
                    <RenderCard item={props.organization} />
                </div>
                <div className="col-md m-1 d-flex">
                    <RenderHomeImage />
                </div>
            </div>
        </div>
    );
}

export default Home;