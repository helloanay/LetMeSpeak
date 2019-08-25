
import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import { format } from "util";



class LandingPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path2.png")}
            />
            
            <img
              alt="..."
              className="shapes triangle"
              src={require("assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("assets/img/cercuri.png")}
            />
            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                  <h1 className="text-white">
                   <font size="6">Let Me Speak</font>
                    
                  </h1>
                  <p className="text-white mb-3"><font size="4">
                   We all have right to express ourselves...
                   </font></p>
                  
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="https://github.com/vatsal-rathod/LetMeSpeak"
                        onClick={e => e.onClick()}
                      >
                        <i className="fab fa-github" />
                      </Button>
                     
                    </div>
                  </div>
                  
                  
                </Col>
                <Col lg="4" md="5">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/etherum.png")}
                  />
                  
                </Col>
              </Row>
            </div>
          </div>
          <section className="section section-lg">
            <section className="section">
              <img
                alt="..."
                className="path"
                src={require("assets/img/path4.png")}
              />
              <div className="section section-lg">
                <section className="section">
                  <center>
                  <iframe className="abcd" width="840" height="630" src="https://youtu.be/v8Lo2EIrgHc">                   
                  </iframe></center>
                </section>
              </div>
            </section>
          </section>
          
         
         
          
         
        </div>
      </>
    );
  }
}

export default LandingPage;
