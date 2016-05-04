import React, {
  Component,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native'

class RecmdItem extends Component{

  render(){
    return(
      <TouchableNativeFeedback>
        <View style = {styles.item}>
          <Image
            style = {styles.itemicon}
            loadingIndicatorSource = {require('./placeholder.png')}
            source = {{uri: this.props.data.picUrl}}/>
          <View style = {{flex: 1, flexDirection: 'column', position: 'relative'}}>
            <Text style = {styles.itemtitle} numberOfLines = {2}>
              {this.props.data.title}
            </Text>
            <View style = {styles.timewrapper}>
              <Text style = {styles.itemtime} numberOfLines = {1}>
                {this.props.data.time}
              </Text>
              <Text style = {styles.itemcomment} numberOfLines = {1}>
                {this.props.data.cmtCount + "评论"}
              </Text>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
  },
  itemicon: {
    height: 80,
    width: 110,
  },
  itemtitle: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    color: '#222222',
  },
  timewrapper: {
    flexDirection: 'row',
    position: 'relative',
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'auto',
    marginBottom: 5,
  },
  itemtime: {
    fontSize: 14,
    color: '#999999',
  },
  itemcomment: {
    flex: 1,
    fontSize: 14,
    color: '#999999',
    textAlign: 'right',
  }
})

export default RecmdItem;
