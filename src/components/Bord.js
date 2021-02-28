import React, { Component } from 'react'
import Cell from './Cell'
import "./Cell.css"

class Bord extends Component {

    static defaultProps = {
        nrows: 5,
        ncols: 5,
        chanceLightStarsOn: 0.25,


    }
    constructor(props) {
        super(props)


        this.state = {
            hasWon: false,
            board: this.creatBoard()
        }

    }

    flipCellAround(position) {
        let { ncols, nrows } = this.props
        let board = this.state.board
        let [x, y] = position.split("-").map(Number)
        console.log(position)
        function flipcell(x, y) {

            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                board[y][x] = !board[y][x]
            }
        }
        flipcell(y, x)
        flipcell(y + 1, x)
        flipcell(y - 1, x)
        flipcell(y, x + 1)
        flipcell(y, x - 1)





        let hasWon = board.every(row => row.every(cell => !cell))
        this.setState({ board: board, hasWon: hasWon })
    }


    creatBoard() {
        let board = []

        for (let y = 0; y < this.props.nrows; y++) {
            let row = []
            for (let x = 0; x < this.props.ncols; x++) {
                row.push(Math.random() < this.props.chanceLightStarsOn)

            }
            board.push(row)
        }
        return board;
    }


    render() {
        if (this.state.hasWon) {
            return <h1 className="container"> <span className="neon">YOU </span>
                <span className="flux">WIN </span>


            </h1>

        }


        let tblBord = []
        for (let y = 0; y < this.props.nrows; y++) {
            let row = []
            for (let x = 0; x < this.props.ncols; x++) {
                let position = `${y}-${x}`
                row.push(<Cell key={position} isLit={this.state.board[y][x]} flipCellAroundMe={this.flipCellAround.bind(this, position)} />)
            }
            tblBord.push(<tr key={y}>{row}</tr>)
        }
        return (
            <div className="container">
                <div>

                    <span className="neon">Light </span>
                    <span className="flux">Out </span>
                </div>
                <table className="table">

                    <tbody>
                        {tblBord}
                    </tbody>

                </table>




                <div className="about">
                    The object of this game is to close all the lights.
                <div class="how-to">
                        <h3>How to play:</h3>
                        <p>Click on any of them to turn it and the four direct neighboring lights off or on.</p>
                        <p><strong>Win by closing all the lights.</strong></p>
                    </div></div>
            </div>
        )
    }
}

export default Bord
