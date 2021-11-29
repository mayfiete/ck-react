

import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Button, Label, Modal, ModalHeader, ModalBody, } from 'reactstrap';


const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);


class WikiForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: '1',
            author: '',
            text: '',
            touched: {
                ratings: false,
                author: false,
                text: false
            },
            touched: {
                rating: false,
                author: false,
                text: false
            },
            isModalOpen: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        // this.handleChange = this.handleChange.bind(this);


        // this.handleCommentSubmit = this.handleCommentSubmit.bind(this);    
        /*
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        */
    }


    /*
        handleChange(event) {
            const target = event.target;
            const name = target.name;
            const value = target.value
    
            this.setState({
                [name]: value
            });
        }
    */

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.toggleModal();

    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    render() {
        return (
            <React.Fragment>
                <button outline className="fa-lg" onClick={this.toggleModal} >
                    <span className="fa fa-pencil-square-o">
                        Ask a Question
                    </span>
                </button>
                <div>

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Question</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                <div className="form-group">
                                    <Label htmlFor="rating" >Rating</Label>

                                    <div className="form-group">
                                        <Control.select
                                            multiple={false}
                                            model=".rating"
                                            placeholder="Rating"
                                            id="rating"
                                            name="rating"
                                            label="Rating"
                                            className="form-control"

                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>

                                        </Control.select>

                                    </div>
                                    <div className="form-group">
                                        <Label htmlFor="author">Your Name</Label>
                                        <Control.text
                                            model=".author"
                                            id="author"
                                            name="author"
                                            label="Author"
                                            placeholder="Your Name"
                                            className="form-control"

                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Label htmlFor="text">Comment</Label>
                                        <Control.textarea
                                            model=".text"
                                            id="text"
                                            name="text"
                                            label="Comment"
                                            rows="6"
                                            placeholder="Comment"
                                            className="form-control"

                                        />
                                    </div>
                                    <span className="form-group">
                                        <Button type="submit" color="primary">
                                            <i /> Submit
                                        </Button>
                                    </span>
                                </div>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div >
            </React.Fragment >
        );
    }
}

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
            <React.Fragment>
                <div key={wiki.id} className="col-md-5 m-1">
                    <RenderWikiItem wiki={wiki} />
                </div>
                <div>
                    <WikiForm />
                </div>
            </React.Fragment>
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

function RenderWikiForm(props) {

    return (
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <WikiForm />
                </div>
            </div>
        </React.Fragment>
    );
}


export default Wiki;