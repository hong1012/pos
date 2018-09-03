/**
 * Created by hong on 2018/8/30.
 */
import React from 'react';
import {Link} from 'react-router-dom'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class Menus extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 150 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['retail']}
        mode="inline"
      >
        <SubMenu key="retail" title={<span><Icon type="clound-o" /><span>零售管理</span></span>}>
            <Menu.Item key="1"><Link to="/test">POS开单</Link></Menu.Item>
            <Menu.Item key="2">退货</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Menus