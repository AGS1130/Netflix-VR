import React from 'react';
import {
  Text,
  View,
  VrButton,
  asset,
  Pano
} from 'react-vr';

import TitleStyle from './layouts/TitleStyle.js';

//First Thing You should see
class TitleCard extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('Greece.jpg')}/>
        <TitleStyle showButton={this.props.showButton} text={this.props.text} changeScenes={this.props.changeScenes} scene={this.props.scene}/>
     </View>
    )
  }
}

module.exports = TitleCard;