import React,{
  Component,
  View,
  Text,
} from 'react-native';

class MessageMain extends Component{
  render(){
    return(
      <View style = {{flex: 1}}>
        <Text style = {{flex: 1, textAlign: 'center', color: '#666666'}}>
          消息主页面
        </Text>
      </View>
    );
  }
}

export default MessageMain;
