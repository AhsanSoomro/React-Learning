import React, {Component} from "react"

class MemeGenerator extends Component {
    
    constructor () {
        super()
        this.state = {
            topText:"",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemesImages: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({ allMemesImages: memes })
        })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const randomNumber = Math.floor(Math.random() * this.state.allMemesImages.length)
        const randomMemeImage = this.state.allMemesImages[randomNumber].url
        this.setState({ randomImage: randomMemeImage })
      }

    render() {
        return (
            <div className="form-main">
                <div className="container">
                    <form className="meme-form" onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            value={this.state.topText} 
                            placeholder="Top Text" 
                            name="topText" 
                            onChange={this.handleChange}
                        />
                        <input 
                            type="text" 
                            value={this.state.bottomText} 
                            placeholder="Bottom Text" 
                            name="bottomText" 
                            onChange={this.handleChange}
                        />
                        <button>Gen</button>
                    </form>
                    <div className="meme">
                        <img src={this.state.randomImage} alt="" />
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default MemeGenerator