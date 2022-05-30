import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : "Enter Something"
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(event){
        event.preventDefault();
    }

    onChange(event){
        this.setState({
            value : event.target.value
        })
    }


    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <label>
                    <input type="text" value={this.state.value} onChange={this.onChange}></input>
                </label>
                <input type="submit" value="submit"></input>
            </form>
        )
    }
}

export default Form;