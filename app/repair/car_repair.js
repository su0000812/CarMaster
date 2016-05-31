import React, {
  View,
  Component,
  StyleSheet,
  Picker,
  Dimensions,
  ListView,
} from 'react-native';

import RepairItem from './car_repair_item';
let lv_dataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});

class CarRepair extends Component {

  constructor(props){
    super(props);
    this.state = {
      area: "",
      sorts: "",
      type: "",
      lvDataSource: lv_dataSource.cloneWithRows([
        {
          pic: 'http://img.article.pchome.net/00/35/48/62/pic_lib/wm/Raycity01.jpg',
        }
      ]),
    };
  }

  _renderRow(rowData){
    return (
      <RepairItem data = {rowData}/>
    );
  }

  render(){
    return (
      <View style = {styles.container}>
        <View style = {styles.picker_container}>
          <Picker prompt = "地区"
            mode = "dropdown"
            style = {styles.picker}
            selectedValue = {this.state.area}
            onValueChange = {(value) => this.setState({area:value})}>
            <Picker.Item label = "广州" value = "广州"/>
            <Picker.Item label = "深圳" value = "深圳"/>
          </Picker>
          <Picker prompt = "综合排序"
            mode = "dropdown"
            style = {styles.picker}
            selectedValue = {this.state.sorts}
            onValueChange = {(value) => this.setState({sorts:value})}>
            <Picker.Item label = "综合" value = "综合"/>
            <Picker.Item label = "离我最近" value = "离我最近"/>
            <Picker.Item label = "评分最高" value = "评分最高"/>
            <Picker.Item label = "评价最多" value = "评价最多"/>
          </Picker>
          <Picker prompt = "筛选"
            mode = "dropdown"
            style = {styles.picker}
            selectedValue = {this.state.language}
            onValueChange = {(value) => this.setState({type:value})}>
            <Picker.Item label = "全部" value = "全部"/>
            <Picker.Item label = "4s店" value = "4s店"/>
            <Picker.Item label = "维修厂" value = "维修厂"/>
          </Picker>
        </View>
        <ListView style = {styles.listview}
          enableEmptySections = {true}
          dataSource = {this.state.lvDataSource}
          renderRow = {this._renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picker_container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  picker: {
    alignItems: 'center',
    flex: 1,
    color: '#3F51B5',
  },
  listview: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
})

export default CarRepair;
