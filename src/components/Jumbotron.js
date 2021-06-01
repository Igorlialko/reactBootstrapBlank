import React from "react";
import {Jumbotron as Jumbo, Container} from "react-bootstrap";
import img1 from "./images/img-home.jpg";
import styled from 'styled-components';

const Styles = styled.div`
    .jumbo{
      background: url(${img1}) no-repeat fixed bottom;
      background-size: cover ;
      color: #efefef;
      min-height: 400px ;
      position: relative;
      z-index: -2;
    }
  .overlay{
    background-color:#000 ;
    opacity: 0.5;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

const Jumbotron = () => (
    <Styles>
    <Jumbo fluid className='jumbo'>
        <div className='overlay'>
        </div>
        <Container>
            <h1>Web Developer Blog</h1>
            <p>
                My Web Developer Blog : igor JS
                My Web Developer Blog : igor JS
                My Web Developer Blog : igor JSMy Web Developer Blog : igor JS
                My Web Developer Blog : igor JS
                My Web Developer Blog : igor JSMy Web Developer Blog : igor JS
                My Web Developer Blog : igor JS
                My Web Developer Blog : igor JSMy Web Developer Blog : igor JS
                My Web Developer Blog : igor JS
                My Web Developer Blog : igor JS
            </p>
        </Container>
    </Jumbo>
    </Styles>
)
export default Jumbotron;