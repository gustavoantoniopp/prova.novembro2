import React, { Component } from "react"
import api from "./service/api"
import './App.css'

class PutForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            email: '',
            phone: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        api.put(`/${this.state.id}`, this.state)
            .then(res => {
                console.log(res)
            })

    }


    render() {
        const { id, name, email, phone } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="label">
                        <label><h4>Informe o ID do objeto que deseja alterar:</h4></label>
                            <input type='text' name='id' value={id} onChange={this.handleChange}></input>
                        <label>Nome:</label>
                            <input type='text' name='name' value={name} onChange={this.handleChange}></input>
                        <label>Email:</label>
                            <input type='text' name='email' value={email} onChange={this.handleChange}></input>
                        <label>Telephone:</label>
                            <input type='text' name='phone' value={phone} onChange={this.handleChange}></input>
                        <div>
                            <button type='submit'>Atualizar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default PutForm