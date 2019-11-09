import React from 'react';
import ClientList from './ClientList.js';
import ClientForm from './ClientForm.js';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }

    handleChange(e) {

    }

    handleSubmit(e) {

    }

    render() {
        return (
            <div>
                <h1>Picture Perfect</h1>
                <ClientList />
                <ClientForm />
            </div>
        )
    }
}

export default App;