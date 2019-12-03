import React from 'react'
import {Card, Col, Row, Menu, Icon, Switch} from 'antd'
import CustomBreadcrumb from "../../../components/CustomBreadcrumb/index";
import TypingCard from '../../../components/TypingCard'

class MenuDemo extends React.Component {
  state = {
    openKey: '',
    theme: 'light',
    mode: 'horizontal'
  }

  changeTheme = (checked) => {
    this.setState({
      theme: checked ? 'dark' : 'light'
    })
  }
  changeMode = (checked) => {
    this.setState({
      mode: checked ? 'inline' : 'horizontal'
    })
  }

  render() {
    const cardContent = ' 导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。'
    return (
      <div>
        1
      </div>
    )
  }
}

const styles = {
  Item:{
    height:190,
    marginBottom:10,
    borderRadius: 3,
  }
}

export default MenuDemo