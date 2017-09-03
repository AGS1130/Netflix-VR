import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';

import Title from './elements/Title.js';
import Button from './elements/Button.js';


//Styling
class TitleStyle extends React.Component {
  render() {
    return (
      <View style={{
        width: 2,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 0, -3]}]
      }}>
        <Title/>
        <Button showButton={this.props.showButton} text={this.props.text} changeScenes={this.props.changeScenes} scene={this.props.scene}/>
      </View>
    )
  }
}

module.exports = TitleStyle;
