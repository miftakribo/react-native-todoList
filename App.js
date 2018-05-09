import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    input: '',
    list: ['todo 1']
  }
  onPressHandler = () => {
    if(this.state.input === '') return
    this.setState({
      input: '',
      list: [...this.state.list, this.state.input]
    })
  }

  onChangeText = (text) => {
    this.setState({
      input: text
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>To Do List</Text>
        { this.state.list.map((x, i) => (
            <Text key={i}>{x}</Text>
          ))
        }
        <TextInput 
          value={this.state.input}
          onChangeText={this.onChangeText}
        />
        <Button 
          title="Submit"
          onPress={this.onPressHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
