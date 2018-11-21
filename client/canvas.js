import React from 'react'
// import * as Logos from './logos'
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
            value: e.target.value
        })
    }

    toggleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    render = () => {

        let unit = '%'
        let gr = this.state.graphic
        let ww = gr.width / this.props.posterData.width * 100
        ww = ww > 100 ? 100 : ww

        let style = {
            // width: gr.width + unit,
            width: (ww + 10) + unit,
            height: (gr.height / this.props.posterData.height * 100 ) + unit,
            // lineHeight: gr.height + unit,
            // verticalAlign: 'middle',
            top: (gr.y / this.props.posterData.height * 100) + unit,
            left: (gr.x / this.props.posterData.width * 100)  + unit,
            // top: (gr.y ) + unit,
            // left: (gr.x)  + unit,
            fontSize: (gr.fontSize / 3) + 'px',
            fontFamily: gr.fontFamily,
            textAlign: gr.centerText ? 'center' : 'none',
            padding: 0,
            margin: 0,
            // transform: 'scale(0.5)',
        }

        console.log(style);

        let compo = <div style={style} onClick={this.toggleEdit}>{this.state.value}</div>
        if (this.state.isEditing) {
            compo = <input type="text" value={this.state.value} style={style} onChange={this.onChange}/>
        }

        return (
            <div className="mtu-canvas-element" style={style}>
                {compo}
            </div>
        )
    }
}


// TODO not used anymore
export default class Canvas extends React.Component {

    state = {
        data: this.props.data
    }

    onDataChange = (newData) => {
        let tmpData = JSON.parse(JSON.stringify(this.state.data))
        let elems = tmpData.meetupData
        let index = -1;

        for (let i = 0; i < elems.length; i++) {
            if (elems[i].id === newData.id) {
                index = i;
                break
            }
        }

        if (index > -1) {
            tmpData.meetupData[index] = newData
            this.setState({
                data: tmpData
            })
        }
    }

    render = () => {

        let inputComponents = this.state.data.meetupData.map((dataElem)=>{
            if (dataElem.graphic.type === 'text') {
                return <TextElement data={dataElem} posterData={this.state.data.posterData} onDataChange={this.onDataChange} key={dataElem.id}/>
            } else {
                return null
            }
        })

        let unit = 'mm'
        let gr = this.state.data.posterData

        let style = {
            // width: gr.width + unit,
            width: '100%',
            // height: gr.height + unit,
            height: '100%',
            padding: 0,
            margin: 0,
            position: 'relative'
            // transform: 'scale(0.25)',
        }

        return (
            <div className="mtu-canvas" style={style}>
                {inputComponents}
            </div>
        )

        // return (
        //     <div className='mtu-canvas-container'>
        //         <div className='mtu-canvas'>
        //
        //         </div>
        //     </div>
        // )
    }
}
// <ImageElement imgSrc={Logos.MeetupPNGBase64Logo} />
// <TextElement data={{
//     width: '17cm',
//     height: 'auto',
//     top: '6cm',
//     left: '5cm',
//     fontSize: '30px',
//     fontFamily: 'sans-serif',
//     text: 'Research in Cluj',
// }} />
// <TextElement data={{
//     width: '17cm',
//     height: 'auto',
//     top: '10cm',
//     left: '5cm',
//     fontSize: '30px',
//     fontFamily: 'sans-serif',
//     text: 'Research in Cluj',
// }}  />
