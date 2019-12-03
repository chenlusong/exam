import React from 'react'
import CustomMenu from "../CustomMenu/index";

const menus = [
  {
    title: '首页',
    icon: 'home',
    key: '/home'
  },
  {
    title: '基本组件',
    icon: 'laptop',
    key: '/home/general/button',
  },
  {
    title: '导航组件',
    icon: 'bars',
    key: '/home/navigation/dropdown',
  },
 
  {
    title: '显示组件',
    icon: 'desktop',
    key: '/home/display/carousel',
  },
  {
    title: '反馈组件',
    icon: 'message',
    key: '/home/feedback/modal',
  },
  {
    title: '关于',
    icon: 'info-circle-o',
    key: '/home/about'
  }
]


class SiderNav extends React.Component {
  render() {

    return (
      <div style={{height: '100vh',overflowY:'scroll'}}>
        <div style={styles.logo}>
          111
        </div>
        <CustomMenu menus={menus}/>
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px',
    icon:'message'
  }
}

export default SiderNav