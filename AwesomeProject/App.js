import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { showImage: true };

    setInterval(() => {
      this.setState(previousState => {
        return { showImage: !previousState.showImage };
      })
    }, 300)
  };

  renderImage() {
    const pic = {
      uri: "http://content.draftexpress.com/upload/player/large/LonzoBall.jpg"
    };
    if (this.state.showImage) {
      return <Image source={pic} style={[{width: 193, height: 110}]}/>
    }
  }

  render() {
    return (
      <View style={[{alignItems: 'center'}, styles.container]}>
        <Greeting name='Jeff'/>
        <Greeting name='Sam'/>
        { this.renderImage() }
      </View>
    );
  };
}

class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
