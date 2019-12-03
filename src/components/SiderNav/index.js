import React from 'react'
import CustomMenu from "../CustomMenu/index";
import logo from '../SiderNav/images/logo.png'
const menus = [
    
  {
    title: '用户列表',
    icon: 'bars',
    key: '/home/navigation/dropdown',
  },
  {
    title: '新增账号',
    icon: 'plus',
    key: '/home/about'
  },
  {
    title: '理论多选',
    icon: 'number',
    key: '/home1'
  },
  {
    title: '理论单选',
    icon: 'select',
    key: '/home/feedback/modal',
  },

  {
    title: '看图选择',
    icon: 'area-chart',
    key: '/home/see'
  },
  {
    title: '判断题',
    icon: 'check',
    key: '/home/display/carousel',
  },
  {
    title: '简答题',
    icon: 'box-plot',
    key: '/home/jianda',
  },

  {
    title: '自选题',
    icon: 'area-chart',
    key: '/home/ktjd'
  },
  
  // {
  //   title: '工艺分析',
  //   icon: 'calendar',
  //   key: '/home/gyfx'
  // },
  // {
  //   title: '缺陷特征分析',
  //   icon: 'profile',
  //   key: '/home/tzfx'
  // },
  {
    title: '抽题规则',
    icon: 'info-circle-o',
    key: '/home/setting'
  },
  {
    title: '信息修改',
    icon: 'edit',
    key: '/home/change'
  },
  {
    title: '考试记录',
    icon: 'file-markdown',
    key: '/home/trecord'
  },
  {
    title: '试题列表',
    icon: 'schedule',
    key: '/home/sjlb'
  },
  {
    title: '模拟操作成绩',
    icon: 'code',
    key: '/home/mncz'
  },
  {
    title: '成绩分析',
    icon: 'code',
    key: '/home/mncz1'
  }
]

class SiderNav extends React.Component {
  constructor(props) {
    super(props);
    let usertype = localStorage.getItem('usertype');
    this.state = {
      usertype: usertype
    }
  }

  componentDidMount(){
  }

  getMenuData () {
    let {usertype} = this.state;
    if (usertype == 'student') {
      return [
        {
          title: '试卷',
          icon: 'form',
          key: '/home/general/button',
        },
        {
          title: '信息修改',
          icon: 'edit',
          key: '/home/change'
        },
        {
          title: '考试记录',
          icon: 'schedule',
          key: '/home/record'
        },
        
        // {
        //   title: '信息修改',
        //   icon: 'edit',
        //   key: '/home/change'
        // },
        // {
        //   title: '考试记录',
        //   icon: 'schedule',
        //   key: '/home/trecord'
        // }
      ]
    }
    if (usertype == 'admin') {
      return menus;
    }
  }


  render() {
    let menuData = this.getMenuData();
    return (
      <div style={styles.menu}>
        <div style={styles.logo1}>
        <img src={logo} alt="" style={styles.logo} />
        {/* <span style={{color:"#fff"}}>茗橙智能</span> */}
        </div>
        <CustomMenu menus={menuData}   />
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    margin: '16px',
    marginLeft:'40%',
  },
  logo1:{
    height: '64px',
    width:'100%',
    // background:'red',
    borderBottom:'2px solid #FFD700',
    borderRight:'2px solid #FFD700'
  },
  menu:{
    width:'200px',
    height:'2000px',
    overflow:'hidden',
    position:'fixed',
    background:'#8FBC8B',
  }
}

export default SiderNav