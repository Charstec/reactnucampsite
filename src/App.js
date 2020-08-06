/*
import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
    render() {
        return (
        <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
        );
}
}
*/
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { CAMPSITES } from './shared/campsites';



class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            campsites: CAMPSITES
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container"><NavbarBrand href="/">NuCamp</NavbarBrand>
                </div></Navbar>
                <Directory campsites={this.state.campsites} />
                </div>
        );
    }
}
     
export default App;



