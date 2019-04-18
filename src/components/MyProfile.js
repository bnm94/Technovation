import React, { Component } from "react";
import "./styles/MyProfile.css";

class MyProfile extends Component {
  render() {
    return (
      <div className="MyProfile">
        <div class="container">
          <div class="my_profile">
            <img
              src="https://image.flaticon.com/icons/svg/137/137623.svg"
              alt="back-arrow"
            />
            {/* <img src="https://img.icons8.com/flat_round/64/000000/back.png" /> */}
            <h5 class="text-justify header_my_profile">Мой профиль</h5>
          </div><br/>
          <div class="card">
            <img
              src="https://image.flaticon.com/icons/svg/163/163810.svg"
              class="card-img-top img-fluid"
              alt="Responsive image"
            />
            <div class="card-body">
              <h4 class="card-h4">Даша Попова</h4>
              <p class="card-text">
                Some quick example text to build on the card title
              </p>
            </div>
          </div>
          <br />
          <div class="blocks">
            <img
              src="https://image.flaticon.com/icons/svg/1170/1170611.svg"
              alt="dfd"
            />
            <p class="block-text">Мой Вклад</p>
            <img
              src="https://image.flaticon.com/icons/svg/137/137624.svg"
              alt="dvjsv"
            />
          </div>
          <hr />
          <div class="blocks">
            <img
              src="https://image.flaticon.com/icons/svg/1162/1162489.svg"
              alt="dfd"
            />
            <p class="block-text">Результаты</p>
            <img
              src="https://image.flaticon.com/icons/svg/137/137624.svg"
              alt="dvjsv"
            />
          </div>
          <hr />
          <div class="blocks">
            <img
              src="https://image.flaticon.com/icons/svg/1006/1006004.svg"
              alt="dfd"
            />
            <p class="block-text">Мои Друзья</p>
            <img
              src="https://image.flaticon.com/icons/svg/137/137624.svg"
              alt="dvjsv"
            />
          </div>
          <hr />
          <div class="blocks">
            <img
              src="https://image.flaticon.com/icons/svg/149/149289.svg"
              alt="dfd"
            />
            <p class="block-text">Настройки</p>
            <img
              src="https://image.flaticon.com/icons/svg/137/137624.svg"
              alt="dvjsv"
            />
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default MyProfile;
