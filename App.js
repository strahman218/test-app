import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground , Button} from 'react-native';
import { images } from './src/images'

export default class App extends React.Component {

  getImage(){
    console.log("we're in get Image")
    // console.dir(images)
    // console.log("thing")
    // console.dir(thing)
  }

  render() {
    return (
      <ImageBackground source={images.loginSparkler} style={styles.backgroundImage}>
        <Button title="Press Me" onPress={this.getImage}></Button>
      </ImageBackground>
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
  backgroundImage: {
    //backgroundColor: Colors.transparent,
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
