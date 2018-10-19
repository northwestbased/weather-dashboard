import React, { Component } from 'react'
import Search from './components/Search.js'
import TableRow from './components/TableRow.js'
import Table from './components/Table.js'

import Cache from './cache.js'
import './main.scss'


class App extends Component {
  constructor() {
    super()
    this.state = {
      value: "",
      selectedCity: {},
      pinnedLocations: [],
      error: "",
      isSearching: false
    }
    this.SearchFor = this.SearchFor.bind(this)

    this.Unpin = this.Unpin.bind(this)
    this.MoveUp = this.MoveUp.bind(this)
    this.MoveDown = this.MoveDown.bind(this)

  }

  SearchFor(city) {
    this.setState({error: "", isSearching: true})
    Cache.get(city).then(res => {
      if (res.error) {
        this.setState({error: res.error.message})
        this.setState({isSearching: false})
        return
      }
      let l = this.state.pinnedLocations
      l.unshift(res)
      this.setState({ pinnedLocations: l, isSearching: false})

    })

  }



  Unpin(i) {
    let l = this.state.pinnedLocations
    l.splice(i, 1)
    this.setState({ pinnedLocations: l })
  }
  MoveUp(i) {
    let l = this.state.pinnedLocations
    if (i === 0) {
      return
    }
    let m = l[i]
    let m2 = l[i - 1]
    l[i] = m2
    l[i - 1] = m
    this.setState({ pinnedLocations: l })
  }

  MoveDown(i) {
    let l = this.state.pinnedLocations
    if (i === l.length - 1) {
      return
    }
    let m = l[i]
    let m2 = l[i + 1]
    l[i] = m2
    l[i + 1] = m
    this.setState({ pinnedLocations: l })
  }

  render() {
    return (
      <div className="main">
        <div className="search">
          <Search
            Search={this.SearchFor}
            isSearching={this.state.isSearching}
          />
        </div>
        <div className="errorMessage">
          {this.state.error}
        </div>

        {this.state.pinnedLocations.length ? (
          <div className="pinnedLocations">
            <Table>

              {this.state.pinnedLocations.map( (l, i) => (
                <TableRow 
                  location={l} 
                  className="forecast-week" 
                  Unpin={() => this.Unpin(i)}
                  MoveUp={() => this.MoveUp(i)}
                  MoveDown={() => this.MoveDown(i)}
                />
              ))}

            </Table>
          </div>
        ) : ""}

      </div>
    );
  }
}

export default App
