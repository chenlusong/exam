import React from 'react'
import {Card, Col, Row, Spin, Icon, Alert, Switch, Button} from 'antd'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'

class SpinDemo extends React.Component {
  state = {
    loading: false,
    loading2: false
  }
  componentWillMount(){
    //页面路由加载的进度条，React有没有方法可以使路由加载自动调用这个方法，避免在每个页面都设置
    //vue有方法可以实现https://segmentfault.com/q/1010000006653683/a-1020000007724198
    NProgress.start()
  }
  componentDidMount(){
    NProgress.done()
  }
  componentWillUnmount(){
    //这里是防止下面调用NProgress.start()方法后离开组件后还未关闭
    NProgress.done()
  }
  NProgressStart = () => {
    NProgress.start()
    this.setState({
      loading2: true
    })
  }
  NProgressDone = () => {
    NProgress.done()
    this.setState({
      loading2: false
    })
  }

  render() {
    const loading2 = this.state.loading2
    return (
      <div>
       1
      </div>
    )
  }
}

export default SpinDemo