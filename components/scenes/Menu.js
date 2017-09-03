import React from 'react';
import {
  Text,
  View,
  asset,
  Pano
} from 'react-vr';

import MenuStyle from './layouts/MenuStyle.js';

//Second Thing You should see
class Menu extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('Lourve.jpg')}/>
        <MenuStyle 
        img={this.props.img} 
        text={this.props.text}
        />
      </View>
    )
  }
}

module.exports = Menu;
