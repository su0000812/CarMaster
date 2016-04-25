import React, {
  View,
  Text,
  Component,
  TouchableNativeFeedback,
} from 'react-native';

var Record = require('./record');

class Recommend extends Component{

  constructor(props){
    super(props);
    this.state = {};
  }

  _startRecord(){
    Record.startRecord();
  }

  render() {
    return (
      <View style = {{flex: 1, alignItems: 'center'}}>
        <Text style = {{margin: 10, fontSize: 15, textAlign: 'right'}}>
          推荐页
        </Text>
        <Text style = {{margin: 10, fontSize: 15, textAlign: 'right'}}>
        </Text>
      </View>
    );
  }
}

export default Recommend;
