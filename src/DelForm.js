import { Component } from "react"
import api from "./service/api"
import './App.css'

class DelForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id:'',
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
        api.delete(`/${this.state.id}`)
            .then(res => {
                console.log(res)
            })

    }


    render() {
        const { id } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="label">
                        <label><h4>Informe o ID do objeto que deseja deletar:</h4></label>
                            <input type='text' name='id' value={id} onChange={this.handleChange}></input>
                        <div>
                            <button type='submit'>Deletar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default DelForm