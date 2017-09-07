import React from 'react'
import LeaderboardEntry from './LeaderboardEntry.jsx'
import axios from 'axios'

export default class Leaderboard extends React.Component {
  constructor(){
    super();
    this.state = {
      entries: []
    }
    this.fetchLeaderboards = this.fetchLeaderboards.bind(this);
  }
  fetchLeaderboards(){
    axios.get('/api/fetchLeaderboard')
    .then(reply => {
      this.setState({
        entries: reply.data
      })
    })
  }
  componentWillMount() {
    this.fetchLeaderboards();
  }

  render() {
    return (

      <table className='portfolioEntryTable'>
        <tbody>
          <tr>
            <th style={{ 'textAlign':'center' }}>Username</th>
            <th style={{ 'textAlign':'center' }}>portfolio name</th>
            <th style={{ 'textAlign':'center' }}>Value</th>
          </tr>

          {this.state.entries.length > 0 ?
          this.state.entries.map((item, index) => (
            <LeaderboardEntry item={item} key={index} index={index}  /> 
          ))
          :
          null
          }
        </tbody>
      </table>

    )
  }
}