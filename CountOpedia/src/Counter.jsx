import React from "react";
import attack from "./Images/attack.png";
import defend from "./Images/defend.png";

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefence = this.handleDefence.bind(this);
        this.state = {
            count: 0,
            lastPlay: "",
            status: ""
        }
    }

    handleAttack = () => {
        this.setState((prevState) => {
            let newCount = prevState.count + Math.round(Math.random() * 10);
            return {
                count: newCount,
                lastPlay: "Attack",
                status: newCount > 10 ? "You Won!!" : prevState.status
            };
        });
    }

    handleDefence = () => {
        this.setState((prevState) => {
            let newCount = prevState.count - Math.round(Math.random() * 10);
            return {
                count: newCount,
                lastPlay: "Defence",
                status: newCount < -10 ? "You Lost!!" : prevState.status
            };
        });
    }

    handleRandom = () => {
        let playMode = Math.round(Math.random());
        if (playMode == 0) {
            this.handleAttack();
        }
        else {
            this.handleDefence();
        }
    }

    handleReset = () => {
        this.setState(() => {
            return {
                count: 0,
                lastPlay: "",
                status: ""
            }
        })
    }

    render() {
        return (
            <div>
                <div className="row text-center">
                    <h1>Game Score: {this.state.count}</h1>
                    <p>You win at +10 points and lose at -10 points!</p>
                    <p>Last Play: {this.state.lastPlay}</p>
                    <h3>Game Status: {this.state.status}</h3>
                    <div className="col-6 col-md-3 offset-md-3">
                        <img style={{ width: "100%", cursor: "pointer", border: "1px solid green" }}
                            src={attack} className="p-4 rounded" onClick={this.handleAttack} alt="" />
                    </div>
                    <div className="col-6 col-md-3">
                        <img style={{ width: "100%", cursor: "pointer", border: "1px solid red" }}
                            src={defend} className="p-4 rounded" onClick={this.handleDefence} alt="" />
                    </div>
                    <div className="col-12 col-md-4 offset-md-4">
                        <button className="btn btn-secondary w-100 mt-2" onClick={this.handleRandom}>Random Play</button>
                        <br />
                        <button className="btn btn-warning w-100 mt-2" onClick={this.handleReset}>Reset</button>
                    </div>
                </div>
            </div>
        );
    }
}