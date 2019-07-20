import React, { Component } from 'react';
import StateInput from './StateInput';
class HelloWorld extends Component
{
    constructor(props)
    {
        super(props);

        console.log(props);

        this.state = {
            name: 'Carlos Henrique',
            txt: props.txt
        };        
    }
    render()
    {
        const estilo = {
            color: '#ffffff', 
            fontSize: 14,
            backgroundColor: 'blue',
            padding: 5,
            margin:10,
            borderRadius: 5
        }; 

        return(
            <div>
                <StateInput />
                {/* Meu primeiro componente */}
                <h1 style={estilo} >{this.state.txt}</h1>
                <span>{this.state.name}</span>
            </div>
        )
    }
}

export default HelloWorld