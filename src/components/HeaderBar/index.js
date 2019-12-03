import React from 'react'
import { Icon, Badge, Dropdown, Menu, Modal,Popconfirm,message} from 'antd'
import screenfull from 'screenfull'
import { inject, observer } from 'mobx-react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated } from '../../utils/Session'

//withRouter一定要写在前面，不然路由变化不会反映到props中去
@withRouter @inject('appStore') @observer
class HeaderBar extends React.Component {
  state = {
    icon: 'arrows-alt',
    count: 100,
    visible: false,
    avatar: require('./img/04.jpg')
  }

  componentDidMount () {
    screenfull.onchange(() => {
      this.setState({
        icon: screenfull.isFullscreen ? 'shrink' : 'arrows-alt'
      })
    })
  }
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
    this.props.appStore.toggleLogin(false)
    this.props.history.push(this.props.location.pathname),
    message.success("退出登录成功")
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  componentWillUnmount () {
    screenfull.off('change')
  }

  toggle = () => {
    this.props.onToggle()
  }
  screenfullToggle = () => {
    if (screenfull.enabled) {
      screenfull.toggle()
    }
  }
  logout = () => {
    this.setState({
      visible: true,
    });
    // this.props.appStore.toggleLogin(false)
    // this.props.history.push(this.props.location.pathname)
  }
  cancel(e) {
    console.log(e);
    message.error('Click on No');
  }
  render () {
    const {icon, count, visible, avatar} = this.state
    const {appStore, collapsed, location} = this.props
    // const notLogin = (
    //   <div>
    //     <Link to={{pathname: '/login', state: {from: location}}} style={{color: 'rgba(0, 0, 0, 0.65)'}}>登录</Link>&nbsp;
    //     <img src={require('../../assets/img/defaultUser.jpg')} alt=""/>
    //   </div>
    // )
    // const menu = (
    //   <Menu className='menu'>
    //     <Menu.ItemGroup className='menu-group'>
    //       {/* <Menu.Item>你好 - {isAuthenticated()}</Menu.Item>
    //       <Menu.Item>个人信息</Menu.Item> */}
    //       <Menu.Item><span onClick={this.logout}>退出登录</span></Menu.Item>
    //     </Menu.ItemGroup>
       
    //   </Menu>
    // )
    // const login = (
    //   <Dropdown overlay={menu}>
    //     <img onClick={() => this.setState({visible: true})} src={avatar} alt=""/>
    //   </Dropdown>
    // )
    return (
      <div id='headerbar' style={styles.logo}>
          {/* <Menu.Item>你好 - {isAuthenticated()}</Menu.Item>
          <Menu.Item>个人信息</Menu.Item> */}
         <a><span style={styles.wz} onClick={this.logout}  >退出登录</span></a>
         <Modal
          width='300px'
          height='200px'
          title="退出登录"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p style={{fontSize:'16px',textAlign:'center'}}>你确定退出登陆吗？</p>
          
        </Modal>
      </div>
      
    )
  }
}

const styles = {
  logo: {
  display:'block',
  // background:'#7FFFD4',
  // width:'120%',
  width:'100%',
  //marginLeft:'-5%',
  position:'fixed'
  },
  wz:{
   display:'block',
  //  float:'right',
   color:'#fff',
   marginLeft:'75%'
  }
}

export default HeaderBar