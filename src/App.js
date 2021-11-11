import React, {Component} from 'react';
import './App.css';
import api from './service/api';
import PostForm from './PostForm';
import DelForm  from './DelForm';
import PutForm from './PutForm';

export default class App extends Component {
  state = {
    contatos: []
  }
  
  componentDidMount () {
    api.get(`/`)
      .then(res => {
        this.setState({
           contatos: res.data 
          })
        console.log(res.data)
      })  
  }

    render() {
      const {contatos} = this.state
    return(
      <div>
        <div className="header">
          <h1>Cadastro de Contatos</h1>
        </div>
        <div className="sim">
          <PostForm />
          <DelForm />
          <PutForm />
        </div>
        <hi className="center">Contatos:</hi>
          <ul className="list">
            {
            contatos.map(contato =>
            <div className="space">
              <li key={contato.id}>nome: {contato.name}</li>
              <li key={contato.id}>email: {contato.email}</li>
              <li key={contato.id}>telephone: {contato.phone}</li>
            </div>)
            } 
          </ul>
      </div>
  );
}
}
