import React, { Component } from 'react';
export default class Deslogar extends Component {

    desefetuarLogin = () => {
        localStorage.removeItem('usuario-opflix')
        window.location.reload();
    }

    render() {
        return (
            <div className='logoutButton'>
                <button className='button' id="btn__logout" onClick={this.desefetuarLogin}>
                    Logout
                                    </button>
            </div>
        )
    }
}