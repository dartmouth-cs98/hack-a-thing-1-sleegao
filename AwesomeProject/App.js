import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    const pic = {
      uri: "http://content.draftexpress.com/upload/player/large/LonzoBall.jpg"
    };

    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
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
