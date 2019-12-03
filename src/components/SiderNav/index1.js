import React from 'react'
import CustomMenu from "../CustomMenu/index";
import logo from '../SiderNav/images/logo.png'
const menus = [
//   {
//     title: '理论多选',
//     icon: 'home',
//     key: '/home'
//   },
//   {
//     title: '试卷',
//     icon: 'laptop',
//     key: '/home/general/button',
//   },
//   {
//     title: '用户列表',
//     icon: 'bars',
//     key: '/home/navigation/dropdown',
//   },
 
//   {
//     title: '判断题',
//     icon: 'desktop',
//     key: '/home/display/carousel',
//   },
  {
    title: '理论单选',
    icon: 'message',
    key: '/home/feedback/modal',
  },
  {
    title: '新增账号',
    icon: 'info-circle-o',
    key: '/home/about'
  },
  {
    title: '看图选择',
    icon: 'info-circle-o',
    key: '/home/see'
  }
]

class SiderNav extends React.Component {
  render() {
    return (
      <div style={styles.menu}>
        <div>
        <img src={logo} alt="" style={styles.logo} /> 
        </div>
        <CustomMenu menus={menus} style={styles.menu}  />
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    margin: '16px',
    icon:'message',
    marginLeft:'40%'
  },
  menu:{
    width:'200px',
    height:'100vh'
  }
}

export default SiderNav