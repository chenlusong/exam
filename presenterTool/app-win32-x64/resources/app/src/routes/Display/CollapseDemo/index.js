import React from 'react'
import {Card, Col, Row, Collapse,BackTop} from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'

const Panel = Collapse.Panel

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const text2 = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  </p>
);

class CollapseDemo extends React.Component {
  render(){
    const cardContent = ` <ul class="card-ul">
            <li>对复杂区域进行分组和隐藏，保持页面的整洁</li>
            <li>手风琴 是一种特殊的折叠面板，只允许单个内容区域展开</li>
          </ul>`
    return (
      <div>
     1
      </div>
    )
  }
}

const styles = {
  colItem: {
    minHeight:500,
    borderRadius: 3,
    margin: '10px 0'
  },
  customPanelStyle:{
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden'
  }
}

export default CollapseDemo