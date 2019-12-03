import React, { Component } from 'react'
import { Select,Table, Divider, Tag,Button ,Popconfirm, message} from 'antd';
import '../../src/config'
import './index.css'
import $ from 'jquery'
const { Option } = Select;
const { Column, ColumnGroup } = Table;

export default class componentName extends Component {
    constructor() {
        super();
        this.state = {
          data:[],
          value:'',
          // ktxz:''
        };
      }

    componentDidMount() {
        // const url = global.constants.url
        // let userid = JSON.parse(localStorage.getItem('userinfo')).id;
        // const value1 =1
        // $.ajax({
        //   url: `${url}` + '/index/addpaper/tikulibiao',
        //   type: 'post',
        //   dataType: 'json',
        //   data:{value:value1},
        //   success: (data) => {
        //     this.setState({
        //         data:data.info
        //         })
        //   },
        //   error:(data)=>{
           
        //   }
        // })
      }
      handleChange=(value)=> {
        this.setState({
            value:value
        })
        if(value == 5 ||  value == 6){
          this.setState({
            ktxz:'yes'
        })
        }
        if(value == 5 ){
          this.setState({
            ktxz:'yes'
        })
        }else{
          this.setState({
            ktxz:''
        }) 
        }
      
        const url = global.constants.url
        let userid = JSON.parse(localStorage.getItem('userinfo')).id;
        $.ajax({
          url: `${url}` + '/index/addpaper/tikulibiao',
          type: 'post',
          dataType: 'json',
          data:{value:value},
          success: (data) => {
            console.log(data)
            this.setState({
              data:data.info,
            })
          }
        })
      }
      del=(record)=>{
          const {value,data}= this.state
          console.log(this.state.value)
        const url = global.constants.url
        let userid = JSON.parse(localStorage.getItem('userinfo')).id;
        $.ajax({
          url: `${url}` + '/index/addpaper/tikulibiaodel',
          type: 'post',
          dataType: 'json',
          data:{id:record.id,value:this.state.value},
          success: (data) => {
              message.success(data.info)
            $.ajax({
                url: `${url}` + '/index/addpaper/tikulibiao',
                type: 'post',
                dataType: 'json',
                data:{value:this.state.value},
                success: (data) => {
                  this.setState({
                      data:data.info
                      })
                },
                error:(data)=>{
                    message.error(data.info)
                }
              })
          }
        })
      }
    render() {
      const url2 = global.constants.url 
      console.log(url2)
        const {data,ktxz}= this.state



          const columns = [
            {
              title: '题目',
              dataIndex: 'wenti',
              key: 'wenti',
              width:'50%',
            },
            {
              title: '图片',
              dataIndex: '',
              key: '',
              width:'30%',
              align:'center',
              render:(record)=>{
                if(record.url){
                  return <img src={`${url2}/${record.url}`}  style={{width:'50%'}}/> 
                }
                if(record.urlli){
                  console.log(111)
                  return <img src={`${url2}/${record.urlli}`}  style={{width:'50%'}}/> 
                }else{
                  return <span>无</span>
                }
              //  const url=record.url
              //  console.log(`${url2}/${url}`)
              //   // return <img src={`${url2}/${record.url}`}  style={{width:'100px'}}/> 
              //   return <img src={`http://haishiteacher.chinadingao.com/${record.url}`}  style={{width:'50%'}}/> 
              }
            },
            {
              title: '操作',
              dataIndex: 'caozuo',
              key: 'caozuo',
              render: (text, record) => {
                return <div>
                    <Button type="primary" onClick={() => this.del(record)}> 
                        删除
                    </Button>
                    {/* <Button type="primary" onClick={() => this.resetpassword(record)} style={{marginLeft:'10px'}}>修改分数 </Button> */}
                </div>
              }
            },
          ];
        return (
            <div>
             <Select lable="请选择题型" placeholder="请选择题型"  style={{ width:360 }} onChange={this.handleChange}>
                <Option value="1">理论多选</Option>
                <Option value="2">判断题</Option>
                <Option value="3">简答题</Option>
                <Option value="4">理论单选</Option>
                <Option value="5">看图选择</Option>
                <Option value="6">自选题</Option>
            </Select>
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
