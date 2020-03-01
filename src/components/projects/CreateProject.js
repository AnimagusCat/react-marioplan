import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            //checks the id whether it's title/content and updating that property in the state with the value user types in
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        //prevents browser from refreshing when form is submitted
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea name="" id="content" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange}/> 
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default CreateProject

