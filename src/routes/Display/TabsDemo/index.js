import React from 'react'
import {Card, Col, Row, Icon, Tabs, message, Radio,BackTop} from 'antd'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'

const TabPane = Tabs.TabPane
const panes = [
  {title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1'},
  {title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2'},
];
let newTabIndex = 0

class TabsDemo extends React.Component {
  state = {
    mode: 'top',
    size: 'default',
    activeKey: panes[0].key,
    panes,
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${++newTabIndex}`;
    panes.push({
      title: activeKey,
      content: `New Tab Pane : ${activeKey}`,
      key: activeKey
    })
    this.setState({
      panes,
      activeKey
    })

  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    if(panes.length === 1){
      panes[0].closable = false
    }
    this.setState({panes, activeKey});

  }

  render() {
    const {mode, size, activeKey, panes} = this.state
    const cardContent = `提供平级的区域将大块内容进行收纳和展现，保持界面整洁。<br/>
          Ant Design 依次提供了三级选项卡，分别用于不同的场景。
          <ul class="card-ul">
            <li>卡片式的页签，提供可关闭的样式，常用于容器顶部</li>
            <li>标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs</li>
            <li>RadioButton 可作为更次级的页签来使用</li>
          </ul>`
    return (
      <div>
       111
      </div>
    )
  }
}

export default TabsDemo