import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PlaylistItem from './PlaylistItem'
import YouTubePlayer  from 'youtube-player'
// A BETTER WAY TO INTEGRATE YOUTUBE INTO REACT NATIVE
// https://lonelycpp.github.io/2020/03/15/react-native-youtube/
import '../css/Playlist.css'

/**
 * ReactComponent Playlist
 * Rendering a playlist
 */
class Playlist extends Component {

	/**
	 * We need a state here
	 * @param  {Object} props 
	 */
	constructor(props){
		super(props)

		// The state here is very important
		this.state = {
			playlist: props.data || {}, // The informations about the playlist (title, description, songs ids, user informations ...)
			playing: false, // The song which is played right now
			showPlayer: false, // Showing player or not ?
			hiddenSongs: true, // Are there too many songs to be shown ?
			videoIndex: 0, // Index of the song played right now
			prevIndex: 0
		}

		// ChildrenItems are all the <PlaylistItem /> of the playlist
		this.childrenItems = []
	}

	/**
	 * Surfacing the Router
	 * @type {Object}
	 */
	static contextTypes = {
		router: PropTypes.object
	}


	/**
	 * Handling several things when the component is mounted
	 */
	componentDidMount(){
		// Creating the YouTube player iFrame
		const player = YouTubePlayer(`${this.props.data.slug}-player`, {
			width: '100%',
			height: '200',
			playerVars: {
				autoplay: 0
			}
		});

		// Binding behaviors on every stateChange of the player
		player.on('stateChange', this.handleStateChange)

		// Populating our state here with the player, the playlist data (title, songs ids, user informations, ...)
		this.setState({
			player,
			playlist: this.props.data,
			hiddenSongs: this.props.data.songs && this.props.data.songs.length > 3
		});
	}

	/**
	 * Will be called by <PlaylistItem /> so we can know what is now the playing item
	 * @param  {Object} data The informations about the song which is played
	 */
	setPlayingInformations = (data) => {
		const playlist        = this.state.playlist
		const playing         = this.state.playing
		playlist.informations = data.informations;

		if(playing){
			const currentPlaylistItem = this.childrenItems.filter(child => child.songId === playing).shift()
			currentPlaylistItem.item.clearProgressInterval();			
		}

		this.setState({playlist, prevIndex: playing, playing: data.informations.id, videoIndex: data.index});
	}

	/**
	 * Handling every state change on the youtube player to apply it to our components (play, pause, end ...)
	 * @param  {YouTubeAPIEvent} state The changeState event from the YouTube Player
	 */
	handleStateChange = (state) => {


		// if(this.state.prevIndex && state.data == -1) {
		// 	if(state.prevIndex){
		// 		console.log('state.prevIndex is : '+ state.prevIndex);
		// 		const prevPlaylistItem = this.childrenItems.filter(data => data.songId === this.state.prevIndex).shift()
		// 		prevPlaylistItem.item.pause();
		// 	}
		// }
		// Identifying the current playlist item which is played
		const currentPlaylistItem = this.childrenItems.filter(data => data.songId === this.state.playing).shift()

		// Switch on the stateEvent data
		// - 0: Stopped
		// - 1: Playing
		// - 2: Paused
		// - 5: Ended
		console.log('state.data is : ' + state.data);
		console.log('this.state.playing is : ' + this.state.playing);
	    switch(state.data){
				case -1: // Playing
					this.setState({paused: false})
	      	currentPlaylistItem.item.playSong();
	        break;
				case 1: // Playing
					this.setState({paused: false})
	      	currentPlaylistItem.item.playSong();
	        break;
				case 2: // Pause
	      	this.setState({paused: true})
	      	currentPlaylistItem.item.pause();
	        break;
	      case 0: // Ending
	      	const index = currentPlaylistItem.index + 1;
	      	currentPlaylistItem.item.pause();
	      	const nextPlaylistItem = this.childrenItems.filter(data => data.index === index).shift()
	      	if(nextPlaylistItem) nextPlaylistItem.item.playSong();
	        break;
	      default:
	        break;
	    }
	  }

	/**
	 * Registering <PlaylistItem /> children everytime they pop !
	 * @param  {int} index  The index of the child
	 * @param  {String} songId The YouTube Id of the child
	 * @param  {PlaylistItem} item   The <PlaylistItem />
	 */
	registerChild = (index, songId, item) => {
		this.childrenItems.push({index, songId, item});
	}

