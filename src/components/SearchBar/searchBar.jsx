import React, { Component } from "react";


class FilterSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
         searchWord:''
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        let results = this.props.search.filter(song => {
            if (song.title.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                return song
            }
            if (song.artist.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                return song
            }
            if (song.album.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                return song
            }
            if (song.genre.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                return song
            }
            if (song.release_date.toLowerCase().includes(this.state.searchWord.toLowerCase())){
                return song
            }
            else{
                return false
            }
        });
        this.setState({
            searchWord:''
        })
        this.props.filterAction(results)
    };
    
    render () {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
            <label>Search</label>
            <input className="form-control" name="searchWord" title="search" type="text" value={this.state.searchWord} onChange={this.handleChange} />
            <button className="btn btn-primary" type='submit' value="search">Submit</button>
        </form>
        </div>
      );
    }
}

  export default FilterSearch;