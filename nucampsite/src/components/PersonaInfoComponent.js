

import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderPersona({ persona }) {
    return (
        <div className="col-md-5 m-1" >
            <Card>
                <CardImg top src={persona.image} alt={persona.name} />
                <CardBody>
                    <CardText> {persona.description} </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function RenderComments({ comments }) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {
                    comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                <p>{comment.text}</p>
                                <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return <div > </div>
}



// Inside its render method, check if an object with the name "persona" 
// (passed in via props) can be evaluated as truthy 
// (e.g. is not null, is not undefined)
function PersonaInfo(props) {
    if (props.persona) { // passing in persona via props from parent component
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.persona.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.persona.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderPersona persona={props.persona} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );

    }
    return <div > </div>
}




export default PersonaInfo;