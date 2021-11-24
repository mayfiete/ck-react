
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import CardImgOverlay from 'reactstrap/lib/CardImgOverlay';

// RenderCard.js
function RenderCard({ item }) {
    {
        return (
            <React.Fragment>
                <Card>
                    <CardImg src={item.image} alt={item.name} />
                    <CardImgOverlay className="d-flex flex-column justify-content-center">
                        <CardTitle>{item.category}</CardTitle>
                    </CardImgOverlay>
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
                <CardImg class="" src="/assets/images/dancing-montage.jpg" alt="Card image cap" />
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
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md m-1 d-flex">
                        <RenderCard item={props.persona} />
                    </div>
                    <div className="col-md m-1 d-flex">
                        <RenderCard item={props.process} />
                    </div>
                    <div className="col-md m-1  d-flex">
                        <RenderCard item={props.wiki} />
                    </div>
                </div>
            </div>

            <div className="col-md pt-5 pb-5 d-flex" style={{ backgroundColor: "#d3d3d3" }}>
                <RenderHomeImage />
            </div>
        </React.Fragment>
    );
}

export default Home;