	/**
	 * Seek for a <PlaylistItem /> by YouTube video Id
	 * @param  {String} id YouTube video Id we are looking for
	 * @return {PlaylistItem}    The <PlaylistItem /> who carries this video
	 */
	getChildByVideoId = (id) => {
		return this.childrenItems.filter(data => data.songId === id).shift()
	}


	/**
	 * Removing a song from the playlist
	 * @param  {String} id YouTube Video id
	 */
	removeSong = (id) => {
		const currentPlaylistItem = this.getChildByVideoId(id) //this.childrenItems.filter(data => data.songId === this.state.playing).shift()
		if(currentPlaylistItem && currentPlaylistItem.songId === id){
			currentPlaylistItem.item.clearProgressInterval();
			const nextPlaylistItem = this.getChildByVideoId(currentPlaylistItem.index + 1) //this.childrenItems.filter(data => data.index === currentPlaylistItem.index + 1).shift()
			if(nextPlaylistItem) {
				this.state.player.cueVideoById(nextPlaylistItem.songId)
			};
		}
		const playlist = {...this.state.playlist}
		playlist.songs = playlist.songs.filter(song => song !== id);
		this.setState({playlist});
	}

	/**
	 * Handling the player visibility
	 */
	togglePlayer = () => {
		this.setState((prevState, props) => {
			return {showPlayer: !prevState.showPlayer}
		})
	}

	/**
	 * Handling the songs visibiliy
	 */
	toggleHidden = () => {
		this.setState({hiddenSongs: false})
	}

	/**
	 * Rendering all the <PlaylistItem /> 
	 * @return {JSX/HTML} Each song in our playlist become a <PlaylistItem /> component
	 */
	renderSongs(){
		const playlist = this.state.playlist
		console.log('length of playlist is : ' + playlist.length)
		if(playlist.songs){
			console.log('playlist.songs is: ' + playlist.songs)
			// const chunkSize = 6
			const playlistitems =  playlist.songs.map((song, index) => {
				console.log('index is :- ' + index	)
				return (
					index % 7 === 0 && index > 0? 
					<div>
					<br></br>
					<br></br>
					<br></br>
					
					<div key={song[0]} className={`playlist-item`}>
						<PlaylistItem 
								key={song[4]}
								title={song[0]} 
								index={index}
								song={song[4]}
								language={song[1]} 
								composer={song[3]}
								movie={song[5]}
								player={this.state.player}
								playing={this.state.playing}
								registerPlaying={this.setPlayingInformations}
								registerAsChild={this.registerChild}
								removeSong={this.removeSong}
							/>
					</div>
					</div>
					
					:
					<div key={song[0]} className={`playlist-item`}>
						<PlaylistItem 
								key={song[4]}
								title={song[0]} 
								index={index}
								song={song[4]}
								language={song[1]}
								composer={song[3]}
								movie={song[5]} 
								player={this.state.player}
								playing={this.state.playing}
								registerPlaying={this.setPlayingInformations}
								registerAsChild={this.registerChild}
								removeSong={this.removeSong}
							/>
					</div>
					
				)
			})
			return playlistitems
		} else {
			return (
				<div className="text-center">
					<h5>Add your first video to this playlist bro !</h5>
				</div>
			)
		}
	}

	/**
	 * Rendering the Playlist component
	 * @return {JSX/HTML} The playlist template
	 */
	render(){
		const playlist = this.state.playlist

		return (
			<div className="col-xs-30 col-md-12">
				<div className="card-playlist">
					<div className="header" data-background-color="yellow">
						<h3 className="text-center">
							{/* {playlist.title} */}
						</h3>
						<div className="row">
							<div className="col-5">
							</div>
							<div className="col-3">
							</div>
							<div className="col-4">
								{/* <small>
								<div className="checkbox">
								    <input id={`${playlist.slug}-toggle-player`} type="checkbox" checked={this.state.showPlayer} onChange={(e) => this.togglePlayer(e)} ref={(input) => this.checkboxPlayer = input} />
								    <label htmlFor={`${playlist.slug}-toggle-player`}>
								        &nbsp;Player
								    </label>
								</div>
								</small> */}
							</div>
						</div>
					</div>
					<div className="card-block">
						<div style={{display: this.state.showPlayer? 'block' : 'none'}}>
							<div id={`${playlist.slug}-player`}></div>
							<hr/>
						</div>
						<div id={`${playlist.slug}-songs`} className="songs">
							{this.renderSongs()}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Playlist;