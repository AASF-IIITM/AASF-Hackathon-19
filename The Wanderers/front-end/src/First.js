import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faPlay,faCoins,faReceipt } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";
import $ from "jquery";

import "./styles.css";

class First extends Component {
  componentDidMount() {
    $(".left-main").mouseenter(function() {
      $(".right-main").css("width", "45%");
      $(".left-main").css("width", "55%");
      $(".left-main-3").css("opacity", "1");
      $(".left-main-3").css("transition-duration", "0.8s");
      $(".left-main-3").css("transition-delay", "0.5s");
      $(".left-para").css("opacity", "1");
      $(".left-para").css("transition-duration", "0.8s");
      $(".left-para").css("transition-delay", "0.5s");
      $(".Down-Icon-Left").css("opacity", "1");
      $(".Down-Icon-Left").css("transition-duration", "0.8s");
      $(".Down-Icon-Left").css("transition-delay", "0.5s");
      $(".left-icon").css("background-color", "red");
      $(".left-icon").css("transition-duration", "0.8s");
      $(".left-icon").css("transition-delay", "0s");
      $(".left-icon").css("color", "white");
    });
    $(".right-main").mouseenter(function() {
      $(".left-main").css("width", "45%");
      $(".right-main").css("width", "55%");
      $(".right-main-3").css("opacity", "1");
      $(".right-main-3").css("transition-duration", "0.8s");
      $(".right-main-3").css("transition-delay", "0.5s");
      $(".right-para").css("opacity", "1");
      $(".right-para").css("transition-duration", "0.8s");
      $(".right-para").css("transition-delay", "0.5s");
      $(".Down-Icon-Right").css("opacity", "1");
      $(".Down-Icon-Right").css("transition-duration", "0.8s");
      $(".Down-Icon-Right").css("transition-delay", "0.5s");
      $(".right-icon").css("background-color", "rgb(0, 204, 255)");
      $(".right-icon").css("transition-duration", "0.8s");
      $(".right-icon").css("transition-delay", "0s");
      $(".right-icon").css("color", "white");
    });
    $(".left-main").mouseleave(function() {
      $(".right-main").css("width", "50%");
      $(".left-main").css("width", "50%");
      $(".left-main-3").css("opacity", "0");
      $(".left-main-3").css("transition-duration", "1s");
      $(".left-main-3").css("transition-delay", "0s");
      $(".left-para").css("opacity", "0");
      $(".left-para").css("transition-duration", "1s");
      $(".left-para").css("transition-delay", "0s");
      $(".Down-Icon-Left").css("opacity", "0");
      $(".Down-Icon-Left").css("transition-duration", "1s");
      $(".Down-Icon-Left").css("transition-delay", "0s");
      $(".left-icon").css("background-color", "white");
      $(".left-icon").css("color", "red");
      $(".left-icon").css("transition-duration", "1s");
      $(".left-icon").css("transition-delay", "0s");
    });
    $(".right-main").mouseleave(function() {
      $(".right-main").css("width", "50%");
      $(".left-main").css("width", "50%");
      $(".right-main-3").css("opacity", "0");
      $(".right-main-3").css("transition-duration", "1s");
      $(".right-main-3").css("transition-delay", "0s");
      $(".right-para").css("opacity", "0");
      $(".right-para").css("transition-duration", "1s");
      $(".right-para").css("transition-delay", "0s");
      $(".Down-Icon-Right").css("opacity", "0");
      $(".Down-Icon-Right").css("transition-duration", "1s");
      $(".Down-Icon-Right").css("transition-delay", "0s");
      $(".right-icon").css("background-color", "white");
      $(".right-icon").css("color", "rgb(0, 204, 255)");
      $(".right-icon").css("transition-duration", "1s");
      $(".right-icon").css("transition-delay", "0s");
    });
  }

  render() {
    return (
      <div className="main">
        <div className="left-main">
          <div className="left-main-1 left-main-item">
            <p className="Speak">Borrow</p>
            <p className="Down-Speak">Want Immediate Help?</p>
            <p className="left-para">
              Our Crowd Lending Platform helps to get you Direct Ether From a random Lender Through a bidding system
            </p>
          </div>
          <div className="left-main-2 left-main-item">
            <div className="left-icon">
            <a href="http://localhost:8080/"> <FontAwesomeIcon icon={faCoins} /></a>
            </div>
            <br />
            <p className="Down-Icon-Left">Let us Help You</p>
          </div>
          <div className="left-main-3 left-main-item">
            <p>Get Help Today</p>
            <p>
              {" "}
              <h3>
                1492<sup>/4900</sup>
              </h3>{" "}
			our Target
            </p>
          </div>
        </div>
        <div className="right-main">
          <div className="right-main-1">
            <p className="Listen">Donate</p>
            <p className="Down-Listen">Help One In Need</p>
            <p className="right-para">
              The Transactions are completely transparent and we let you review the users you will be lending Ether to.
            </p>
          </div>
          <div className="right-main-2">
            <div className="right-icon">
              <a href="http://localhost:8080/"><FontAwesomeIcon icon={faReceipt} /></a>
            </div>
            <br />
            <p className="Down-Icon-Right">Help Someone?</p>
          </div>
          <div className="right-main-3">
            <p>Help Someone</p>
            <p>
              {" "}
              <h3>
                1492<sup>/4900</sup>
              </h3>{" "}
              our Target
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default First;
