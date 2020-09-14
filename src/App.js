import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Ourbikes from "./components/Ourbikes";
import About from "./components/About";
import Gallery from "./components/Gallery";
import { AppStyled } from "./styles/style";







const { Header, Content } = Layout;

function App() {
  return (
    <AppStyled id="top" className="App-header">
      <div className="headerCentralised">Cheshire eBikes</div>
    
      <Layout>
        <Header style={{ backgroundColor: "#fff" }}>
          <Navigation style={{ paddingBottom: "20px" }} />
        </Header>

        <Content className="">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/our-bikes">
              <Ourbikes />
            </Route>
          
       
            
           
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
           
          </Switch>
        </Content>
      </Layout>
      <footer>
        <div className="jackHeadshotDiv">
          <img className="jackHeadshot" src="https://d3ivb44pxg89ct.cloudfront.net/assets/cube-acid-5f307a3c6ca18fa7876eb254a76c59474ee68dad253def004ade7630434b6c4c.jpg" alt="dog" />

        
        </div>
      </footer>
      <div>
        <a href="mailto:Phil@pjdproperty.co.uk?bcc=alisparklaw@gmail.com&subject=eBike%20hire%20Query&body=Hi%20Phil,%0D%0DI%20would%20like%20to%20enquire%20about%20hiring%20an%20ebike%20please" className="float">
          <i className="fa fa-envelope-o my-float"></i>
        </a>

        <a href="#top" className="float-up">
          <i className="fa  fa-angle-up my-float"></i>
        </a>
      </div>
    </AppStyled>
  );
}

export default App;
