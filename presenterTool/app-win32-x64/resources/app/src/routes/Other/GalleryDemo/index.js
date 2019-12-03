import React from 'react'
import Shuffle from 'shufflejs'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'
import {Card,Button,Modal,BackTop} from 'antd'

class GalleryDemo extends React.Component{
  state = {
    image:'',
    visible:false,
    photos : [
      {
        groups:['nature'],
        style:'itemOne',
        size:'1x1',
        src:require('./img/01.jpeg')
      },
      {
        groups:['nature'],
        style:'itemOne',
        size:'1x1',
        src:require('./img/02.jpeg')
      },
      {
        groups:['nature'],
        style:'itemOne',
        size:'1x1',
        src:require('./img/03.jpeg')
      },
      {
        groups:['scenery'],
        style:'itemOne',
        size:'1x1',
        src:require('./img/04.jpeg')
      },
      {
        groups:['scenery'],
        style:'itemTwoRow',
        size:'1x2',
        src:require('./img/05.jpeg')
      },
      {
        groups:['nature'],
        style:'itemOne',
        size:'1x1',
        src:require('./img/06.jpeg')
      },
      {
        groups:['nature','scenery'],
        style:'itemTwoCol',
        size:'2x1',
        src:require('./img/07.jpeg')
      },
      {
        groups:['other'],
        style:'itemOne',
        size:'1x1',
        src:require('./img/08.jpeg')
      },
      {
        groups:['other'],
        style:'itemOne',
        size:'1x1',
        src:require('./img/09.jpeg')
      },
      {
        groups:['nature'],
        style:'itemOne',
        size:'1x1',
        src:require('./img/10.jpeg')
      },
      {
        groups:['other'],
        style:'itemOne',
        size:'1x1',
        src:require('./img/11.jpeg')
      },
      {
        groups:['other','scenery'],
        style:'itemOne',
        size:'1x1',
        src:require('./img/12.jpeg')
      },
    ]
  }
  componentDidMount(){
    this.shuffle = new Shuffle(this.shuffleDemo, {
      itemSelector: '.photo-item',
      sizer: this.sizer,
    });
  }
  componentDidUpdate() {
    // this.shuffle.resetItems();
  }

  componentWillUnmount() {
    this.shuffle.destroy();
    this.shuffle = null;
  }
  _whenPhotosLoaded(photos) {
    return Promise.all(photos.map(photo => new Promise((resolve) => {
      const image = document.createElement('img');
      image.src = photo.src;

      if (image.naturalWidth > 0 || image.complete) {
        resolve(photo);
      } else {
        image.onload = () => {
          resolve(photo);
        };
      }
    })));
  }
  showImg = (src)=>{
    this.setState({
      visible:true,
      image:src
    })
  }

  render(){
    const cardContent = `<ul class='card-ul'}>
      <li>快速 - 在初始化，排序或过滤器上只有一个强制同步布局（又称回流</li>
      <li>回应（尝试调整窗口大小！）</li>
      <li>按组过滤项目</li>
      <li>项目可以有多个组，大小不同</li>
      <li>排序项目</li>
      <li>高级过滤（如搜索）</li>
    </ul>`
    return (
      <div>
       1
      </div>
    )
  }
}

const styles = {
  itemOne:{
    width:'25%',
    marginBottom:8,
    padding:'0 4px'

  },
  itemTwoCol:{
    width:'50%',
    marginBottom:8,
    padding:'0 4px'
  },
  itemTwoRow:{
    width:'25%',
    marginBottom:8,
    padding:'0 4px'
  }

}

export default GalleryDemo