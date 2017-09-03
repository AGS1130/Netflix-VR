import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View
} from 'react-vr';

import axios from 'react-native-axios';

import TitleCard from './components/scenes/TitleCard.js';
import Menu from './components/scenes/Menu.js';
import Player from './components/scenes/Player.js';

export default class Chill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: 1, 
      img: "", 
      title: "", 
      IDs: "", 
      selectedStreamID: ""};
  }

  componentWillMount() {
    axios.get('https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=AIzaSyDyNZ_cXDCMEJKujXbtFVPyiG-CsSFQZsY&part=snippet&maxResults=6')

    .then((response) => {
      console.log(response);
      this.getImg(response);
      this.getTitle(response);
      this.getIDs(response);
    })
    .catch(e => {
      console.log(e)
    });
  }

  getImg(response) {
    const images = response.data.items.map( yes => {
      return yes.snippet.thumbnails.high.url;
    });
    console.log("response");
    this.setState({img: images});
  }

  getTitle(response) {
    const titis = response.data.items.map( yes => {
      return yes.snippet.channelTitle;
    });
    this.setState({title: titis});
  }

  getIDs(response) {
    const ids = response.data.items.map( yes => {
      return yes.id;
    });
    this.setState({IDs: ids});
  }

  captureSelection(stage, value) {
    switch (stage) {
      case 1:
        this.setState({selectedStreamID: this.state.IDs[value-1]});
        break;
    }
  }

  changeScenes(nextScene) {
    switch (nextScene) {
      case 1:
        this.setState({scene: 1});
        break;
      case 2:
        this.setState({scene: 2});
        break;
      case 3:
        this.setState({scene: 3});
        break;
    }
  }

  render() {
    const scene = this.state.scene;
    return (
      <View>
          {/* <TitleCard 
          showButton={true} 
          text={"Watch"} 
          changeScenes={this.changeScenes.bind(this)} 
          scene={this.state.scene}/> */}
            {/* <Menu
              img={this.state.img}
              showButton={false}
              text={"Select Film"}
              changeScenes={this.changeScenes.bind(this)}
              scene={this.state.scene}
            /> */}
            <Player 
            streamID={this.state.selectedStreamID} 
            env={this.state.selectedEnv} 
            showButton={true} 
            text={"Back to Menu"} 
            changeScenes={this.changeScenes.bind(this)} 
            scene={this.state.scene}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('Chill', () => Chill);
