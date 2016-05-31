import React, {
  Component,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ToolbarAndroid,
  ToastAndroid,
}from 'react-native';

class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      userIcon: require('../../avatar.jpg'),
      title: "登录"
    };
  }

  _login(){
    if(this.state.username === undefined || this.state.password === undefined){
      ToastAndroid.show("username or password can not null ",ToastAndroid.LONG);
    }else{
      if(this.state.username.length > 0 && this.state.password.length > 0){
        storage.save({
          key: 'loginState',
          rawData: {
            userid: this.state.username,
          },
        });
        main_navigator.pop();
      }else{
        ToastAndroid.show("username or password length 0",ToastAndroid.LONG);
      }
    }
  }

  render(){
    let toolbarActions = [{title: '登录', icon: require('../../ic_done_white_18dp.png'), show: 'always'}];

    return(
      <View style = {{flex: 1}}>
        <ToolbarAndroid style = {styles.toolbar}
          navIcon = {require('../../ic_arrow_back_white_18dp.png')}
          actions = {toolbarActions}
          title = {this.state.title}
          titleColor = {'#FFFFFF'}
          backgroundColor = {'#3F51B5'}
          onIconClicked = {() => main_navigator.pop()}
          onActionSelected = {(position) => this._login()}>
        </ToolbarAndroid>
        <View style = {styles.container}>
          <View style={{paddingBottom: 40}}>
            <Image
              style = {styles.icon}
              source = {this.state.userIcon}/>
            <TextInput
              style = {styles.input}
              onChangeText = {(text) => this.setState({username: text})}
              value = {this.state.username}
              placeholder = "UserName"/>
            <TextInput
              style = {styles.input}
              onChangeText = {(text) => this.setState({password: text})}
              value = {this.state.password}
              placeholder = "PassWord"/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbar: {
    height: 55,
  },
  icon: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 50,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#3F51B5',
    fontSize: 16,
  }
});

export default Login;
