import React from 'react';
import ClientList from './ClientList.js';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div>
                <ClientList />
            </div>
        )
    }
}

export default App;