import React from 'react';

import { StyleSheet, Text, TextInput, View, ScrollView, Image, Button, FlatList } from 'react-native';

export default class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			showImage: true,
			blink: false,
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
			<View style={[{alignItems: 'center'}, {width: '100%'}]}>
				<View style={styles.names}>
					<Greeting name={this.state.text} />
				</View>
				<TextInput
					style={{height: 40}}
					placeholder="Your name here"
					onChangeText={text => this.setState({text})}
				/>
				<ScrollView style={[{height: 220}, {position: 'relative'}]}>
					{ this.renderImage() }
				</ScrollView>
				<Button
					onPress={this.toggleBlinking}
					title='Toggle Blinking'
					style={[{position: 'absolute'}, {bottom: 0}]}
				/>
				<TodoList />
			</View>
		);
	};
}

class Greeting extends React.Component {
	render() {
		return <Text style={{textAlign: 'center'}}>Hello {this.props.name}!</Text>
	}
}

class TodoList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			tasks: [{key: 'Make'}], 
			text: ''
		}

		this.addItem = this.addItem.bind(this)
		this.removeItem = this.removeItem.bind(this)
	}

	addItem() {
		if (this.state.text) {
			this.setState({
				tasks: this.state.tasks.concat([{key: this.state.text}]),
				text: ''
			})
		}
	}

	removeItem(item) {
		console.log(item)
		let newTasks = []
		for (const task of this.state.tasks) {
			if (task.key !== item.key) {
				newTasks.push(task)
			}
		}

		this.setState({ tasks: newTasks })
	}

	renderInput() {
		return (
			<View style={{flexDirection: 'row'}}>
				<TextInput
					style={{height: 40}}
					placeholder="Task description"
					value={this.state.text}
					onChangeText={text => this.setState({text})}
				/>
				<Button
					onPress={this.addItem}
					title='Add'
				/>
			</View>
		)
	}

	renderItem({item}) {
		return <Task name={item.key} />
	}

	render() {
		return (
			<View style={[{flexDirection: 'column'}, {height: 200}]}>
				{this.renderInput()}
				<FlatList 
					data={this.state.tasks}
					renderItem={this.renderItem} 
				/>
			</View>
		)
	}
}

class Task extends React.Component {
	constructor(props) {
		super(props)

		this.state = { done: false }

		this.done = this.done.bind(this)
	}

	done() {
		this.setState({ done: true })
	}

	renderText() {
		if (this.state.done) {
			return <Text style={[styles.text, {color: 'green'}]}>{this.props.name}</Text>
		} else {
			return <Text style={[styles.text, {color: 'red'}]}>{this.props.name}</Text>
		}
	}

	renderButton() {
		if (!this.state.done) {
			return (
				<Button
					onPress={this.done}
					title='Done'
				/> 
			)
		}
	}

	render() {
		return (
			<View style={{flexDirection: 'row'}}>
				{this.renderText()}
				{this.renderButton()}
			</View>
		)
	}
}

class Counter extends React.Component {
	constructor(props) {
		super(props)
		this.state = { count: 123	}

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.renderCount = this.renderCount.bind(this);
	}


	increment() {
		this.setState({count: this.state.count + 1 });
	}

	decrement() {
		this.setState({count: this.state.count - 1 });
	}

	renderCount() {
		return <Text>{ this.state.count }</Text>
	}

	render() {
		return (
			<View>
				<Button onPress={this.increment} title="Increment" />
				<Button onPress={this.decrement} title="Decrement" />
				{ this.renderCount() }
			</View>
		)
	}
}

const styles = StyleSheet.create({
	text: {
		padding: 8,
		fontSize: 18,
		textAlign: 'center'
	},
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
