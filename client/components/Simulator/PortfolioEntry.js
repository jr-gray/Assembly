import React from 'react'

export default class PortfolioEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stockValue: 0,
      mixValue: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      stockValue: nextProps.stockValues[this.props.item.stockName].toFixed(2),
      mixValue: ((parseFloat(nextProps.stockValues[this.props.item.stockName]) / parseFloat(nextProps.portfolioValue)) * 100).toFixed(2)
    })
  }

  render() {
    return (
      <tr>
        <td>{this.props.item.stockName} </td>
        <td>{this.props.item.shares} </td>
        <td>${this.state.stockValue} </td>
        <td>{this.state.mixValue}%</td>
      </tr>
    )
  }
}