
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDirectoryItem({ persona }) {
    return (
        <Card>
            <Link to={`/directory/${persona.id}`}>
                <CardImg width="100%" src={persona.image} alt={persona.name} />
                <CardImgOverlay>
                    <CardTitle>{persona.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {

    const directory = props.personas.map(persona => {
        return (
            <div key={persona.id} className="col-md-5 m-1">
                <RenderDirectoryItem persona={persona} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}



export default Directory;
