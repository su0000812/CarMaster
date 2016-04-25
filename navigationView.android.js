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
      userIcon: null,
    };
    //require('./ic_search_white_18dp.png')
    // Icon.getImageSource('user', 20, 'red').then((source) => this.setState({ userIcon: source }));
  }

  render(){
    return (
        <View style = {{flex: 1, backgroundColor: '#fff'}}>
          <View style = {styles.header}>

            <Image source={{uri: this.state.userIcon}}/>
          </View>
          <Icon name="person" size={30} color="#4F8EF7" />
          <TouchableNativeFeedback
            onPress={() => this.props.showItem({id: 0, title: "今日推荐",name: "home_recommend"})}>
            <View>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
                今日推荐
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => this.props.showItem({id: 1, title: "资讯",name: "home_news"})}>
            <View>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
                资讯
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
    );
  };
}

const styles = StyleSheet.create({
  header: {
    height: 160,
    backgroundColor: '#3F51B5',
  },
  item: {

  },
  itemText: {

  }
});

export default NavigationView;
