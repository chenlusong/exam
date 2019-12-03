import React from 'react'
import { Table,Button,Form,Input,Icon,message} from 'antd'
import $ from 'jquery'
import moment from 'moment'
import './index.css'
import '../ButtonDemo/../../../../src/src/config'
@Form.create()
class DropdownDemo extends React.Component {
  constructor(){
    super();
    this.state = {
        scorce: '',
        totaWl: 20,
        pageSize: 10,
        visible: false ,
        text:''
    };
  }
  set=(text)=>{
    const id = text.id
    const url =global.constants.url
    $.ajax({
      url:`${url}`+'/index/login/resetpassword',
      type:'get',
      dataType:'JSON',
      data:{id:id},
      success:(data)=>{
        if(data.code==0){
          message.error(data.info)
        }else if(data.code ==1){
          message.success(data.info)
        }
        }
      })
  }

  handleSubmit = ()=>{
  this.props.form.validateFields((err, values) => {
    if (!err) {
    }
  });
}
componentWillMount(){
}
  componentDidMount(){
  const url =global.constants.url
  $.ajax({
    url:`${url}`+'/index/login/accountList',
    type:'post',
    dataType:'JSON',
    success:(data)=>{
      console.log(data)
      this.setState({
        data:data.info
        })
      }
    })
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    const {data} = this.state;
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        align:'center'
      },
      {
        title: '账号',
        dataIndex: 'account',
        key: 'account',
        align:'center'
      },
      {
        title: '姓名',
        dataIndex: 'nickname',
        key: 'nickname',
        align:'center',
        render:(record,text)=>{
        console.log(text.nickname)
          if(text.nickname===null){
            return <span style={{color:'red'}}>未完善</span>
          }else{
            return <span>{text.nickname}</span>
          }
        }
      },
      {
        title: '身份',
        dataIndex: 'identity',
        key: 'identity',
        align:'center',
        render:(record,text)=>{
          if(record == 0){
            return <span>学生</span>
          }else if(record == 1){
            return <span>管理员</span>
          }
        }
      },
      {
        title: '添加时间',
        dataIndex: 'addtime',
        key: 'addtime',
        align:'center',
        render:(record,text)=>{
          return  new Date(parseInt(record) * 1000).toLocaleString().replace(/\//g, "-").substr(0,10);     
        }
      },
      {
        title: '操作',
        key: '操作',
        dataIndex: '操作',
        align:'center',
        render:(record,text)=>{
          return <Button type="primary" onClick={() => this.set(text)}>重置密码</Button>
        }
      },
    ];
    return (
      <div>
         {/* <Form layout="inline" onSubmit={this.handleSubmit} style={{marginBottom:'40px'}}>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="text"
              placeholder="请输入用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
           搜索
          </Button>
        </Form.Item>
      </Form> */}
     <Table bordered="true" dataSource={data} columns={columns} pagination={{ pageSize: 12 }} rowKey='' style={{marginTop:'30px'}} rowClassName={(record, index) => {
                     let className = 'light';
                    if(index % 2 ===1){
                        return className
                    }
                    }}/>

      </div>
    )
  }
}
export default DropdownDemo