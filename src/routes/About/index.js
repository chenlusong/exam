import React from 'react'
import CustomBreadcrumb from '../../components/CustomBreadcrumb/index'
import TypingCard from '../../components/TypingCard'
import {Form,  Input, Button,TextArea,message,InputNumber } from 'antd'
import $ from 'jquery'
import '../../../src/src/config'

@Form.create()
export default class About extends React.Component{
  componentDidMount(){
    
  }
  componentWillUnmount(){

  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const url =global.constants.url
        $.ajax({
          type:'post',
          url:`${url}`+'/index/login/accountAdd',
          datatype:'json',
          data:values,
          success:(data)=>{
          data = JSON.parse(data)
          if(data.code == 1){
            message.success(`${data.info.info}${data.info.account}个账号`);
            this.props.form.resetFields();
          }else{
            message.error(data.info)
            this.props.form.resetFields();
          }
          
          },
          Error:(data)=>{
            // message.Error('新增失败');
          }
        }
        )
      }
    });
  };

  render(){
    const { TextArea } = Input;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span:1 },
      wrapperCol: { span: 8 },
    };
    return (
      <div >
         <Form  onSubmit={this.handleSubmit}>
          <Form.Item {...formItemLayout} label="账号">
          {getFieldDecorator('account', {
             initialValue: null,
            rules: [{ required: true, message: '请输入账号' }],
          })(
            
            <TextArea autoComplete="off"
            style={{width:"600px",height:'200px',marginLeft:'3%'}}
            placeholder='请输入账号,并以英文状态下的逗号隔开'/>
    //         <TextArea
    //   placeholder="Autosize height with minimum and maximum number of lines"
    //   autosize={{ minRows: 2, maxRows: 6 }}
    // />
          )}
        </Form.Item> 

     
        <Form.Item {...formItemLayout} label="账号数量:">
          {getFieldDecorator('accountnum', {
            rules: [{ required: true, message: '请输入账号数量' }],
          })(
            <InputNumber size="large" min={1}    style={{width:'600px',marginLeft:'3%'}} max={100000}  placeholder="请输入账号数量" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
      </div>
    )
  }
}
const styles = {
  body:{
    display:'block',
    background:'#fff',
    height:'53rem',
    overflow:'hidden',
    paddingTop:'30px',
    position:'relative',
  }
}
