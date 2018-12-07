import React, { Component } from 'react';

export default class App extends Component {
    state = { 
        imgFront: '',
        imgBack: '',
        shinyFront: '',
        shinyBack: '',
        front: null,
        back: null,
     }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
        .then(res => res.json())
        .then(data => this.setState({ 
            imgFront: data.sprites.front_default,
            imgBack: data.sprites.back_default,
            shinyFront: data.sprites.front_shiny,
            shinyBack: data.sprites.back_shiny,
            src: data,
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

    render() {
        console.log(this.state.src);
        return (
            <div>
                <img src={!this.state.front ? this.state.imgFront : this.state.front} alt={this.state.front} />
                <img src={!this.state.back ? this.state.imgBack : this.state.back} alt={this.state.back} />
                
                <div>
                    <button onClick={this.Default.bind(this)}>default</button>
                    <button onClick={this.Shiny.bind(this)}>shiny</button>
                </div>
            </div>
        )
    }
}