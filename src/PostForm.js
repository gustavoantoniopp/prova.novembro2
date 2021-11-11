import { Component } from "react"
import api from "./service/api"
import './App.css'

class PostForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            name:'',
            email:'',
            phone:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        api.post(`/`, this.state)
            .then(res => {  
                console.log(res)
            })

    }

    
    render() {
        const {name, email, phone} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="label">
                        <label><h4>Informe as informações do objeto que deseja cadastrar:</h4></label>

                        <label>Nome</label>
                            <input type='text' name='name' value={name} onChange={this.handleChange}></input>
                        <label>Email</label>
                            <input type='text' name='email' value={email} onChange={this.handleChange}></input>
                        <label>Telephone</label>
                            <input type='text' name='phone' value={phone} onChange={this.handleChange}></input>
                        <div>
                            <button type='submit'>Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm