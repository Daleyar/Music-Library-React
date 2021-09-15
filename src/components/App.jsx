import React, {Component} from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import MusicTable from "./MusicTable/musicTable";
import SongForm from "./SongForm/songForm";
import FilterSearch from "./SearchBar/searchBar";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: []
        };
    }

    componentDidMount(){
        this.makeGetRequest();
    }

   filterSongs = (filtered) => {
       this.setState({
           songs:filtered
       })
   }

    async makeGetRequest(){
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/');
            //let allsongs = response.data
            this.setState({
                songs:response.data
            });
        }
        catch (error) {
            console.log('Error in API call!');
        }
    }

    async deleteSong(id){
        try{
            await axios.delete(`http://127.0.0.1:8000/music/${id}/`)
            this.makeGetRequest()
        }
        catch (error) {
            console.log('Error in Delete API call!');
        }
    }
    async addSong(song){
        try{
            let response = await axios.post(`http://127.0.0.1:8000/music/`, song)
            this.setState({
                song: response.data
            });
            this.makeGetRequest()
        }
        catch (error) {
            console.log('Error in Create API call!');
        }
    }

    render() {
        return (
            <div>
                <FilterSearch search={this.state.songs} filterAction={this.filterSongs}/>
                <MusicTable song={this.state.songs} deleteSong={this.deleteSong.bind(this)}/>
                <SongForm addSong={this.addSong.bind(this)} />
            </div>
        );
    }
}

export default App;