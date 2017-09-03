import React from 'react';
import {
  View,
  Animated
} from 'react-vr';

import { Easing } from 'react-native';

import MenuButtons from './elements/MenuButtons.js';
import TileButtons from './elements/TileButtons.js';

import Button from './elements/Button.js';

//Layout
class MenuStyle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideLeft: new Animated.Value(-1),
      fadeIn: new Animated.Value(0),
      showButton: false,
      text: this.props.text,
      borderWidths: [0, 0, 0, 0, 0, 0],
      selectionIndex: "",		
      stage: 1
    };
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.slideLeft,
          {
           toValue: 0,
           duration: 2000,
           easing: Easing.ease
          }
        ),
        Animated.timing(
          this.state.fadeIn,
          {
           toValue: 1,
           duration: 2000,
           easing: Easing.ease
          }
        )
      ])
    ]).start();
  }

  //previously updateShowButton
  updateStage(input) {
    if(this.state.showButton === false) {
      this.setState({showButton: true});
    }

    switch (input) {
      case 1:
        this.setState({borderWidths: [0.05, 0, 0, 0, 0, 0]});
        break;
      case 2:
        this.setState({borderWidths: [0, 0.05, 0, 0, 0, 0]});
        break;
      case 3:
        this.setState({borderWidths: [0, 0, 0.05, 0, 0, 0]});
        break;
      case 4:
        this.setState({borderWidths: [0, 0, 0, 0.05, 0, 0]});
        break;
      case 5:
        this.setState({borderWidths: [0, 0, 0, 0, 0.05, 0]});
        break;
      case 6:
        this.setState({borderWidths: [0, 0, 0, 0, 0, 0.05]});
        break;
    }
  }

  // updateScene() {
  //   this.setState({color1: "#FFFFFF", color2: "#B9090B", text: "Watch Video"});
  // }

  render() {
    return (
      <View>
        <Animated.View
          style={{
            width: 5,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            layoutOrigin: [0.5, 0.5],
            opacity: this.state.fadeIn,
            transform: [
              {translateX: this.state.slideLeft},
              {translateZ: -3}
            ],
            marginTop: -0.3
          }}
        >
          <MenuButtons/>
          <TileButtons 
          img={this.props.img}
          updateStage={this.updateStage.bind(this)}
          borderWidths={this.state.borderWidths}/>
        </Animated.View>

        <View style={{
          width: 5,
          height: 0.5,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          layoutOrigin: [0.5, 0.5],
          transform: [{translate: [0, 0, -3]}],
          marginTop: -0.7
        }}>
          <Button 
          showButton={this.state.showButton}
          text={this.state.text}
          changeScenes={this.props.changeScenes}
          stage={this.state.stage}
          scene={this.props.scene}	
          />
        </View>
      </View>
    )
  }
}

module.exports = MenuStyle;
