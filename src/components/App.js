import React from 'react';
import SearchBar from './SearchBar';
import YouTube from '../apis/youtubeapi';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state = {
        videos : [],
        selectedVideo : null
    }

    componentDidMount(){
        this.onTermSubmit('ktm200');
    }

    onTermSubmit = async (term) =>{
      const response = await YouTube.get('/search',{
            params :{
                q:term,
                part: 'snippet',
                maxResults : 5,
                key : "AIzaSyCGqXYSnfy2BmWGmxxbAg20YrfR7VKqYH4"
            }
        })

        this.setState({
            videos : response.data.items,
            selectedVideo : response.data.items[0]
        })
    }

    onVideoSelect = (video) =>{
        this.setState({
            selectedVideo : video
        })
    }
    render(){
        return(
            
                
                 <div className = "ui container">
                <SearchBar onformSubmit = {this.onTermSubmit}/>
                <div className = "ui grid">
                <div className = "ui row">
                <div className = "eleven wide column">
                <VideoDetail video = {this.state.selectedVideo} />
                </div>
                <div className = "five wide column">
                <VideoList videos = {this.state.videos} onVideoSelect = {this.onVideoSelect}/>
                </div>
                </div>
                </div>
                </div> )
    }
}

export default App;