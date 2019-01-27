import React, {Component} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  View,
  Platform
} from 'react-native';
import { getImageCode } from '../../services/user';
import { connect } from 'react-redux';


@connect(({ user }) => ({ user }))
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsName: '蔡秋月'
    };
  }

  componentWillMount() {
    getImageCode().then((response) =>{
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  handleClick = () => {
    this.props.dispatch({
      type: 'user/setUserName',
      data: '罗权'
    });
  };

  handChangeText = (value) => {
    const {goodsName} = this.state;
    console.log(Platform);
    if(goodsName === value) {
      return;
    }
    this.setState({
      goodsName: value
    });
  };

  render() {
    console.log(this.props);
    return (
        <View style={{}}>
          <View style={{marginTop: 50}}>
            <TextInput
                placeholder={'请输入货号名'}
                value={this.state.goodsName}
                style={{minWidth:'100%',padding:10,backgroundColor:"#fff",borderRadius:5,borderWidth: 1,borderColor:"#f0f0f0"}}
                underlineColorAndroid="transparent"
                onChangeText={this.handChangeText}
            />
          </View>
          <View style={{flexDirection: 'row',padding:10}}>
            <View style={{flex: 1,height: 100,borderColor:"#f0f0f0",borderWidth:1 }}></View>
            <View style={{flex: 3,paddingLeft: 10,paddingRight: 10}}>
              <Text>NIKE(耐克) u nk perf ltwt qy 3rp</Text>
              <Text style={{color:"grey",marginTop:5}}>介绍:NIKE(耐克) u nk perf ltwt qy 3rp</Text>

              <View style={{flexDirection:"row",marginTop:10}}>
                <View style={styles.qw}><Text style={{color:"#409eff"}}>当天反馈</Text></View>
                <View style={styles.qw}><Text style={{color:"#409eff"}}>配货率80%</Text></View>
                <View style={styles.qw}><Text style={{color:"#409eff"}}>三天发货</Text></View>
              </View>

              <View style={{flexDirection:"row",marginTop:5}}>
                <View style={styles.as}><Text style={{fontSize:22,color:"orange"}}>10</Text></View>
                <View style={[styles.as,{marginRight:30}]}><Text style={{color:"grey",textDecorationLine:"line-through"}}>100</Text></View>
                <View style={styles.as}><Text>北京渠道</Text></View>
              </View>

            </View>

          </View>

          <View style={{padding:10,flexDirection:"row",justifyContent: "space-around",flexWrap: "wrap"}}>
            <View style={styles.er}>
              <View style={styles.flex2}><Text>系列</Text></View>
              <View style={styles.flex3}><Text  style={styles.teCor}>男训系列</Text></View>
            </View>

            <View style={styles.er}>
              <View style={styles.flex2}><Text>类型</Text></View>
              <View style={styles.flex3}><Text  style={styles.teCor}>男训系列</Text></View>
            </View>

            <View style={styles.er}>
              <View style={styles.flex2}><Text>性别</Text></View>
              <View style={styles.flex3}><Text  style={styles.teCor}>男训系列</Text></View>
            </View>

            <View style={styles.er}>
              <View style={styles.flex2}><Text>类目</Text></View>
              <View style={styles.flex3}><Text  style={styles.teCor}>男训系列</Text></View>
            </View>

            <View style={styles.er}>
              <View style={styles.flex2}><Text>上市日期</Text></View>
              <View style={styles.flex3}><Text  style={styles.teCor}>男训系列</Text></View>
            </View>

            <View style={styles.er}>
              <View style={styles.flex2}><Text>颜色</Text></View>
              <View style={styles.flex3}><Text  style={styles.teCor}>男训系列</Text></View>
            </View>
          </View>

          <View style={{padding:10}}>
            <Text>型号</Text>
            <View style={{flexDirection:"row",flexWrap: "wrap"}}>

              <View style={{marginRight:10}}>
                <View style={{width:50,padding:5,alignItems: "center",justifyContent:'center'}}><Text>有货</Text></View>
                <View style={{width:50,padding:5,alignItems: "center",justifyContent:'center',backgroundColor:"#f0f0f0",borderRadius:3}}><Text>s</Text></View>
              </View>

              <View>
                <View style={{width:50,padding:5,alignItems: "center",justifyContent:'center'}}><Text>没货</Text></View>
                <View style={{width:50,padding:5,alignItems: "center",justifyContent:'center',backgroundColor:"#f0f0f0",borderRadius:3}}><Text style={{color:"grey"}}>s</Text></View>
              </View>

            </View>

          </View>

          <View style={{padding:10}}>
            <Text style={{fontWeight: 'bold',marginBottom: 5}}>下单须知：</Text>
            <Text style={{color:"grey",marginBottom: 5}}>拒签快递扣来回邮费，禁止取消时间：11点</Text>
            <Text style={{color:"grey",marginBottom: 5}}>出物流时间，当天，加固盒</Text>
          </View>

          <TouchableHighlight onPress={this.handleClick} style={{padding:10,backgroundColor:"orange",borderRadius:5,alignItems:"center",justifyContent:"center",margin: 10}}>
            <Text style={{color:"#fff"}}>确定下单</Text>
          </TouchableHighlight>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  qw:{marginRight:10,backgroundColor:'rgba(64,158,255,.1)',padding:5,borderColor:"rgba(64,158,255,.2)",borderRadius:4},
  as:{justifyContent: "center",alignItems:"center",marginRight:10},
  er:{width: "50%",flexDirection:"row",marginTop:10},
  flex2:{flex:2},
  flex3:{flex:3},
  teCor:{color:"grey"}

});
