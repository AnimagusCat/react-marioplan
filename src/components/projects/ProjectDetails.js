import React from 'react'

//props below contain details about the router from app.js
const ProjectDetails = (props) => {
    //grab the id from the props 
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by SS</div>
                    <div>29 February, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
