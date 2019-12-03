import React from 'react'
import { randomNum, calculateWidth } from '../../utils/utils'
import { withRouter} from 'react-router-dom'
import { inject, observer } from 'mobx-react/index'
import { Form, Input, Row, Col, Modal,message } from 'antd'
import PromptBox from '../../components/PromptBox'
import $ from 'jquery'
import '../../../src/src/config'
@withRouter @inject('appStore') @observer @Form.create()
class LoginForm extends React.Component {
  state = {
    focusItem: -1,   //保存当前聚焦的input
    code2: '',
    visible: false ,        //验证码
    id:''
  }

  componentDidMount () {
     this.createCode2()
     $(".glyyz").css("display","none")
     
  
  }
  componentDidUpdate(){
    this.createCode2=()=>{
      return false
    }
  }

  /**
   * 生成验证码
   */
  createCode2 = () => {
    const ctx = this.canvas.getContext('2d')
    const chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let code2 = ''
    ctx.clearRect(0, 0, 80, 39)
    for (let i = 0; i < 4; i++) {
      const char = chars[randomNum(0, 57)]
      code2 += char
      ctx.font = randomNum(20, 25) + 'px SimHei'  //设置字体随机大小
      ctx.fillStyle = '#D3D7F7'
      ctx.textBaseline = 'middle'
      ctx.shadowOffsetX = randomNum(-3, 3)
      ctx.shadowOffsetY = randomNum(-3, 3)
      ctx.shadowBlur = randomNum(-3, 3)
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
      let x = 80 / 5 * (i + 1)
      let y = 39 / 2
      let deg = randomNum(-25, 25)
      /**设置旋转角度和坐标原点**/
      ctx.translate(x, y)
      ctx.rotate(deg * Math.PI / 180)
      ctx.fillText(char, 0, 0)
      /**恢复旋转角度和坐标原点**/
      ctx.rotate(-deg * Math.PI / 180)
      ctx.translate(-x, -y)
    }
    this.setState({
      code2
    })
  }
  loginSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      const account = values.account;
      const pwd = values.pwd;
      const url =global.constants.url
      if (!err) {
        $.ajax({
          url:`${url}`+`/index/login/studentlogin`,
          type:'post',
          dataType:'json',
          data:{account:account,pwd:pwd},
          success:(data)=>{
          if(data.code == 1 && this.state.code2.toUpperCase() == values.verification.toUpperCase()){
            message.success(data.info.tishi)
             this.props.appStore.toggleLogin(true, {username: values.username,'usertype':'student','userinfo':data.info.userinfo})
              this.props.history.push({pathname:'/home/general/button',state:{id:data.info.userinfo.id,baoguang:data.info.baoguang,baoguanginfo:data.info.baoguanginfo}});
              
            }else{
              message.error('验证码或账号密码错误');
            }
          }
        })
      }
    })
  }
  register = () => {
 
    this.props.form.resetFields(); 
    this.setState({
      visible: true,
    });
    
  }
  handleOk = e => {
    console.log(111)
    this.setState({
      visible: false,
    });
    this.props.form.validateFields((err, values) => {
      if (!err) {
    const url =global.constants.url
    $.ajax({
      url:`${url}`+`/index/login/secretkey`,
      dataType:'json',
      type:'post',
      data:{key:values.key},
      success:(data)=>{
      
        if(data.code == 1){
          $(".glyyz").css("display","block")
          $(".xsyz").css("display","none")
          message.success(data.info);
          this.props.switchShowBox('login')
          setTimeout(() => this.props.form.resetFields(), 500)
        }
        else{
          $(".glyyz").css("display","none")
          $(".xsyz").css("display","block")
          message.error(data.info)
        }
      }
    })
      }
    });
  };
  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  render () {
   
    const {getFieldDecorator, getFieldError} = this.props.form
    const {focusItem, code2} = this.state
    return (
      <div className={this.props.className} >
        <h3 className='title'>学生登录</h3>
        <Form onSubmit={this.loginSubmit}>
        <Form.Item>
          {getFieldDecorator('account', {
          })(
            <Input
              style={{width:'250px'}}
              type="text"
              placeholder="用户名"
              autoComplete="off"
              addonBefore={<span className='iconfont icon-User' style={focusItem === 0 ? styles.focus : {}}/>}/>
          )}
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('pwd', {
          })(
            <Input
              style={{width:'250px'}}
              type="password"
              placeholder="密码"
              autoComplete="off"
              addonBefore={<span className='iconfont icon-suo1' style={focusItem === 0 ? styles.focus : {}}/>}/>
          )}
        </Form.Item>
        <Form.Item className="xsyz"  help={getFieldError('verification') &&
          <PromptBox className="xsyz" info={getFieldError('verification')} width={calculateWidth(getFieldError('verification'))}/>}>
            {getFieldDecorator('verification', {
              validateFirst: true,
              rules: [
                {
                  validator: (rule, value, callback) => {
                  //  if (value.length >= 4 && code2.toUpperCase() !== value.toUpperCase()) {
                  //     callback('验证码错误')
                  //   }
                    callback()
                  }
                }
              ]
            })(
              <Row>
                <Col span={15}>
                  <Input
                    onFocus={() => this.setState({focusItem: 2})}
                    onBlur={() => this.setState({focusItem: -1})}
                    maxLength={4}
                    placeholder='验证码'
                    addonBefore={<span className='iconfont icon-securityCode-b'
                                       style={focusItem === 2 ? styles.focus : {}}/>}/>
                </Col>
                <Col span={9}>
                  <canvas onClick={this.createCode} width="80" height='39' ref={el => this.canvas = el}/>
                </Col>
              </Row>
            )}
          </Form.Item>
          <div className='bottom'>
            <input className='loginBtn' type="submit" value='登录'/>
            <span className='registerBtn' onClick={this.register}>管理员登录</span>
          </div>
          <Form.Item >
            <Modal
            title="密匙"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            {getFieldDecorator('key')(
              <Input
                style={{width:'400px'}}
                type="password"
                placeholder="请输入密匙"
              />,
            )}
         
          </Modal>
          
        </Form.Item>
        </Form>
        <div className='footer'>
          
        </div>
      </div>
    )
  }
}

const styles = {
  focus: {
    width: '20px',
    opacity: 1
  },
}

export default LoginForm