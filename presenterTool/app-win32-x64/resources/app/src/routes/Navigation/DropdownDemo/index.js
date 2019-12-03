import React from 'react'
import {Card, Menu, Row, Col, Dropdown, Icon, message, Button} from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'


class DropdownDemo extends React.Component {
  handleMenuClick(e) {
    message.info(`Click on menu ${e.key} item.`)
  }

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    )
    const menu2 = (
      <Menu>
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
        <Menu.SubMenu title="sub menu">
          <Menu.Item>3rd menu item</Menu.Item>
          <Menu.Item>4th menu item</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title="disabled sub menu" disabled>
          <Menu.Item>5d menu item</Menu.Item>
          <Menu.Item>6th menu item</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    )
    const cardContent = '当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。'
    return (
      <div>
      1
      </div>
    )
  }
}

export default DropdownDemo