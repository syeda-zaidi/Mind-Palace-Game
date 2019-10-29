import React from "react";
import Nav from "../Nav";
import Cards from "../cards";
import Cast from "../../cast.json";
import "./style.css";



let score = 0;
let topScore = 0;
let message = "click on an image to play";

class Game extends React.Component {

    state = {
        Cast,
        score,
        topScore,
        message 
    };

    componentDidMount() {
        Cast.sort(() => {
            return 0.5 - Math.random();
        });
        this.setState({ Cast });
    };

    setClicked = id => {
        const Cast = this.state.Cast;
        const cardClicked = Cast.filter(Cast => Cast.id === id ); //whats happening here

        if (cardClicked[0].clicked) {

            score = 0;
            message = "You chose wrong";
            for (let i = 0; i < Cast.length; i++) {
                Cast[i].clicked = false;
            }

            this.setState({ message });
            this.setState({ score });
            this.setState({ Cast });

        } else {

            // changes card state to clicked 
            cardClicked[0].clicked = true;

            //wins 
            if (score === 8) {
                message = "Your have a great memory !";
                score = 0;
                topScore = 0;
                this.setState({ topScore })
             

                //reset all card to unclicked 
                for (let i =0; i < Cast.length; i++ ) {
                    Cast[i].clicked = false;
                } 
            } else {
                score = score + 1 ;
                message = "You choose good, keep clicking !";

                if (score > topScore) {
                    topScore = score;
                    this.setState ({ topScore });

                }
            }

            Cast.sort( () => {
                return 0.5 - Math.random()
            });
            this.setState({ Cast }); 
            this.setState({ message });
            this.setState({ score });
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Nav score={this.state.score} topScore={this.state.topScore}
                            message={this.state.message} />
                    </div>
                </div>

                <div className="row gameBoard">
                    {this.state.Cast.map(Cast => (
                        <Cards
                            setClicked={this.setClicked}
                            id={Cast.id}
                            key={"castid" + Cast.id}
                            name={Cast.name}
                            image={Cast.image}
                        />
                    ))}
                </div>
            </div>
        )
    }


}

export default Game;