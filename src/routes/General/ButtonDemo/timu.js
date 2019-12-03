import React from './node_modules/react'
import {Button,  Card, Radio, message,Form,Input,Modal,Checkbox} from './node_modules/antd'
import '../../../src/config'
import $ from './node_modules/jquery'
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
      kantuArr:[],
      show:1,
      visible: false ,
      url2:'',
      p_id:'',
      value:'',
      dxva:[],
      height:  window.document.body.clientHeight
    }
  }
  
reloadHeight = () => {
  this.setState({height: window.document.body.clientHeight})
};
  chouti =()=>{
    this.setState ({
      show:0
     });
    let userid = JSON.parse(localStorage.getItem('userinfo')).id;
    const url2 =global.constants.url
    this.setState({
      url2:url2
    })
    $.ajax({
      url: `${url2}`+'/index/addpaper/extractpaper',
      data:{id:userid},
      dataType:'json',
      type:'get',
      success:(data)=>{
       console.log("data",data)
        const panduan = data.info.panduan
        const lilundan = data.info .lilundan
        const lilunduo = data.info.lilunduo
        const kantu = data.info.kantu
        this.setState({
          panduanArr: panduan,
          lilundanArr:lilundan,
          lilunduoArr:lilunduo,
          kantuArr:kantu,
          p_id:data.info.p_id,
        })
      }
    })
  }
  handleOk = e => {

   
    this.setState({
      visible: false,
    });

  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
componentDidMount(){
  window.addEventListener('resize', this.reloadHeight);
}
  onChange = (value) => {
  };
handleSubmit = (e) => {
  console.log(111)
    let userid = JSON.parse(localStorage.getItem('userinfo')).id;
    const {p_id} = this.state
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const url =global.constants.url
        $.ajax({
          url:`${url}`+'/index/addpaper/addpaper',
          data:{...values,p_id:p_id, u_id:userid},
          type:'post',
          dataType:'json',
          success: (data)=>{
            console.log("data",data)
           if(data.code == 1){
             message.success(data.info)
           }else {
             message.error(data.info)
           }
          },
          error:(data)=>{
          
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
     <Card>
    <Form.Item  layout="inline">
          {getFieldDecorator(`pd_${item.id}`,{ initialValue: null})(
              <div>
              <span >{item.wenti}</span> 
                <RadioGroup onChange={that.onChange}>
              <Radio value={1}>对</Radio>
              <Radio value={0}>错</Radio>
            </RadioGroup>
                </div>
          )}
        </Form.Item>
     </Card>
     
     );
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
          <Radio.Group>
        <Radio style={{display: 'block',height: '30px',lineHeight: '30px'}} value={item.count[0]} name='lld1'>
         {item.count[0]}
        </Radio>
        <Radio  style={{display: 'block',height: '30px',lineHeight: '30px'}}   value={item.count[1]} name='lld2'>
        {item.count[1]}
        </Radio>
        <Radio  style={{display: 'block',height: '30px',lineHeight: '30px'}}  value={item.count[2]} name='lld3'>
        {item.count[2]}
        </Radio>
        <Radio  style={{display: 'block',height: '30px',lineHeight: '30px'}}  value={item.count[3]} name='lld4'>
        {item.count[3]}
        </Radio>
      </Radio.Group>


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
        <p>{item.wenti}</p>
        <Form.Item  layout="inline">
          {getFieldDecorator(`lilunduoxuan_${item.id}`,{ initialValue: null})(
          <Checkbox.Group style={{ width: '100%' }} onChange={that.onChange}>
        <Checkbox  style={{display: 'block',height: '30px',lineHeight: '30px',marginLeft:'8px'}} value={item.count[0]}>{item.count[0]}</Checkbox>
        <Checkbox  style={{display: 'block',height: '30px',lineHeight: '30px'}} value={item.count[1]}>{item.count[1]}</Checkbox>
        <Checkbox  style={{display: 'block',height: '30px',lineHeight: '30px'}} value={item.count[2]}>{item.count[2]}</Checkbox>
        <Checkbox  style={{display: 'block',height: '30px',lineHeight: '30px'}} value={item.count[3]}>{item.count[3]}</Checkbox>
        </Checkbox.Group>,  
            {/* {item.count.map(function(item,index){
          return (
           <div>
            <Checkbox.Group style={{ width: '100%' }}> 
            <Checkbox onChange={that.onChange} value={item}>{item}</Checkbox>
             </Checkbox.Group> 
           </div>
          )
  })}    */}
          )}
        </Form.Item>
     </Card>);
    }); 
  }
  kantuHtmlList(){
    let { getFieldDecorator } = this.props.form; 
    let {kantuArr,url2} = this.state;
    const that = this;
    const xuanxiang = []
    return kantuArr.map(function(item, index){
     return (
     <Card style={{height:'10px;'}}>
        <Form.Item  layout="inline">
          {getFieldDecorator(`kantuxuanze_${item.id}`,{ initialValue: null})(
              <div>
          <p>{item.wenti}</p>
          <div style={{width:'100%',height:'100%'}}>
                <img src={`${url2}/`+item.url} alt="" style={{width:'50%',height:'50%'}} /> 
                </div>
          <div>
        <Radio.Group>
        <Radio style={{display: 'block',height: '30px',lineHeight: '30px'}} value={item.count[0]} name='kt1'>
         {item.count[0]}
        </Radio>
        <Radio  style={{display: 'block',height: '30px',lineHeight: '30px'}}   value={item.count[1]} name='kt2'>
        {item.count[1]}
        </Radio>
        <Radio  style={{display: 'block',height: '30px',lineHeight: '30px'}}  value={item.count[2]} name='kt3'>
        {item.count[2]}
        </Radio>
        <Radio  style={{display: 'block',height: '30px',lineHeight: '30px'}}  value={item.count[3]} name='kt4'>
        {item.count[3]}
        </Radio>
      </Radio.Group>

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
     
      {this.state.show ==1? <div style={styles.body}><span style={{background:'#fff'}} className={styles.chouti} onClick={this.chouti} style={styles.chouti} ><span style={styles.choutiwz}>抽题</span></span></div>:''}
      {this.state.show ==0?   <Form layout="inline" onSubmit={this.handleSubmit}>
      <h1 style={styles.title}>判断题</h1>
      {panduanHtml}
      <h1  style={styles.title}>理论单选题</h1>
       {lilundanListHtml}
       <h1  style={styles.title}>理论多选题</h1>
        {lilunduoListHtml}
        <h1 style={styles.title}>看图选择</h1>
        {kantuHtmlList}
        <Form.Item>
          <Button size="large" type="primary" htmlType="submit" style={styles.login} >
            交卷
          </Button>
        
        </Form.Item>
      </Form>:''
      
    
    }
      </div>
    )
  }
}

const styles = {
  login: {
    margin: '16px 450%',
    width:'150px',
    height:'100px',
    fontSize:'30px'
  },
  title:{
    background:'#40a9ff',
    fontSize:'18px',
    marginTop:'20px',
    width:'120px',
    textAlign:'center',
    borderRadius:'50%',
    color:'#fff'
  },
  chouti:{
    display:'block',
    width:'400px',
    height:'400px',
    fontSize:'40px',
    background:'rgb(64, 169, 255)',
    color:'#fff',
    borderRadius:'15%',
    marginLeft:'35%',
    marginTop:'10%',
    
  },
  choutiwz:{
    display:'block',
    fontSize:'50px',
    marginLeft:'35%',
    paddingTop:'35%'
  },
  body:{
    background:'#fff',
     height:'99vh',
    // height:'57rem',
    overflow:'hidden',
    overflowX: 'auto',  
    overflowY: 'scroll',
  }
}
export default ButtonDemo