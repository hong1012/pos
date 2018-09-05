/**
 * Created by hong on 2018/8/31.
 */
import React from 'react'
import { Button, Menu, Dropdown, Icon } from 'antd';

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.pickUp = this.pickUp.bind(this);
  }

  componentDidMount() {
  }

  pickUp(e) {
    this.props.test();
  }

  handleMenuClick(e) {
    console.log('click', e);
  }

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="source">源单退货</Menu.Item>
        <Menu.Item key="nosource">无源单</Menu.Item>
      </Menu>
    );
    return (
      <div className="head-bar">
        <Button type="ghost" onClick={this.pickUp}>挂单</Button>
        <Button type="ghost" >清空商品</Button>
        <Button type="ghost" >选取会员</Button>
        <Button type="ghost" >选取客户</Button>
        <div className="btn-right">
          <Button type="ghost" >打印</Button>
          <Button type="ghost" >打印机设置</Button>
          <Dropdown overlay={menu}>
            <Button>
            退货 <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
      </div>
    )
  }
}

export default Bar;

