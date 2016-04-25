/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  DrawerConsts,
  StatusBar,
} from 'react-native';

import MainScreen from './mainScreen.js';
import NavigationView from './navigationView';
let DRAWER_REF = "drawer";
let MAINSCREEN_REF　= "main";

class CarMaster extends Component {

  render() {

    let navigationView = (
      <NavigationView
        style = {{flex: 1}}
        showItem = {(target: Object) => {
          this.refs[DRAWER_REF].closeDrawer();
          this.refs[MAINSCREEN_REF]._showNews(target);
        }}/>
    );
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor='#3F51B5'
          translucent={false}
          hidden={false}
          animated={true}
        />
        <DrawerLayoutAndroid
          ref = {DRAWER_REF}
          style = {{flex: 1}}
          drawerWidth = {300}
          drawerPosition = {DrawerLayoutAndroid.positions.Left}
          renderNavigationView = {() => navigationView}>

          <MainScreen style = {{flex: 1}}
            ref = {MAINSCREEN_REF}
            open = {() => this.refs[DRAWER_REF].openDrawer()}/>
        </DrawerLayoutAndroid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CarMaster', () => CarMaster);
