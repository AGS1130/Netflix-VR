import React from 'react';
import {
  Video,
  View,
  asset,
  Animated
} from 'react-vr';

import {Easing} from 'react-native';

//Element
class VideoElement extends React.Component {
  constructor () {
    super();
    this.state = { fadeIn: new Animated.Value(0) };
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(
        this.state.fadeIn,
        {
          toValue: 1,
          duration: 2000,
          easing: Easing.ease
        }
      )
    ]).start();
  }

  render() {
    return (
      <Animated.View style={{ margin: 0.1, height: 4, opacity: this.state.fadeIn}}>
        <Video style={{height: 4}} source={asset('TheVision.mov')} />
      </Animated.View>
    )
  }
}

module.exports = VideoElement;