import React from 'react'
import * as Logos from './logos'
// import InlineEdit from 'react-edit-inline';

class CanvasElement extends React.Component {

    render = () => {

        return (
            <div className="mtu-canvas-element">

            </div>
        )
    }
}

class ImageElement extends React.Component {
    state = {
        imgSrc: '',
        width: '7cm',
        height: 'auto',
        top: '3cm',
        left: '5cm',
    }

    render = () => {

        let style = {
            width: this.state.width,
            height: this.state.height,
            top: this.state.top,
            left: this.state.left,
        }

        return (
            <div className="mtu-canvas-element" style={style}>
                <img src={Logos.MeetupPNGBase64Logo} alt="" style={style}/>
            </div>
        )
    }
}

class TextElement extends React.Component {
    state = {
        imgSrc: '',
        isEditing: false,
        ...this.props.data
    }

    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    toggleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    render = () => {

        let style = {
            width: this.state.width,
            height: this.state.height,
            top: this.state.top,
            left: this.state.left,
            fontSize: this.state.fontSize,
            fontFamily: this.state.fontFamily,
            textAlign: 'center',
            padding: 0,
        }

        let compo = <div style={style} onClick={this.toggleEdit}>{this.state.text}</div>
        if (this.state.isEditing) {
            compo = <input type="text" value={this.state.text} style={style} onChange={this.onChange}/>
        }

        return (
            <div className="mtu-canvas-element" style={style}>
                {compo}
            </div>
        )
    }
}



export default class Canvas extends React.Component {


    render = () => {

        return (
            <div className='mtu-canvas-container'>
                <div className='mtu-canvas'>
                    <ImageElement imgSrc={Logos.MeetupPNGBase64Logo} />
                    <TextElement data={{
                        width: '17cm',
                        height: 'auto',
                        top: '6cm',
                        left: '5cm',
                        fontSize: '30px',
                        fontFamily: 'sans-serif',
                        text: 'Research in Cluj',
                    }} />
                    <TextElement data={{
                        width: '17cm',
                        height: 'auto',
                        top: '10cm',
                        left: '5cm',
                        fontSize: '30px',
                        fontFamily: 'sans-serif',
                        text: 'Research in Cluj',
                    }}  />
                </div>
            </div>
        )
    }
}
