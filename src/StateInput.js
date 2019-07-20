import React, { Component } from 'react';

class StateInput extends Component 
{
    constructor(props)
    {
        super(props);
        
        this.state = {
            name: ''
        };

        setTimeout(() => {
            this.setState({name: 'Carlos Henrique'}) 
        }, 1000);
    }
    render()
    {
        return(
            <div>
                <input type='text' name='name' value={this.state.name}/>
            </div>

        );
    }
}
export default StateInput;