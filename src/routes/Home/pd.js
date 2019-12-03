import React from 'react'
import {Button,  Card, Radio, message,Form,Input,} from 'antd'
import '../ButtonDemo/../../../../src/src/config'
import $ from 'jquery'

const RadioGroup = Radio.Group;
const { TextArea } = Input;
@Form.create()
class ButtonDemo extends React.Component {
  constructor(props) {
    super(props)
    let userid = JSON.parse(localStorage.getItem('userinfo')).id;
    this.state = {
      size: 'default',
      value: 1,
      data:'',
      pd1:'',
      pdwenti:'',
      // 判断题
      panduanArr: [],
      lilundanArr:[],
      lilunxuanArr:[],
      lilunduoArr:[],
      kantuArr:[]
    }
  }
componentDidMount(){
  let userid = JSON.parse(localStorage.getItem('userinfo')).id;
  const url =global.constants.url
  $.ajax({
    
    url: `${url}`+'/index/addpaper/extractpaper',
    data:{id:userid},
    dataType:'json',
    type:'get',
    success:(data)=>{
      const panduan = data.info.panduan
      const lilundan = data.info .lilundan
      const lilunduo = data.info.lilunduo
      const kantu = data.info.kantu
      
      this.setState({
        panduanArr: panduan,
        lilundanArr:lilundan,
        lilunduoArr:lilunduo,
        kantuArr:kantu,
      })
    }
  })
}
  onChange = e => {
    this.setState({
      // value: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values)
      if (!err) {
        const url =global.constants.url
        $.ajax({
          url:`${url}`+'/index/addpaper/addpaper',
          data:values,
          type:'post',
          dataType:'json',
          success:(data)=>{
            console.log(data)
          }
        })
      }
    });
  };

  getPanduanListHtml () {
    let {panduanArr,lilundanArr} = this.state;
    let { getFieldDecorator } = this.props.form; 
    const that = this;
    return panduanArr.map(function(item, index){
     return ( 
     <Card style={{height:'10px;'}}>
    <Form.Item  layout="inline">
          {getFieldDecorator(`pd_${item.id}`,{ initialValue: null})(
              <div>
              <span >{item.wenti}</span> 
                <RadioGroup onChange={that.onChange} >
              <Radio value={1}>对</Radio>
              <Radio value={0}>错</Radio>
            </RadioGroup>
                </div>
          )}
        </Form.Item>
     </Card>);
    }); 
  }
  lilundanListHtml () {
    let { getFieldDecorator } = this.props.form; 
    let {lilundanArr} = this.state;
    const that = this;
    const xuanxiang = []
    return lilundanArr.map(function(item, index){
     return ( 
     <Card style={{height:'10px;'}}>
        <Form.Item  layout="inline"   >
          {getFieldDecorator(`lilundanxuan_${item.id}`,{ initialValue: null})(
               <div>
              <div>
          </div>
          <p>{item.wenti}</p>
          <div>
          

        {item.count.map(function(item,index){
          return (
           <div>
              <RadioGroup onChange={that.onChange}>
        <Radio style={{display: 'block',
          height: '30px',
          lineHeight: '30px',}} value={item}
        value = {item}
        type="radio"
          >
         {item}
        </Radio>
        
       
      </RadioGroup>
           </div>
          )
          
  })}
        
      
          </div>
        </div>
          
          )}
        </Form.Item>
     </Card>);
    });  
  }
  lilunduoListHtml () {
    let { getFieldDecorator } = this.props.form; 
    let {lilunduoArr} = this.state;
    const that = this;
    const xuanxiang = []
    return lilunduoArr.map(function(item, index){
     return ( 
     <Card style={{height:'10px;'}}>
        <Form.Item  layout="inline"   >
          {getFieldDecorator(`lilunduoxuan_${item.id}`,{ initialValue: null})(
               <div>
              <div>
          </div>
          <p>{item.wenti}</p>
          <div>
          

        {item.count.map(function(item,index){
          return (
           <div>
        <RadioGroup onChange={that.onChange}>
        <Radio style={{display: 'block',
          height: '30px',
          lineHeight: '30px',}} value={item}
          value = {item}
          
          >
         {item}
        </Radio>
        
       
      </RadioGroup>
           </div>
          )
          
  })}
        
      
          </div>
        </div>
          
          )}
        </Form.Item>
     </Card>);
    }); 
  }


  kantuHtmlList(){
    let { getFieldDecorator } = this.props.form; 
    let {kantuArr} = this.state;
    const that = this;
    const xuanxiang = []
    return kantuArr.map(function(item, index){
     return ( 
     <Card style={{height:'10px;'}}>
        <Form.Item  layout="inline"   >
          {getFieldDecorator(`kantuxuanze${item.id}`,{ initialValue: null})(
               <div>
              <div>
              <img src={item.url} alt="" style={{width:'100%',height:'100%'}} /> 
          </div>
          <p>{item.wenti}</p>
          <div>
        {item.count.map(function(item,index){
          return (
           <div>
              
        <Radio style={{display: 'block',
          height: '30px',
          lineHeight: '30px',}} value={item}
        value = {item}
        type="radio"
          >
         {item}
        </Radio>
        
       
     
           </div>
          )
          
  })}
        
      
          </div>
        </div>
          
          )}
        </Form.Item>
     </Card>);
    }); 
  }
  render() {
    let { getFieldDecorator } = this.props.form; 
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const checkboxstyle ={
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    }
    const {data,pd1,pdwenti} = this.state
    let panduanHtml = this.getPanduanListHtml();
    let lilundanListHtml=this.lilundanListHtml();
    let lilunduoListHtml = this.lilunduoListHtml();
    let kantuHtmlList = this.kantuHtmlList();
    return (
      <div>
      {/* <Card>
        <h1 style={{textAlign:'center',fontSize:'20px',}}>2016年第一次考试</h1>
      </Card> */}
      <Form layout="inline" onSubmit={this.handleSubmit}>
      <h1 style={{fontSize:'20px',marginTop:'20px'}}>判断题</h1>
      {panduanHtml}

        <h1 style={{fontSize:'20px',marginTop:'20px'}}>理论单选题</h1>
       {lilundanListHtml}
        <h1 style={{fontSize:'20px',marginTop:'20px'}}>理论多选题</h1>
        {lilunduoListHtml}
        <h1 style={{fontSize:'20px',marginTop:'20px'}}>看图选择</h1>
        {kantuHtmlList}
      
        <Form.Item>
          <Button type="primary" htmlType="submit" style={styles.login} >
            交卷
          </Button>
        </Form.Item>
      </Form>
      </div>
    )
  }
}
const styles = {
  login: {
    margin: '16px 700px',
  }
}
export default ButtonDemo