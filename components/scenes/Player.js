import React from 'react';
import {
    Text,
    View, 
    asset,
    Pano
} from 'react-vr';

import VideoStyle from './layouts/VideoStyle.js';

//This is the third and final thing you should see

class Player extends React.Component {
    render() {
        return (
        <View>
            <Pano source={asset('Teatro.jpg')}/>
            <VideoStyle showButton={this.props.showButton} text={this.props.text}/>
        </View>            
        )
    }
}

module.exports = Player;