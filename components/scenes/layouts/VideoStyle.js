import React from 'react';
import {
    View
} from 'react-vr';

import VideoElement from './elements/VideoElement.js';
import Button from './elements/Button.js';

class VideoStyle extends React.Component {
    render () {
        return (
            <View>
                <View style={{
                    flex: 1,
                    width: 9,
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    backgroundColor: '#000000',
                    layoutOrigin: [0.5, 0.5],
                    transform: [{translate: [0, 0, -9.5]}]
                }}>
                <VideoElement/>
                </View>

                <View style={{
                    flex: 1,
                    width: 3,
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    layoutOrigin: [0.5, 0.5],
                    transform: [{translate: [0, 3.5, 3]}, {rotateY: -180}]
                }}>
                <Button showButton={this.props.showButton} text={this.props.text}/>
                </View>
            </View>
        )
    }
}

module.exports = VideoStyle;