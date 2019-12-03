import React from 'react'
import {Card,Col,Row,Button,Tooltip,notification,Select} from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'

class NotificationDemo extends React.Component{
  state = {
    placement:''
  }
  openNotification(obj){
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      ...obj
    })
  }
  openNotificationType(type){
    notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  }
  customNotification(){
    const key = Date.now()
    notification.open({
      message: 'Notification Title',
      description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      key,
      btn:<Button type="primary" onClick={() => notification.close(key)}>Confirm</Button>
    })
  }
  render(){
    const placement = this.state.placement
    const cardContent = ` 在系统四个角显示通知提醒信息。经常用于以下情况：
          <ul class="card-ul">
            <li>较为复杂的通知内容</li>
            <li>带有交互的通知，给出用户下一步的行动点</li>
            <li>系统主动推送</li>
          </ul>`
    return (
      <div>
      1
      </div>
    )
  }
}

export default NotificationDemo