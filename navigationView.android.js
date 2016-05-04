import React, {
  View,
  Component,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Image,
} from 'react-native';

var Icon = require('react-native-vector-icons/Ionicons');

class NavigationView extends Component{

  constructor(props){
    super(props);
    this.state = {
      userIcon: require('./avatar.jpg'),
    };
  }

  render(){
    return (
        <View style = {{flex: 1, backgroundColor: '#fff'}}>
          <View style = {styles.header}>
            <View style = {{flexDirection: 'row'}}>
              <View style = {{flex: 1}}>
                <Image
                  style = {styles.avatar}
                  source = {this.state.userIcon}/>
              </View>
              <Image
                style = {{width: 25, height: 25, marginRight: 15, marginTop: 10}}
                source = {require('./ic_exit_to_app_white_18dp.png')}/>
            </View>
            <View style = {styles.idWrapper}>
              <Text
                style = {styles.id}>
                ID : Funny
              </Text>
              <Text style = {styles.sign}>
                Sign : Funny
              </Text>
            </View>
          </View>
          <TouchableNativeFeedback
            onPress={() => this.__showItem({id: 0, title: "今日推荐",name: "home_recommend"})}>
            <View>
              <Text style = {styles.itemText}>
                今日推荐
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => this.__showItem({id: 1, title: "资讯",name: "home_news"})}>
            <View>
              <Text style = {styles.itemText}>
                资讯
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => this.__showItem({id: 2, title: "商城",name: "home_market"})}>
            <View>
              <Text style = {styles.itemText}>
                商城
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
    );
  }

  __showItem(target: Object){
    this.props.showItem(target);
  }
}

const styles = StyleSheet.create({
  header: {
    height: 160,
    backgroundColor: '#3F51B5',
  },
  item: {

  },
  itemText: {
    margin: 15,
    fontSize: 17,
    textAlign: 'left',
  },
  avatar: {
    width: 60,
    height: 60,
    marginTop: 20,
    borderRadius: 30,
    marginLeft: 40,
  },
  id: {
    color: '#ffffff',
    fontSize: 15,
  },
  sign: {
    color: '#ffffff',
    fontSize: 15,
    marginTop: 8,
  },
  idWrapper: {
    flex: 1,
    marginLeft: 35,
    marginTop: 15,
  }
});

export default NavigationView;
