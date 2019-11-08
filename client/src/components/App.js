import React from 'react';
import ClientList from './ClientList.js';
import ClientForm from './ClientForm.js';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div>
                <ClientList />
                <ClientForm />
            </div>
        )
    }
}

export default App;