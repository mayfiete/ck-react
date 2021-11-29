
import React
    from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';



// RenderCard.js
function RenderWikiItem({ wiki }) {
    {
        return (
            <React.Fragment>
                <Card>
                    <CardImg width="100%" src={wiki.image} alt={wiki.name} />
                    <CardImgOverlay>
                        <CardTitle>{wiki.name}</CardTitle>
                    </CardImgOverlay>
                    <CardBody>
                        <CardText>{wiki.description}</CardText>
                    </CardBody>

                </Card>
            </React.Fragment >

        );
    }
}

function Wiki(props) {

    const wiki = props.wikis.map(wiki => {
        return (
            <div key={wiki.id} className="col-md-5 m-1">
                <RenderWikiItem wiki={wiki} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Wiki</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Wiki</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {wiki}
            </div>
        </div>
    );
}


export default Wiki;