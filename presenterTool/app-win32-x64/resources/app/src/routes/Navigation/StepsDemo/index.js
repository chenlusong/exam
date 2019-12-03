import React from 'react'
import {Card, Col, Row, Radio, Icon, Button, Steps, message,BackTop} from 'antd'
import CustomBreadcrumb from "../../../components/CustomBreadcrumb/index";
import TypingCard from '../../../components/TypingCard'

const Step = Steps.Step

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  }];

class StepsDemo extends React.Component {
  state = {
    size: 'default',
    current: 0
  }

  prev() {
    const current = this.state.current - 1;
    if (current === -1) {
      return
    }
    this.setState({current});
  }

  render() {
    const {size, current} = this.state
    const cardContent = '当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务，引导用户按照流程完成任务的导航条'
    return (
      <div>
      1
      </div>
    )
  }
}

const styles = {
  stepsContent: {
    minHeight: '200px',
    margin: '16px 0',
    paddingTop: '80px',
    border: '1px dashed #e9e9e9',
    borderRadius: '6px',
    backgroundColor: '#fafafa',
    textAlign: 'center',
  }

}


export default StepsDemo