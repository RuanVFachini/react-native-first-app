import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>Footer</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8000ff',
    height: 100
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    paddingStart: 20,
    paddingEnd: 20
  },
})