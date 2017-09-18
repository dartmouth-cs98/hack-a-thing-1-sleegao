import React from 'react';

import { StyleSheet, Text, TextInput, View, ScrollView, Image, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
    	showImage: true,
    	blink: true, 
      text: 'Jeff'
    };

    this.toggleBlinking = this.toggleBlinking.bind(this);

    setInterval(() => {
      if (this.state.blink) {
      	this.setState(previousState => {
	        return { showImage: !previousState.showImage };
	      })
      } else {
      	this.setState({ showImage: true })
      }
    }, 500)
  };

  toggleBlinking() {
  	this.setState(previousState => {
      return { blink: !previousState.blink };
    })
  }

  renderImage() {
    const pic1 = {
      uri: "http://content.draftexpress.com/upload/player/large/LonzoBall.jpg"
    };
    const pic2 = {
    	uri: "http://hw-static.worldstarhiphop.com/u/pic/2016/04/olxgOdhAkr4e.jpg"
    };
    const pic3 = {
    	uri: "http://i2.cdn.cnn.com/cnnnext/dam/assets/160630101057-michael-phelps-u-s-trials-exlarge-169.jpg"
    };
    const pic4 = {
    	uri: "http://cdn.images.dailystar.co.uk/dynamic/58/photos/362000/620x/Lionel-Messi-645224.jpg"
    };

    if (this.state.showImage) {
      return (
      	<View style={styles.container}>
      		<Image source={pic1} style={{width: '50%', height: 110}}/>
      		<Image source={pic2} style={{width: '50%', height: 110}}/>
      		<Image source={pic3} style={{width: '50%', height: 110}}/>
      		<Image source={pic4} style={{width: '50%', height: 110}}/>
    		</View>
  		)
    }
  }

  render() {
    return (
      <View style={[{alignItems: 'center'}, {height: 400, width: '100%'}]}>
        <View style={styles.names}>
          <Greeting name={this.state.text} />
        </View>
    		<ScrollView style={[{height: 220}, {position: 'relative'}]}>
	        { this.renderImage() }
        </ScrollView>
        <Button 
        	onPress={this.toggleBlinking} 
        	title='Toggle Blinking'
        	style={[{position: 'absolute'}, {bottom: 0}]}
      	/>
        <TextInput
          style={{height: 40}}
          placeholder="Your name here"
          onChangeText={text => this.setState({text})} 
        />
      </View>
    );
  };
}

class Greeting extends React.Component {
  render() {
    return (
      <Text style={{textAlign: 'center'}}>Hello {this.props.name}!</Text>
    )
  }
}

const styles = StyleSheet.create({
	names: {
		marginTop: '25%',
    marginBottom: 20
	},
  container: {
  	flexDirection: 'row',
  	flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
