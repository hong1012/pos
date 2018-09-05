/**
 * Created by hong on 2018/8/31.
 */
import './pos.less'
import React from 'react'
import {Button, Table} from 'antd'
import {columns, tbData} from './config'
import {withRouter} from 'react-router-dom'
import { Redirect  } from 'react-router';
import { apiCard  } from '../../utils/api';
import HeadBar from './head/bar'
import HeadPanel from './head/panel'
import FooterPanel from './footer/panel'
// import axios from 'axios'

class Pos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vip: {
        mobile: '18218579852',
        name: '宏gg',
        level: '普通会员',
        point: 30,
        money: 200,
      },
      dataSource: [],
      loading: false
    };
    this.pickUp = this.pickUp.bind(this);
    this.search = this.search.bind(this);
    this.getData = this.getData.bind(this);
    this.test = this.test.bind(this);
  }

  componentDidMount() {
    this.getData();
  }
  shouldComponentUpdate(nextProps,nextState){
    return true;
  }
  search() {
    apiCard.getAllStore().then(res => {
      console.log(res);
    });
    /*let url = 'https://douban.uieee.com/v2/book/1220562';
    axios.get(url)
      .then(function(response){
        console.log(response);
      })
      .catch(function(err){
        console.log(err);
      });*/
  }

  pickUp(e) {
/*    this.setState({
      loading: true
    });
    this.getData();*/
    this.props.history.push('/setting');
  }

  test() {
    let vip = this.state.vip;
    // Object.assign(vip, {name: '嘿嘿'});
    this.setState({
      vip: vip
    });
  }

  getData() {
    this.setState({
      loading: false,
      dataSource: tbData
    });
  }

  render() {
    var bpage=false;
    var bRedirect=false;
    if (bRedirect) {
      return (<Redirect to="/setting" />)
    } else
    return (
      <div className="pos-view">
        <HeadBar test={this.test} />
        <HeadPanel vip={this.state.vip} />
        <Table pagination={bpage}  rowKey="id" loading={this.state.loading}
          dataSource={this.state.dataSource} columns={columns} />
        <FooterPanel/>
      </div>
    )
  }
}

export default withRouter(Pos);

