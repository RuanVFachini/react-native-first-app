import { Text, View, StyleSheet, Button } from 'react-native'
import React, { Component } from 'react'

export default class Balance extends Component {
  state = {isHungry: true}
  render() {
    return (
      <View style={styles.container}>
        <Text>
          I am {this.props.name}, and I am
          {this.state.isHungry ? " hungry" : " full"}!
        </Text>
        <Button
          onPress={() => {
            this.setState({ isHungry: false });
          }}
          disabled={!this.state.isHungry}
          title={
            this.state.isHungry ? "Pour me some milk, please!" : "Thank you!"
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // color: "#000",
    flex: 1,
    backgroundColor: '#aaaaaa'
  },
});