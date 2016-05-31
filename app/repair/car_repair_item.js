import React, {
  View,
  Component,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

class RepairItem extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style = {{backgroundColor: '#E9E9F0'}}>
        <View style = {styles.container}>
          <Image
            style = {styles.icon}
            source = {{uri: this.props.data.pic}}/>
          <View style = {styles.middle_container}>
            <Text>
              鸿粤4S店
            </Text>
            <Text style = {{marginTop: 10, marginBottom: 10}}>
              白云大道北
            </Text>
          </View>
          <Text style = {styles.distance}>
            1km
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    width: 80,
    height: 80,
    margin: 15,
  },
  middle_container: {
    flex: 1,
    flexDirection: 'column',
    margin: 15,
  },
  distance: {
    margin: 15,
  }
})

export default RepairItem;
