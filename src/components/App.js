import React, { Component } from 'react';
import Form from './Form';
import '../styles/main.css';
import Info from './Info';

export default class App extends Component {
    state = { 
        imgFront: '',
        imgBack: '',
        shinyFront: '',
        shinyBack: '',
        front: null,
        back: null,
        name: '',
        abil: [],
        moves: [],
        info: [],
        count: 0,
        term: ''
     }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
        .then(res => res.json())
        .then(data => this.setState({ 
            imgFront: data.sprites.front_default,
            imgBack: data.sprites.back_default,
            shinyFront: data.sprites.front_shiny,
            shinyBack: data.sprites.back_shiny,
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            abil: [data.abilities[0].ability.name, data.abilities[1].ability.name],
            moves: [data.moves[0].move.name],
            src: data
         }))
    }

    Shiny = () => {
        const { shinyFront, shinyBack } = this.state;
        let shiny_front = shinyFront;
        let shiny_back = shinyBack;

        this.setState({
            front: shiny_front,
            back: shiny_back
        })
    }

    Default = () => {
        const { imgFront, imgBack } = this.state;

        let img_front = imgFront;
        let img_back = imgBack;

        this.setState({
            front: img_front,
            back: img_back
        })
    }

    Search = () => {

        let poke = this.state.term;

        if(poke !== '') {
            fetch(`https://pokeapi.co/api/v2/pokemon/${poke.toLowerCase()}/`)
            .then(res => res.json())
            .then(data => this.setState({ 
                imgFront: data.sprites.front_default,
                imgBack: data.sprites.back_default,
                shinyFront: data.sprites.front_shiny,
                shinyBack: data.sprites.back_shiny, 
                front: data.sprites.front_default,
                back: data.sprites.back_default,
                term: '',
                name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                abil: [data.abilities[0].ability.name, data.abilities[1].ability.name],
                moves: [data.moves[0].move.name, data.moves[1].move.name, data.moves[2].move.name, data.moves[3].move.name],
                src: data
            }))
        }
    }

    render() {
        console.log(this.state.moves);

        const renderInfo = this.state.info.map(item => {
            return <li key={item}>{item}</li>
        }) 

        return (
            <div className="container">
                <Form poke={this.state.term} Click={this.Search.bind(this)} Change={e => {this.setState({term: e.target.value})}} Focus={() => {this.setState({term:''})}} />
                <div className="pokes-screen">
                    <div className="pokes">
                        <img src={!this.state.front ? this.state.imgFront : this.state.front} alt={this.state.front} />
                        <img src={!this.state.back ? this.state.imgBack : this.state.back} alt={this.state.back} />
                    </div>
                    <div className="buttons">
                        <button onClick={this.Default.bind(this)}>default</button>
                        <button onClick={this.Shiny.bind(this)}>shiny</button>
                    </div>
                </div>
                <div className="info-btn">
                    <button onClick={() => this.setState({info: this.state.abil})}>Abilities</button>
                    <button onClick={() => this.setState({info: this.state.moves})}>Moves</button>
                </div>
                <Info 
                    pokeName={this.state.name}
                    info={renderInfo}
                />
            </div>
        )
    }
}