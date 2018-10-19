import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'

import './styles/Search.scss'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            value: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        let value = this.state.value.trim()
        if (value.length) {
            this.props.Search(this.state.value)
        }

        this.setState({value: ""})
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="search location"/>
                { this.props.isSearching ? (
                    <button className="spinner">
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                ) : (
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                )
                }



            </form>
        );
    }
}


export default Search
