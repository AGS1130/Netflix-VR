import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';

//Element
class MenuButtons extends React.Component {

  render() {
    return (
      <View
        style={{
          margin: 0.1,
          width: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'center'
        }}
      >
        <View
          style={{
            margin: 0.1,
            height: 0.3,
            backgroundColor: "#000000"
          }}
        >
          <VrButton>
            <Text
              style={{
                fontSize: 0.2,
                textAlign: 'center',
                color: "#B9090B"
              }}>
            Netflix
            </Text>
          </VrButton>
        </View>

        <View
          style={{
            margin: 0.1,
            height: 0.3,
            backgroundColor: "#B9090B"
          }}
        >
          <VrButton>
            <Text
              style={{
                fontSize: 0.2,
                textAlign: 'center',
                color: "#FFFFFF"
              }}>
            YouTube
            </Text>
          </VrButton>
        </View>

        <View
          style={{
            margin: 0.1,
            height: 0.3,
            backgroundColor: "#3B5998"
          }}
        >
          <VrButton>
            <Text
              style={{
                fontSize: 0.2,
                textAlign: 'center',
                color: "#FFFFFF"
              }}>
            Facebook
            </Text>
          </VrButton>
        </View>

        <View
          style={{
            margin: 0.1,
            height: 0.3,
            backgroundColor: "#0084b4"
          }}
        >
          <VrButton>
            <Text
              style={{
                fontSize: 0.2,
                textAlign: 'center',
                color: "#FFFFFF"
              }}>
            Twitter
            </Text>
          </VrButton>
        </View>

      </View>
    )
  }
}

module.exports = MenuButtons;
