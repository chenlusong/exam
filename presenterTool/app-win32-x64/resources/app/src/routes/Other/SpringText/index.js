import React from 'react'
import {notification} from 'antd'

class SpringText extends React.Component{
  componentDidMount(){
    this.createText()
    notification.open({
      description: '鼠标移入到文字上，或者鼠标点击屏幕',
      style:{marginTop:64}
    });

  }
  componentWillUnmount(){
    window.cancelAnimationFrame(this.myReq)
    //绑定到DOM、window上的事件需要自己手动销毁吗
    notification.destroy()
  }
 
  render(){
    return (
      <div style={styles.bg}>
        <canvas id="spring-text" style={styles.bg}/>
      </div>
    )
  }
}
const styles = {
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 'calc(100vh - 64px)',
  },
}
export default SpringText