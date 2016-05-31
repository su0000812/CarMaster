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
  StatusBar,
  Navigator,
  BackAndroid,
} from 'react-native';

window.main_navigator;
import Home from './home';
import SearchMain from './app/search/searchMain';
import MessageMain from './app/message/messageMain';
import SettingMain from './app/settings/settingsMain';
import Login from './app/login/loginMain';

class CarMaster extends Component {

  render() {
    let initialRoute = {id: 0, name: "home",title: "主页"};

    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor='#3F51B5'
          translucent={false}
          hidden={false}
          animated={true} />
        <Navigator
          initialRoute={initialRoute}
          configureScene={(route) => {
            return Navigator.SceneConfigs.FadeAndroid;
          }}
          renderScene={(route,navigation) => {
            main_navigator = navigation;
            if(route.name === 'home'){
              return (<Home
                style = {{flex: 1}}
                showView = {(target) => this._showView(target)}/>);
            }else if(route.name === 'search'){
              return (<SearchMain style = {{flex: 1}}/>);
            }else if(route.name === 'message'){
              return (<MessageMain style = {{flex: 1}}/>);
            }else if(route.name === 'setting'){
              return (<SettingMain style = {{flex: 1}}/>);
            }else if(route.name === 'login'){
              return (<Login style = {{flex: 1}}/>);
            }
          }}
          />
      </View>
    );
  }

  _showView(target: Object) {
    window.main_navigator.push(target);
  }
}

BackAndroid.addEventListener('hardwareBackPress',function(){
  if(main_navigator && main_navigator.getCurrentRoutes().length > 1){
    main_navigator.pop();
    return true;
  }
  return false;
});

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
