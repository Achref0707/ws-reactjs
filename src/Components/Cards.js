import React from "react";
import "./Cards.css"
import Card from "react-bootstrap/Card";
const Cards = () => {
  return (
    <div>
       {/* <Card className="bg-dark text-white" style={{borderRadius:"0px",width:"400px",height:"400px"}}>
        <Card.Img
          src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Porsche/911/7652/1677566789939/front-left-side-47.jpg"
          alt="Card image" style={{height:"400px"}}
        />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card> */}
      <div className="card">
          <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Porsche/911/7652/1677566789939/front-left-side-47.jpg" alt="404"/>
         <div className="card-cont">
          <div> 
           <h1>718</h1>
           <h4>à partir de TND 292 000,00 TTC Prix client conseillé</h4>
           </div>
           <div className="btn1">
           <button class="button-57 button1"  style={{backgroundColor:"white"}}><span class="text">configurer</span></button>
           <button class="button-57 button2"  style={{backgroundColor:"transparent" }}><span class="text">Vue d'ensemble</span></button>

           </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
