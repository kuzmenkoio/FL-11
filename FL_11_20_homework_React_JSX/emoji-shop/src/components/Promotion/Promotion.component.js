import React from 'react'
import './Promotion.module.scss'
import Button from '../Button/Button.components'

const URL = 'http://localhost:1337/emoji-shop'

class Promotion extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            emoji: []
        }
    }

    componentDidMount() {
        fetch(URL)
            .then(response => response.json())
            .then(data => this.setState({
                emoji: data.emoji,
            }))            
    }

    render() {
        if (this.state.emoji.length === 0) {
            return <p>Loading</p>
        }
        const {emoji} = this.state;
        const item = emoji[Math.floor(Math.random()*emoji.length)];
        
        return (
            <div>
                <div className="promotion">
                    <h2>New! {item.title}</h2>
                    <div className="includes">Includes {item.emoji.map((emo) => <a key={emo.codes}>{emo.char}</a>)}</div>
                    <Button price={item.price} />
                </div>
                <div className="wrapper">{emoji.map((item) => 
                    <div className="list" key={item.id}>
                        {item.title}
                    </div>
                    
                )}
                </div>

            </div>
        )
    }
}

export default Promotion