import { Data, ImgData, detailsBox, Data2 } from "../list/mainData";
import React, { useState, useEffect, useRef } from "react";
import CountdownTime from "../components/CountdownTime";
import DocumentIcon from "../assets/documentIcon";
import { useNavigate } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import RightArrow from "../assets/RightArrow";
import LeftArrow from "../assets/LeftArrow";
import Clock from "../components/Clock";
import NotePad from "../assets/NotePad";
import "../css/loginPage.css";
import "../css/main.css";

const MainScreen = () => {
  const [newList, setnewList] = useState(Data2);
  const navigate = useNavigate();
  console.log({
    spread: [...newList],
    newList,
    bool: newList === [...newList],
  });
  const addItem = (obj) => {
    let list = [...newList];
    list.map((item) => {
      if (item.id === obj.id) {
        item.isFill = true;
      }
    });
    setnewList(list);
  };

  const removeItem = (obj) => {
    let list = [...newList];
    list.map((item) => {
      if (item.id === obj.id) {
        item.isFill = false;
      }
    });
    setnewList(list);
  };
  const filterList = (list) => {
    return list.sort((a, b) => a.isFill - b.isFill).reverse();
  };

  return (
    <>
      <div className="desktop ">
        <div className="main-container  d-flex">
          <div className="sideNav text-center text-white p-1">
            <Clock />
            {Data.map(({ name, rate }) => (
              <div className="infoBox">
                <p>{name}</p>
                <h2>{rate} </h2>
              </div>
            ))}
            <div className="bg-white text-center mt-1">
              <NotePad />
            </div>
          </div>

          <div className="formDivMAin pl-2 pr-2">
            <div className=" carouselBack pt-1 pb-1">
              <Carousel
                itemsToShow={8}
                showArrows={false}
                pagination={false}
                outerSpacing={-10}
              >
                {ImgData.map((item) => (
                  //  id === 1&& {image}
                  <img
                    src={item.image}
                    className="imgSetting "
                    onClick={() => addItem(item)}
                  />
                ))}
              </Carousel>
            </div>
            <div className="emptyBoxes">
              <Carousel itemsToShow={8} showArrows={false} pagination={false}>
                {filterList(newList).map((item) => {
                  return (
                    <div
                      style={{
                        background: item.isFill && "#002B2B",
                        color: "#fff",
                      }}
                      className="divseting"
                      onClick={() => removeItem(item)}
                    >
                      {item.isFill && item.name}
                    </div>
                  );
                })}
              </Carousel>
            </div>

            <div className="TwoDiv">
              <div className="timeBox">
                <h3 className="">
                  <CountdownTime />
                </h3>
              </div>

              <div className="carouselBackdetail ">
                <Carousel itemsToShow={1} showArrows={false} pagination={false}>
                  {detailsBox.map(({ head, title, details }) => (
                    <div className="text-justify detailBox">
                      <div className="d-flex align-items-center justify-content-between">
                        <RightArrow />
                        <h3 className="text-center text-muted">{head}</h3>
                        <LeftArrow />
                      </div>
                      <h6>{title} </h6>
                      <p>{details} </p>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>

          <div className="sideNav p-1">
            <div className="loginBtnmain">
              <a onClick={() => navigate("/ApointMent")}>
                <img src="brandKit/Logo_white.png" alt="LOGO " />
              </a>
            </div>
            {Data.map(({ name, rate }) => (
              <div className="infoBox">
                <p>{name}</p>
                <h2>{rate} </h2>
              </div>
            ))}
            <div className="bg-white mt-1">
              <DocumentIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainScreen;
