import React from 'react'
import {Card, Button, Modal, Tooltip} from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb'
import TypingCard from '../../../components/TypingCard'

class ModalDemo extends React.Component {
  state = {
    visible: false,
    visible2: false,
    visible3: false,
    visible4: false,
    visible5: false,
    ModalText: '显示对话框的内容',
    confirmLoading: false
  }

  closeModal(a) {
    this.setState({
      [a]: false
    })
  }

  asynModalOnOk = (a) => {
    this.setState({
      confirmLoading: true,
      ModalText: '对话框将在2秒后关闭'
    })
    setTimeout(() => this.setState({
      [a]: false,
      confirmLoading: false,
      ModalText: '显示对话框的内容'
    }), 2000)
  }
  showConfirm = () => {
    Modal.confirm({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
    })
  }
  showDeleteConfirm = () => {
    Modal.confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  showModalType = (type) => {
    switch (type) {
      case 'info':
        Modal.info({
          title: 'This is a notification message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          )
        })
        break;
      case 'success':
        Modal.success({
          title: 'This is a success message',
          content: 'some messages...some messages...',
        })
        break;
      case 'error':
        Modal.error({
          title: 'This is an error message',
          content: 'some messages...some messages...',
        })
        break;
      default:
        Modal.warning({
          title: 'This is a warning message',
          content: 'some messages...some messages...',
        })
        break;
    }
  }

  render() {
    const {visible, visible2, visible3, visible4, visible5, ModalText, confirmLoading} = this.state
    const cardContent = ` 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。<br/>
          另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 antd.Modal.confirm() 等方法。`
    return (
      <div>
      1
      </div>
    )
  }
}

// const styles = {
//   modalVertical: {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%,-50%)'
//   }
// }

export default ModalDemo