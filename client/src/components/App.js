import React from 'react';
import HomepageImages from './HomepageImages.js';
import ClientList from './ClientList.js';
import ClientForm from './ClientForm.js';
import Footer from './Footer.js';
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
            month: '',
            day: null,
            year: null,
            date: '',
            updateClicked: false,
            updateInfo: ''
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getEntries = this.getEntries.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateClient = this.updateClient.bind(this);
        this.numberToString = this.numberToString.bind(this);
        this.renderUpdate = this.renderUpdate.bind(this);
        this.renderUpdateForm = this.renderUpdateForm.bind(this);
        this.deleteClient = this.deleteClient.bind(this);
    }

    componentDidMount() {
        this.getEntries()
    }

    getEntries() {
        axios.get('/api/photo')
        .then((response) => {
            this.setState({
                clients: response.data
            })
        })
        .catch((error) => console.log(error))
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
        .then((response) => {
            this.getEntries()
        })
        .catch((error) => console.log('Uh oh! Couldn\'t submit client info!', error));
    }

    updateClient() {
        let { updateInfo } = this.state;
        axios.put('/api/photo', { updateInfo })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }

    deleteClient(e) {
        let identifier = Number(e.target.attributes[0].nodeValue)
        axios.delete('/api/photo', { data: { id: identifier }})
        .then((response) => { 
            this.getEntries()
        })
        .catch((error) => console.log(error));
    }

    numberToString(num) {
        let whereToInsert = [];
        let insertCounter = 0;
        let numString = num.toString();
        let numArray = numString.split('');
        for (let i = numArray.length - 1; i > 0; i--) {
            insertCounter++;
            if (insertCounter === 3) {
                whereToInsert.push(i);
                insertCounter = 0;
            }
        }
        for (let j = 0; j < whereToInsert.length; j++) {
            numArray.splice(whereToInsert[j], 0, ',');
        }
        numArray.splice(0, 0, '$');
        numString = numArray.join('');
        return numString;
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
                <h1 className="title">Picture Perfect</h1>
                <ClientForm onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                <ClientList clients={this.state.clients} updateClicked={this.state.updateClicked} updateClient={this.updateClient} renderUpdate={this.renderUpdate} renderUpdateForm={this.renderUpdateForm} deleteClient={this.deleteClient} numberToString={this.numberToString}/>
                <HomepageImages />
                <Footer />
            </div>
        )
    }
}

export default App;