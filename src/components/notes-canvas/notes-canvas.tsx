import React, {useRef, useEffect} from 'react';
import styles from './notes-canvas.module.css';

export default function CanvasItem(props: ICanvasItemProps) {
  //初始化变量
  const scene = useRef<any>();
  useEffect(() => {
    const canvas = scene.current;
    var ctx = canvas && canvas.getContext("2d"),
      particles: any[] = [],
      amount = 0,
      radius = 1,
      mouse = { x: 0, y: 0 };

    var ww = canvas.width = 580;
    var wh = canvas.height = 294;
    //颜色变量数组
    var colors = ["#3714bo", "#6a4ad8", "#937900", "#b29c36", "#1a0565"];
    //颗粒函数（处理图像数据）
    class Particle {
      x: any;
      y: any;
      dest: any;
      r: any;
      vx: any;
      vy: any;
      accX: any;
      accY: any;
      friction: any;
      color: any;
      ctx: any;
      radius: any;

      constructor(x: any, y: any) {
        this.x = Math.random() * ww;
        this.y = Math.random() * wh;
        this.dest = {
          x: x,
          y: y
        };
        this.r = /*Math.random() * 2 +*/ 3; //随机半径（颗粒大小）
        this.vx = (Math.random() - 0.5) * 20;
        this.vy = (Math.random() - 0.5) * 20;
        this.accX = 0;
        this.accY = 0;
        this.friction = Math.random() * 0.05 + 0.94; //随机摩擦力（缓冲的动画效果）
        this.color = colors[Math.floor(Math.random() * 6)]; //随机颜色
      }

      // 颗粒原型
      render() {
        this.accX = (this.dest.x - this.x) / 1000;
        this.accY = (this.dest.y - this.y) / 1000;
        this.vx += this.accX;
        this.vy += this.accY;
        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
        ctx.fill();

        var a = this.x - mouse.x;
        var b = this.y - mouse.y;

        var distance = Math.sqrt(a * a + b * b);
        if (distance < (radius * 70)) {
          this.accX = (this.x - mouse.x) / 100;
          this.accY = (this.y - mouse.y) / 100;
          this.vx += this.accX;
          this.vy += this.accY;
        }
      }
    }

    //鼠标移动函数
    // function onMouseMove(e:any) {
    //   mouse.x = e.clientX;
    //   mouse.y = e.clientY;
    // }

    //触摸移动函数
    // function onTouchMove(e:any) {
    //   //touches 多点触摸数组
    //   if (e.touches.length > 0) {
    //     mouse.x = e.touches[0].clientX;
    //     mouse.y = e.touches[0].clientY;
    //   }
    // }

    //触摸结束函数
    // function onTouchEnd(e:any) {
    //   mouse.x = -9999;
    //   mouse.y = -9999;
    // }


    //初始化函数
    function initScene() {
      ww = canvas.width = 580;
      wh = canvas.height = 294;

      ctx.clearRect(0, 0, canvas.width, canvas.height); //清空 Canvas

      ctx.font = "bold " + (ww / 10) + "px helvetica neue";
      ctx.textAlign = "center";
      ctx.fillText("欢迎来到断点的博客", ww / 2, wh / 2); //将 Input 中输入的值，打印在 Canvas 上

      var data = ctx.getImageData(0, 0, ww, wh).data; //获取图像数据
      ctx.clearRect(0, 0, canvas.width, canvas.height); //清空 Canvas
      ctx.globalCompositeOperation = "screen";

      particles = [];
      for (var i = 0; i < ww; i += Math.round(ww / 150)) {
        for (var j = 0; j < wh; j += Math.round(ww / 150)) {
          if (data[((i + j * ww) * 4) + 3] > 150) {
            particles.push(new Particle(i, j)); //将图像数据经过 Particle 函数处理后 push 到 particles 数组中
          }
        }
      }
      amount = particles.length; //获得 particles 的长度
    }

    //鼠标点击事件（点击一次 radius++ 当 radius === 5 时，radius = 0）
    // function onMouseClick() {
    //   radius++;
    //   if (radius === 5) {
    //     radius = 0;
    //   }
    // }

    //渲染函数
    function render(a: any) {
      requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height); //清空 Canvas
      for (var i = 0; i < amount; i++) {
        particles[i].render(); //循环 particles 数组渲染
      }
    };

    // window.addEventListener("mousemove", onMouseMove); //鼠标移动
    // window.addEventListener("touchmove", onTouchMove); //触摸移动
    // window.addEventListener("click", onMouseClick); //点击
    // window.addEventListener("touchend", onTouchEnd); //触摸结束
    initScene(); //初始化
    requestAnimationFrame(render); //循环渲染
  });



  return (
    <li className={styles["canvas-item"]}>
      <canvas className={styles["scene"]} ref={scene}></canvas>
    </li>
  );
}

interface ICanvasItemProps {
  [propsName: string]: any
}