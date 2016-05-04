import React, {
  Component,
  StyleSheet,
  ProgressBarAndroid,
  View,
} from 'react-native';

class MProgressBar extends Component{
  render(){
    return (
      <View style={{alignItems: 'center'}}>
        <ProgressBarAndroid
          style = {styles.progressbar}
          color = {'#3F51B5'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  progressbar: {
    width: 30,
    height: 30,
    margin: 10,
  },
});
export default MProgressBar;
