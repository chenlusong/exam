import React from 'react'
import { withRouter, Switch, Redirect } from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'
import PrivateRoute from '../PrivateRoute'

const Home = LoadableComponent(()=>import('../../routes/Home/index'))  //参数一定要是函数，否则不会懒加载，只会代码拆分
const Home1 = LoadableComponent(()=>import('../../routes/Home1/index'))
//基本组件Demo
const ButtonDemo = LoadableComponent(()=>import('../../routes/General/ButtonDemo/index'))
const IconDemo = LoadableComponent(()=>import('../../routes/General/IconDemo/index'))
const Change =   LoadableComponent(()=>import('../../routes/Change/index'))
const Record =   LoadableComponent(()=>import('../../routes/Record/index'))
const Trecord =   LoadableComponent(()=>import('../../routes/Trecord/index'))
//导航组件Demo
const DropdownDemo = LoadableComponent(()=>import('../../routes/Navigation/DropdownDemo/index'))
const MenuDemo = LoadableComponent(()=>import('../../routes/Navigation/MenuDemo/index'))
const StepsDemo = LoadableComponent(()=>import('../../routes/Navigation/StepsDemo/index'))

//输入组件Demo
const FormDemo1 = LoadableComponent(()=>import('../../routes/Entry/FormDemo/FormDemo1'))
const FormDemo2 = LoadableComponent(()=>import('../../routes/Entry/FormDemo/FormDemo2'))
const UploadDemo = LoadableComponent(()=>import('../../routes/Entry/UploadDemo/index'))

//显示组件Demo
const CarouselDemo = LoadableComponent(()=>import('../../routes/Display/CarouselDemo/index'))
const CollapseDemo = LoadableComponent(()=>import('../../routes/Display/CollapseDemo/index'))
const ListDemo = LoadableComponent(()=>import('../../routes/Display/ListDemo/index'))
const TableDemo = LoadableComponent(()=>import('../../routes/Display/TableDemo/index'))
const TabsDemo = LoadableComponent(()=>import('../../routes/Display/TabsDemo/index'))

//反馈组件Demo
const SpinDemo = LoadableComponent(()=>import('../../routes/Feedback/SpinDemo/index'))
const ModalDemo = LoadableComponent(()=>import('../../routes/Feedback/ModalDemo/index'))
const NotificationDemo = LoadableComponent(()=>import('../../routes/Feedback/NotificationDemo/index'))

//其它
const AnimationDemo = LoadableComponent(()=>import('../../routes/Other/AnimationDemo/index'))
const GalleryDemo = LoadableComponent(()=>import('../../routes/Other/GalleryDemo/index'))
const DraftDemo = LoadableComponent(()=>import('../../routes/Other/DraftDemo/index'))
const ChartDemo = LoadableComponent(()=>import('../../routes/Other/ChartDemo/index'))
const LoadingDemo = LoadableComponent(()=>import('../../routes/Other/LoadingDemo/index'))
const ErrorPage = LoadableComponent(()=>import('../../routes/Other/ErrorPage/index'))
const SpringText = LoadableComponent(()=>import('../../routes/Other/SpringText/index'))

//关于
const About = LoadableComponent(()=>import('../../routes/About/index'))
const See = LoadableComponent(()=>import('../../routes/See/index'))
const xiangqing = LoadableComponent(()=>import('../../routes/Record/xiangqing'))
const txiangqing = LoadableComponent(()=>import('../../routes/Trecord/txiangqing'))
const Setting = LoadableComponent(()=>import('../../routes/Setting/index'))
const Jianda = LoadableComponent(()=>import('../../routes/Jianda/index'))
const Gyfx = LoadableComponent(()=>import('../../routes/Gyfx/index'))
const Tzfx = LoadableComponent(()=>import('../../routes/Tzfx/index'))
const Ktjd = LoadableComponent(()=>import('../../routes/Ktjd/index'))
const Sjlb = LoadableComponent(()=>import('../../routes/Sjlb/index'))
const Mncz = LoadableComponent(()=>import('../../routes/Mncz/index'))
const Mncz1 = LoadableComponent(()=>import('../../routes/Mncz1/index'))
@withRouter
class ContentMain extends React.Component {
  render () {
    return (
      <div style={{padding: 16, position: 'relative'}}>
        <Switch>
          <PrivateRoute exact path='/home' component={Home}/>
          <PrivateRoute exact path='/home1' component={Home1}/>
          <PrivateRoute exact path='/home/general/button' component={ButtonDemo}/>
          <PrivateRoute exact path='/home/general/icon' component={IconDemo}/>

          <PrivateRoute exact path='/home/navigation/dropdown' component={DropdownDemo}/>
          <PrivateRoute exact path='/home/navigation/menu' component={MenuDemo}/>
          <PrivateRoute exact path='/home/navigation/steps' component={StepsDemo}/>

          <PrivateRoute exact path='/home/entry/form/basic-form' component={FormDemo1}/>
          <PrivateRoute exact path='/home/entry/form/step-form' component={FormDemo2}/>
          <PrivateRoute exact path='/home/entry/upload' component={UploadDemo}/>

          <PrivateRoute exact path='/home/display/carousel' component={CarouselDemo}/>
          <PrivateRoute exact path='/home/display/collapse' component={CollapseDemo}/>
          <PrivateRoute exact path='/home/display/list' component={ListDemo}/>
          <PrivateRoute exact path='/home/display/table' component={TableDemo}/>
          <PrivateRoute exact path='/home/display/tabs' component={TabsDemo}/>

          <PrivateRoute exact path='/home/feedback/modal' component={ModalDemo}/>
          <PrivateRoute exact path='/home/feedback/notification' component={NotificationDemo}/>
          <PrivateRoute exact path='/home/feedback/spin' component={SpinDemo}/>
          <PrivateRoute exact path='/home/other/animation' component={AnimationDemo}/>
          <PrivateRoute exact path='/home/other/gallery' component={GalleryDemo}/>
          <PrivateRoute exact path='/home/other/draft' component={DraftDemo}/>
          <PrivateRoute exact path='/home/other/chart' component={ChartDemo}/>
          <PrivateRoute exact path='/home/other/loading' component={LoadingDemo}/>
          <PrivateRoute exact path='/home/other/404' component={ErrorPage}/>
          <PrivateRoute exact path='/home/other/springText' component={SpringText}/>

          <PrivateRoute exact path='/home/about' component={About}/>
          <PrivateRoute exact path='/home/see' component={See}/>
          <PrivateRoute exact path='/home/setting' component={Setting}/>
          <PrivateRoute exact path='/home/change' component={Change}/>
          <PrivateRoute exact path='/home/record/xiangqing' component={xiangqing}/>
          <PrivateRoute exact path='/home/trecord/txiangqing' component={txiangqing}/>
          <PrivateRoute exact path='/home/record' component={Record}/>
          <PrivateRoute exact path='/home/trecord' component={Trecord}/>
          <PrivateRoute exact path='/home/Jianda' component={Jianda}/>
          <PrivateRoute exact path='/home/Gyfx' component={Gyfx}/>
          <PrivateRoute exact path='/home/Tzfx' component={Tzfx}/>
          <PrivateRoute exact path='/home/Ktjd' component={Ktjd}/>
          <PrivateRoute exact path='/home/Sjlb' component={Sjlb}/>
          <PrivateRoute exact path='/home/Mncz' component={Mncz}/>
          <PrivateRoute exact path='/home/Mncz1' component={Mncz1}/>
          <Redirect exact from='/' to='/home'/>
          
        </Switch>
      </div>
    )
  }
}

export default ContentMain