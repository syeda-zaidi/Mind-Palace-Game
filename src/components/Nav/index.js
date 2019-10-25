import React from "react";
import "./style.css";

class Nav extends React.Component {

    state = {

        score: 0,
        topScore: 0
    };

    handleInputChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    render() {

        return (
            <div className="navbar fixed-top navbar-dark bg-dark">
                
                <div className="navbar-brand"> Clicky Game </div>
                <div className="header-message">You Choose Wrong! </div>
                <div className="header-items">
                    <p> Score : {this.state.score} </p>
                    <p> Top Score : {this.state.topScore} </p>
                    </div>
                
            </div>
        )
    }
};

export default Nav;