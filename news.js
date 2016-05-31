import React, {
  View,
  Text,
  Component,
  Picker,
} from 'react-native';

class News extends Component{

  constructor(props){
    super(props);

    this.state = {language: ""};
  }

  render() {
    return (
      <View style = {{flex: 1, alignItems: 'center'}}>
        <Text style = {{margin: 10, fontSize: 15, textAlign: 'right'}}>
          资讯页
        </Text>
        <Picker prompt="请选择"
          mode="dropdown"
          style={{width:200}}
          selectedValue={this.state.language}
          onValueChange={(value) => this.setState({language:value})}>
          <Picker.Item label = "Java" value = "java"/>
          <Picker.Item label = "JavaScript" value = "js"/>
        </Picker>
      </View>
    );
  }
}

export default News;
