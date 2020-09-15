import React from "react";
import { StyledDiv } from "../styles/style";
import { Carousel } from "antd";

import autumn from "../img/autumn.jpg";
import granchester from "../img/granchesterMeadows.jpg";
import paw from "../img/paw.png";
import cornfield from "../img/cornfield.jpg";
import granchester2 from "../img/granchester2.jpg";
import meadow from "../img/meadow.jpg";
import fieldtrack from "../img/fieldtrack.jpg";
import bear from "../img/bear.jpg";
import airdale from "../img/airdale.jpg";
import bigfield from "../img/bigfield.jpg";
import log1 from "../img/log1.jpg";
import log2 from "../img/log2.jpg";
import longgrass from "../img/longgrass.jpg";
import mud from "../img/mud.jpg";
import wrestling from "../img/wrestling.jpg";
import paddling from "../img/paddling.jpg";
import field from "../img/field.jpg";
import field2 from "../img/field2.jpg";
import trio from "../img/trio.jpg";
import labs from "../img/labs.jpg";
import rainbow from "../img/rainbow.jpg";
import terrier from "../img/terrier.jpg";
import incar from "../img/trio.jpg";
import allsmall from "../img/labs.jpg";

const Gallery = () => {
  return (
    <StyledDiv>


<p>
<h1 className="headerCentralised">Exploring the area</h1>
            
            <br /> <br />Tatton Estate circuit &nbsp; <br />

            Teggs Nose <br />
            Wizard Trail and the edge    <br />
            <a href={  "http://www.cheshirecycleway.co.uk/wp-content/uploads/2018/08/Map-of-Cheshire-Cycleway-route-70.jpgfas"}>
            Pick up Route 70 (cheshire cycleway) at Knolls Green
            </a>{" "}
{/*            
            <img className="image-left" src="" alt="" /> */}
            <br /> <br />Tatton Estate &nbsp;
            <a href={"https://www.visitcheshire.com/explore/knutsford-p33731"}>Knutsford</a>, famous mayday, georgian coaching town,  Italianate archtecture
             &nbsp;
            <a href={"https://www.thecourtyardknutsford.co.uk/"}>
             Pennyfarthing museum at the Courtyard Cafe
            </a>{" "}
            &nbsp; .
            <br />
            <br />
        
          
          </p>
      <h2 className="headerCentralised">Gallery</h2>
      <p>Lorem, ipsum dolor sit amet </p>
      <Carousel className="carousel" dotPosition="top" effect="fade" autoplay>
        <div className="divCentralised">
          <img src={carouselImages[0].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[1].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[2].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[3].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[4].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[5].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[6].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[7].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[8].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[9].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[10].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[11].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[12].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[13].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[14].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[15].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[16].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[17].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[18].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[19].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[20].carouselImg} alt="" />
        </div>
        <div>
          <img src={carouselImages[21].carouselImg} alt="" />
        </div>
        <div className="divCentralised">
          <img src={carouselImages[22].carouselImg} alt="" />
        </div>
      </Carousel>
      ,
    </StyledDiv>
  );
};

export default Gallery;

const carouselImages = [
  {
    carouselImg: paw,
  },
  {
    carouselImg: granchester,
  },

  {
    carouselImg: rainbow,
  },
  {
    carouselImg: cornfield,
  },
  {
    carouselImg: granchester2,
  },
  {
    carouselImg: meadow,
  },
  {
    carouselImg: fieldtrack,
  },
  {
    carouselImg: bear,
  },
  {
    carouselImg: terrier,
  },
  {
    carouselImg: airdale,
  },
  {
    carouselImg: bigfield,
  },
  {
    carouselImg: log1,
  },
  {
    carouselImg: log2,
  },
  {
    carouselImg: longgrass,
  },
  {
    carouselImg: mud,
  },
  {
    carouselImg: wrestling,
  },
  {
    carouselImg: paddling,
  },
  {
    carouselImg: field,
  },
  {
    carouselImg: field2,
  },
  {
    carouselImg: trio,
  },
  {
    carouselImg: labs,
  },
  {
    carouselImg: incar,
  },
  {
    carouselImg: allsmall,
  },
  {
    carouselImg: autumn,
  },
];
