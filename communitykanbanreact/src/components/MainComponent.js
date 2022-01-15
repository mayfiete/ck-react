
import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import PersonaInfo from './PersonaInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Wiki from './WikiComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SideBar from './SideBarComponent';

const mapStateToProps = state => {
    return {
        personas: state.personas,
        organizations: state.organizations,
        processes: state.processes,
        wikis: state.wikis
    };
};

class Main extends Component {



    render() {
        const HomePage = () => {
            return (
                <Home
                    persona={this.props.personas.filter(persona => persona.featured)[0]}
                    wiki={this.props.wikis.filter(wiki => wiki.featured)[0]}
                    organization={this.props.organizations.filter(organization => organization.featured)[0]}
                    process={this.props.processes.filter(process => process.featured)[0]}
                />
            );
        }

        const personaWithId = ({ match }) => {
            return (
                <PersonaInfo
                    persona={this.props.personas.filter(persona => persona.id === +match.params.personaId)[0]}
                    processes={this.props.processes.filter(process => process.personaId === +match.params.personaId)}
                />
            );
        }

        return (
            <div>
                <Header />
                <SideBar />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory personas={this.props.personas} />} />
                    <Route path='/directory/:personaId' component={personaWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' render={() => <About organizations={this.props.organizations} />} />
                    <Route exact path='/wiki' render={() => <Wiki wikis={this.props.wikis} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

// this file is a module because there is an export 
export default withRouter(connect(mapStateToProps)(Main));