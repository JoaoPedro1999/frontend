import React, { Component } from 'react';
import './style.css';
import Logo from '../../assets/logo.svg';
import api from '../../services/api';

export default class main extends Component {

    state = {
        newBox: '',
    };

    handleSubmit = async e => {

        e.preventDefault();
        const response = await api.post('boxes', {
            title: this.state.newBox,
        })

        console.log(response.data)

        this.props.history.push(`/box/${response.data._id}`);
    };

    handleInputChange = (e) => {
        this.setState({ newBox: e.target.value })
    };

    render() {
        return (
            <div id="main-container">
                <form onSubmit={this.handleSubmit}>
                    <img src={Logo} alt="" />
                    <input placeholder="Criar um box"
                        onChange={this.handleInputChange}
                        value={this.state.newBox} />
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
    }
}
