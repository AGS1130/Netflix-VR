import React from 'react';
import {
  Text,
  View,
  VrButton, 
  Image,
  asset
} from 'react-vr';

//Element
class TileButtons extends React.Component {

  render() {
    return (
      <View style={{marginTop: -0.09, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#000000",
              borderStyle: "solid"
            }}
          >
            <VrButton onClick={ () => this.props.updateStage(1) }>
            <Image 
            source={{uri: this.props.img[0]}}
            style={{
              width: 1,
              height: 0.6,
              borderWidth: this.props.borderWidths[0],
              borderColor: "#B9090B"
            }}/>
            </VrButton>
          </View>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#000000",
              borderStyle: "solid"
            }}
          >
            <VrButton onClick={ () => this.props.updateStage(2) }>
            <Image 
            source={{uri: this.props.img[1]}}
            style={{
              width: 1,
              height: 0.6,
              borderWidth: this.props.borderWidths[1],
              borderColor: "#B9090B"
            }}/>
            </VrButton>
          </View>
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#000000",
              borderStyle: "solid"
            }}
         >
            <VrButton onClick={ () => this.props.updateStage(3) }>
            <Image 
            source={{uri: this.props.img[2]}}
            style={{
              width: 1,
              height: 0.6,
              borderWidth: this.props.borderWidths[2],
              borderColor: "#B9090B"
            }}/>
            </VrButton>
          </View>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#000000",
              borderStyle: "solid"
            }}
         >
            <VrButton onClick={ () => this.props.updateStage(4) }>
            <Image 
            source={{uri: this.props.img[3]}}
            style={{
              width: 1,
              height: 0.6,
              borderWidth: this.props.borderWidths[3],
              borderColor: "#B9090B"
            }}/>
            </VrButton>
          </View>
        </View>

        <View style={{ margin: 0.1, width: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#000000",
              borderStyle: "solid"
            }}
         >
            <VrButton onClick={ () => this.props.updateStage(5) }>
            <Image 
            source={{uri: this.props.img[4]}}
            style={{
              width: 1,
              height: 0.6,
              borderWidth: this.props.borderWidths[4],
              borderColor: "#B9090B"
            }}/>
            </VrButton>
          </View>
          <View
            style={{
              margin: 0.1,
              height: 0.6,
              backgroundColor: "#000000",
              borderStyle: "solid"
            }}
          >
            <VrButton onClick={ () => this.props.updateStage(6) }>
            <Image 
            source={{uri: this.props.img[5]}}
            style={{
              width: 1,
              height: 0.6,
              borderWidth: this.props.borderWidths[5],
              borderColor: "#B9090B"
            }}/>
            </VrButton>
          </View>
        </View>

     </View>
    )
  }
}

module.exports = TileButtons;