import React, {
  View,
  Text,
  Component,
  TouchableNativeFeedback,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  Easing,
  RefreshControl,
  ListView
} from 'react-native';

var Record = require('./record');
var ViewPager = require('react-native-viewpager');
import RecmdItem from './recommend_item';
import MProgressBar from './progressbar';

var IMGS = [
  "http://www.qianhuaweb.com/data/attachement/jpg/site82/2012-12-25/8544344886549892553.jpg",
  "http://www.autotimes.com.cn/upload/admin/images/guiyang/201203/14/116.jpg",
  "http://pic15.nipic.com/20110718/4922929_144443608133_2.jpg",
  "http://www.pp3.cn/uploads/1212qxn/965.jpg",
  "http://www.bz55.com/uploads/allimg/130805/1-130P5101200.jpg"
];
var deviceWidth = Dimensions.get('window').width;
let reqUrl;
let lv_dataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});;
let totalPage;
let currentPage = 0;
let dataList;

class Recommend extends Component{

  constructor(props){
    super(props);
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });

    this.state = {
      dataSource: dataSource.cloneWithPages(IMGS),
      lvDataSource: lv_dataSource.cloneWithRows([]),
      refreshing: false,
      needLoadingFooter: true,
      userIcon: require('./avatar.jpg'),
    };

    reqUrl = "http://test.www.xiguaauto.com/api/ios/v1/articles.jsp?channelId=83&type=1&pageSize=10";
    this.getData(1);
  }

  _startRecord(){
    Record.startRecord();
  }

  _renderPage(data: Object, pageID: number | string){
    return(
      <Image
      source={{uri: data}}
      style={styles.page} />
    );
  }

  _onRefresh(){
    this.setState({refreshing: true});
    this.getData(1);
    // setTimeout(() => {
    //   this.setState({refreshing: false});
    // },1500);
  }

  _renderRow(rowData){
    if(rowData.title !== undefined){
      return (
        <RecmdItem data = {rowData}/>
      );
    }else{
      return (
        <MProgressBar/>
      );
    }
  }

  getData(page: number){
    fetch(reqUrl + "&pageNo=" + page)
    .then((response) => response.json())
    .then((responseData) => {
      if(responseData.code == 200){
        currentPage = responseData.pageNo;
        if(responseData.pageNo === 1){
          dataList = responseData.list;
          totalPage = Math.ceil(responseData.total / responseData.pageCount)
        }else{
          dataList = dataList.concat(responseData.list);
        }
        let isNeedLoading = true;
        let isRefresh = false;
        if(currentPage === totalPage){
          isNeedLoading = false;
        }
        if(this.state.refreshing){
          isRefresh = false;
        }
        this.setState({
          lvDataSource: lv_dataSource.cloneWithRows(dataList),
          needLoadingFooter: isNeedLoading,
          refreshing: isRefresh,
        });
      }else{
        reject();
      }})
    .catch((error) => console.log(error))
    .done();
  }
  //.catch((error) => {
    // console.log(error);
  // })

  _renderHeader(){
    return(
      <View style = {{flex: 1, height: 185}}>
        <ViewPager
          dataSource={this.state.dataSource}
          renderPage={this._renderPage}
          isLoop={true}
          autoPlay={true}
          animation = {(animatedValue, toValue, gestureState) => {
            var velocity;
            if(gestureState) {
              velocity = Math.abs(gestureState.vx);
            } else {
              velocity = 0.5;
            }
            var baseDuration = 300;
            var duration = (velocity > 1) ? 1/velocity * baseDuration : baseDuration;
            return Animated.timing(animatedValue,
            {
              toValue: toValue,
              duration: duration,
              easing: Easing.out(Easing.exp)
            });
          }}>
        </ViewPager>
      </View>
    );
  }

  _renderFooter(){
    if(this.state.needLoadingFooter){
      return (
        <MProgressBar/>
      );
    }else{
      return (
        <View>
          <Text style = {styles.emptyfooter}>
            没有更多了~
          </Text>
        </View>
      );
    }
  }

  _onEndReached(){
    if(currentPage < totalPage){
      this.getData((currentPage + 1));
    }
  }

  render() {
    return (
      <View style = {{flex: 1}}>
        <RefreshControl style={{flex: 1, marginBottom: 5}}
          enabled={true}
          colors={['#3F51B5']}
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh.bind(this)}>
            <ListView style = {styles.listview}
              enableEmptySections = {true}
              dataSource = {this.state.lvDataSource}
              renderRow = {this._renderRow}
              renderHeader = {this._renderHeader.bind(this)}
              renderFooter = {this._renderFooter.bind(this)}
              onEndReached = {(event) => this._onEndReached()}
              onEndReachedThreshold = {40}
            />
        </RefreshControl>
        <Image
          style = {styles.avatar}
          />
      </View>
    );
  }
}//source = {this.state.userIcon}

const styles = StyleSheet.create({
  page: {
    height: 185,
    width: deviceWidth,
  },
  listview: {
    width: deviceWidth,
  },
  emptyfooter: {
    fontSize: 15,
    color: '#666666',
    flex: 1,
    margin: 5,
    textAlign: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    backgroundColor: '#3F51B5',
    top: Dimensions.get('window').height - 160,
    left: Dimensions.get('window').width - 80,
  },
})

export default Recommend;
