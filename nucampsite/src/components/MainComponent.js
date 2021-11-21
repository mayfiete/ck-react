
import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import PersonaInfo from './PersonaInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PERSONAS } from '../shared/personas';
import { PROCESSES } from '../shared/processes';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personas: PERSONAS,
            processes: PROCESSES,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }


    render() {
        const HomePage = () => {
            return (
                <Home
                    persona={this.state.personas.filter(persona => persona.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}

                />
            );
        }

        const personaWithId = ({ match }) => {
            return (
                <PersonaInfo
                    persona={this.state.personas.filter(persona => persona.id === +match.params.personaId)[0]}
                    processes={this.state.processes.filter(process => process.personaId === +match.params.personaId)}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory personas={this.state.personas} />} />
                    <Route path='/directory/:personaId' component={personaWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' render={() => <About partners={this.state.partners} />} />

                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

// this file is a module because there is an export 
export default Main;