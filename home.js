import React,{
  Component,
  DrawerLayoutAndroid,
  DrawerConsts,
} from 'react-native';

import MainScreen from './mainScreen';
import NavigationView from './navigationView';
let DRAWER_REF = "drawer";
let MAINSCREEN_REF　= "main";
import Storage from 'react-native-storage';
global.storage = new Storage({
  size: 1000,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {

  }
})

class Home extends Component{

  constructor(props){
    super(props);
  }

  render(){

    let navigationView = (
      <NavigationView
        style = {{flex: 1}}
        showItem = {(target: Object) => {
          this.refs[DRAWER_REF].closeDrawer();
          this.refs[MAINSCREEN_REF]._showNews(target);
        }}/>
    );

    return(
      <DrawerLayoutAndroid
        ref = {DRAWER_REF}
        style = {{flex: 1}}
        drawerWidth = {300}
        drawerPosition = {DrawerLayoutAndroid.positions.Left}
        renderNavigationView = {() => navigationView}>

        <MainScreen style = {{flex: 1}}
          ref = {MAINSCREEN_REF}
          open = {() => this.refs[DRAWER_REF].openDrawer()}
          showView = {(target) => this.props.showView(target)}/>
      </DrawerLayoutAndroid>
    );
  }
}

export default Home;
