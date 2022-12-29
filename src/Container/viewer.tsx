import { DotItems, ViewerWrapper } from "./style"
import React, {useState, useEffect} from "react"
import ButtonComponent from "../component/button/button"
import PageTopIcon from '@rsuite/icons/PageTop'
import PageEndIcon from '@rsuite/icons/PageEnd';
import InputComponent from "../component/input/input"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCompress, faForward, faCaretRight, faBackward, faCaretLeft} from "@fortawesome/free-solid-svg-icons"
import {Modal} from "rsuite"
import ModalComponent from "../component/modal/modal";
const lstSlider = [
     {
       id: 1,
       name: "/assets/images/1.jpg"
     },
     {
       id: 2,
       name: "/assets/images/2.webp"
     },
     {
       id: 3,
       name: "/assets/images/3.jpg"
     },
     {
       id: 4,
       name: "/assets/images/4.webp"
     },
     {
       id: 5,
       name: "/assets/images/5.jpg"
     },
     {
       id: 6,
       name: "/assets/images/6.webp"
     },
     {
       id: 7,
       name: "/assets/images/7.jpg"
     },
     {
       id: 8,
       name: "/assets/images/8.webp"
     },
     {
       id: 9,
       name: "/assets/images/9.jpg"
     },
     {
       id: 10,
       name: "/assets/images/10.jpg"
     },
     {
      id: 11,
      name: "/assets/images/7.jpg"
    },
    {
      id: 12,
      name: "/assets/images/5.jpg"
    }
   ]

const DotItem:React.FC<any> = (props) => {
     return <DotItems onClick={() => props.handleClickDot(props.index)} className={`dot-item d-flex w-100 mb-3 align-items-start ${props.className}`} style={{height: 150}}>
          <span className="fs-5 d-inline-block" style={{width: 25}}>{props.index + 1}</span>
          <img src={props.dotItem.name} alt="" className="flex-grow-1 ms-3" width={200} style={{height: "150px"}}/>
     </DotItems>
}
const Viewer = () => {
    let [currentIndex, setCurrentIndex] = useState<any>(0)
    let currentSlider = lstSlider[currentIndex];
    let [open, setOpen] = useState(false);
    const handleClickDot = (slider:any) => {
      setCurrentIndex(slider)
    }
    let data = lstSlider.map((item, index) => {
        return {label: `${index + 1} / ${lstSlider.length}`, value: index}
    })

    const handleChangeInput = (event:any) => {
      setCurrentIndex(event)
      console.log("event", typeof event);

    }
    const handleClickPrev = () => {
      setCurrentIndex((state:any) => state - 1)
    }
    const handleClickNext = () => {
      setCurrentIndex((state:any) => state + 1)
    }

    const handleClickFullScreen = () => {
      setOpen(true)
    }
    const handleClickCloseModal = () => {
      setOpen(false)
    }

    const handleClickNextLastSlider = () => {
      setCurrentIndex(lstSlider.length - 1)
    }
    const handleClickPrevFirstSlider = () => {
      setCurrentIndex(0)
    }
    // useEffect(() => {
    //   let timer = setInterval(() => {
    //     console.log("cur", currentIndex);
    //     if(currentIndex == lstSlider.length - 1) {
    //       setCurrentIndex(0)
    //     }else {
    //       setCurrentIndex((state:any) => state + 1)
    //     }
    //   }, 1000)
    //   return () => clearInterval(timer);
    // }, [currentIndex])
    useEffect(() => {
      const active = document.querySelector(".dot-item.active")
      active?.scrollIntoView()

    }, [currentIndex])
     return <ViewerWrapper>
          <ModalComponent size="full" close={handleClickCloseModal} open={open} slider={currentSlider}/>


          <div className='header-viewer p-2' style={{background: "rgba(237,229, 229, 1)"}}>
      <h3 className='text-uppercase m-0'>Chương 1: Tổng quan, giới thiệu môn học</h3>
    </div>
    <div className='viewer-content d-flex'>
      <div className='viewer-dot d-flex flex-column p-3' style={{width: "22%"}}>
          {lstSlider.map((item:any, index:any) => {
               return <DotItem handleClickDot={handleClickDot} className={`${item.id == currentSlider.id ? "active" : ""}`} dotItem={item} index={index} key={item.id}/>
          })}
      </div>
      <div className="viewer-slider" style={{width: "78%"}}>
        <div className="slider-item">
          <img src={currentSlider.name} alt="" />
        </div>
        <div className="slider-control d-flex justify-content-center align-items-center">

        <ButtonComponent
              icon={<FontAwesomeIcon icon={faBackward} className="me-2"/>  }
              appearance="default"
              style={{color: `${currentIndex == 0 ? "rgb(174 168 168)" : "#000"}`, fontSize: 20, background: "transparent"}}
              onClick={handleClickPrevFirstSlider}
              disabled={currentIndex == 0 ? true : false}
            />
            <ButtonComponent
              icon={ <FontAwesomeIcon icon={faCaretLeft}/>}
              appearance="default"
              style={{color: `${currentIndex == 0 ? "rgb(174 168 168)" : "#000"}`, fontSize: 20, background: "transparent"}}
              disabled={currentIndex == 0 ? true : false}
              onClick={handleClickPrev}
            />
            <InputComponent data={data} placement="topStart" value={data[currentIndex].label} placeholder={data[currentIndex].label} onChange={handleChangeInput}/>

            <ButtonComponent
              icon={<FontAwesomeIcon icon={faCaretRight} className="me-2"/>}
              appearance="default"
              style={{color: `${currentIndex == lstSlider.length - 1 ? "rgb(174 168 168)" : "#000"}`, fontSize: 20, background: "transparent"}}
              disabled={currentIndex == lstSlider.length - 1 ? true : false}
              onClick={handleClickNext}
            />
            <ButtonComponent
            style={{color: `${currentIndex == lstSlider.length - 1 ? "rgb(174 168 168)" : "#000"}`, fontSize: 20, background: "transparent"}}
            icon={<FontAwesomeIcon icon={faForward}/>}
            appearance="default"
            onClick={handleClickNextLastSlider}
            disabled={currentIndex == lstSlider.length - 1 ? true : false}
            />

      <ButtonComponent
              icon={<FontAwesomeIcon icon={faCompress}/>}
              appearance="default"
              style={{color: "#000", fontSize: 20, background: "transparent"}}

              onClick={handleClickFullScreen}
            />
        </div>
      </div>
    </div>
     </ViewerWrapper>
}
export default Viewer;