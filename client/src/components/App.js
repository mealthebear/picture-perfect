import React from 'react';
import ClientList from './ClientList.js';
import ClientForm from './ClientForm.js';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clients: [],
            firstName: '',
            lastName: '',
            bill: null,
            description: '',
            updateClicked: false,
            updateInfo: ''
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateClient = this.updateClient.bind(this);
        this.checkState = this.checkState.bind(this);
        this.renderUpdate = this.renderUpdate.bind(this);
        this.renderUpdateForm = this.renderUpdateForm.bind(this);
    }

    componentDidMount() {
        axios.get('/api/photo')
        .then((response) => {
            console.log(response)
            this.setState({
                clients: response.data
            })
        })
        .catch((error) => {
            console.log(error)
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let { firstName, lastName, bill, description } = this.state;
        axios.post('/api/photo', { firstName, lastName, bill, description })
        .then((response) => console.log(response))
        .catch((error) => console.log('Uh oh! Couldn\'t submit client info!', error));
    }

    updateClient() {
        let { updateInfo } = this.state;
        axios.put('/api/photo', { updateInfo })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }

    checkState() {
        console.log(this.state);
    }

    renderUpdate() {
        this.setState({
            updateClicked: true
        })
    }

    renderUpdateForm() {
        this.setState({
            updateClicked: false
        })
    }

    render() {
        return (
            <div>
                <h1 onClick={this.checkState}>Picture Perfect</h1>
                <ClientList clients={this.state.clients} updateClicked={this.state.updateClicked} updateClient={this.updateClient} renderUpdate={this.renderUpdate} renderUpdateForm={this.renderUpdateForm}/>
                <ClientForm onChange={this.handleChange} onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App;