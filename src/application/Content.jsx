import React from 'react';
import ConversionForm from "./ConversionForm";
import {Carousel} from "react-bootstrap";
import TypeChooser from "./TypeChooser";
import background from "./background-4.png"

const Content = () => {
  const divStyle = {
    backgroundImage: {background},
    backgroundSize: 'cover', // 可以根据需要调整背景大小属性
    backgroundRepeat: 'no-repeat', // 控制是否重复显示背景图片
  };
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <div className="jumbo" style={divStyle}>
        <h1>Let's Convert your models now!!!</h1>
        {/* <h3>Online tool to convert TensorFlow / Caffe / OpenVino Zoo model into MyriadX blob</h3> */}
        <h3>ModelConverter | Online tool to Convert model to ncnn model formats</h3>
      </div>
      <Carousel activeIndex={index} onSelect={console.log} controls={false} indicators={false} keyboard={false}
                touch={false} wrap={false} pause={false} interval={null} fade={true}>
        <Carousel.Item>
          <TypeChooser nextStep={() => setIndex(index + 1)}/>
        </Carousel.Item>
        <Carousel.Item>
          <ConversionForm nextStep={() => {}} prevStep={() => setIndex(index - 1)}/>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

Content.propTypes = {};

export default React.memo(Content);