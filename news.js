import React, {
  View,
  Text,
  Component,
} from 'react-native';

class News extends Component{

  render() {
    return (
      <View style = {{flex: 1, alignItems: 'center'}}>
        <Text style = {{margin: 10, fontSize: 15, textAlign: 'right'}}>
          资讯页
        </Text>
        <Text style = {{margin: 10, fontSize: 15, textAlign: 'right'}}>

        </Text>
      </View>
    );
  }
}

export default News;
