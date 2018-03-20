import React, { Component } from 'react'
import logo from './logo.svg'
import loadingIcon from '../public/loading.gif'
import './App.css'


export default class App extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            loading: false
        };
    }

    getData = () => {
        this.setState({
            loading: true
        })

        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(response => this.setState({users: response, loading: false}))
    }

    clearData = () => {
        this.setState({
            users: []
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>List from api example</h2>
                </div>
                <br/>
                <input type="button" value="Get data from api" onClick={this.getData} />
                <input type="button" value="Clear data" onClick={this.clearData} />
                <br/>

                {
                    this.state.loading && <img src={loadingIcon} alt="Loading..."/> 
                }
                {
                    this.state.users.map((user, index) => {
                        return <p>{user.name}</p>
                    })    
                }
            </div>
        );
    }
}

