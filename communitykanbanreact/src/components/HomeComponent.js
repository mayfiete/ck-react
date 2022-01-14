
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import CardImgOverlay from 'reactstrap/lib/CardImgOverlay';
import { Link } from 'react-router-dom'

// RenderCard.js
function RenderCard({ item }) {
    var link = <a Link to="/home"> Learn More </a >;
    return (
        <React.Fragment>

            <Card>
                <CardImg src={item.image} alt={item.name} />
                <Link to={`/directory`}>
                    <CardImgOverlay className="d-flex flex-column justify-content-center pb-5" >
                        <CardTitle>{item.category}</CardTitle>
                    </CardImgOverlay>
                </Link>
                <CardBody>
                    <CardTitle>{item.name} </CardTitle>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>

        </React.Fragment >

    );
}


function RenderHomeImage() {
    return (
        <div className="container">
            <Card>
                <CardImg class="d-flex flex-column justify-content-center pb-5" src="/assets/images/dancing-montage.jpg" alt="Card image cap" />
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

function RenderFeaturedNonprofit() {
    return (
        <div className="container">
            <Card>
                <CardImgOverlay className="d-flex flex-column justify-content-top pb-5"
                    style={{
                        fontSize: "1.25em",
                        fontWeight: "bold",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontStyle: "italic",
                        color: "gray"
                    }}>
                    Featured Nonprofit
                </CardImgOverlay>
                <CardImg class="d-flex flex-column justify-content-center pb-5" src="/assets/images/fullcirclegriefcenter.jpg"
                    alt="Card image cap" />
            </Card>
        </div>
    );
}


function RenderFeaturedTechnologist() {
    return (
        <div className="container">
            <Card>
                <CardImgOverlay className="d-flex flex-column justify-content-top pb-5"
                    style={{
                        fontSize: "1.25em",
                        fontWeight: "bold",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontStyle: "italic",
                        color: "white"
                    }}>
                    Featured Technologist
                </CardImgOverlay>
                <CardImg class="d-flex flex-column justify-content-center pb-5" src="/assets/images/CKHero.png"
                    alt="Card image cap" />
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
            <div style={{ backgroundColor: "#d3d3d3" }}>
                <div className="container ">
                    <div className="d-flex flex-column justify-content-center pt-5 pb-5">
                        < RenderHomeImage />
                    </div>
                </div>
            </div>
            <div
                class="container d-flex flex-column justify-content-center pb-5"
                style={{
                    backgroundColor: "white"
                }}>
                <div className="row d-flex ">
                    <div className="col-md d-flex pb-5 pt-5">
                        <RenderFeaturedNonprofit />
                    </div>
                    <div className="col-md d-flex pb-5 pt-5">
                        <RenderFeaturedTechnologist />
                    </div>
                </div>
            </div>

        </React.Fragment >
    );
}

export default Home;