import React from 'react'
import './style.css'

class ErrorPage extends React.Component {
  componentDidMount(){
    this.error404()
  }
  componentWillUnmount(){
    window.cancelAnimationFrame(this.myReq)
  }
  error404 = ()=>{
    const c = document.getElementById("canv");
    const $ = c.getContext("2d");
    const w = c.width;
    const h = c.height;
    const id = $.createImageData(w, h);
    const _this = this
    function draw() {
      _this.myReq = window.requestAnimationFrame(draw);
      let r;
      for (let p = 4 * (w * h - 1); p >= 0; p -= 4) {
        r = Math.random();
        id.data[p] = id.data[p+1] = id.data[p+2] = 255 * Math.pow(r, 1.6);
        id.data[p+3] = 255;
      }
      $.putImageData(id, 0, 0);
    }
    draw();
  }
  render () {
    return (
      <div style={styles.bg} className='error404'>
        1
      </div>
    )
  }
}

const styles = {
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 'calc(100vh - 64px)',
  },
}
export default ErrorPage