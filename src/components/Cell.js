import React, { Component } from 'react'

class Cell extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(evt) {
        this.props.flipCellAroundMe()
    }


    render() {

        let classes = "cell " + (this.props.isLit ? "Cell-lit" : "")
        return (
            <td className={classes} onClick={this.handleClick} >

            </td>
        )
    }
}

export default Cell
