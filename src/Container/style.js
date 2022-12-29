import Styled from "styled-components"
export const ViewerWrapper = Styled.div`
     .viewer-content {
          height: calc(100vh - 50px);
          overflow: hidden;
          .viewer-dot {
               height: 100%;
               overflow: auto;
               border-right: 1px solid #ccc;
          }
          .viewer-slider {
               flex-grow: 1;
               padding: 1rem;
               position: relative;
               .slider-item {
                    width: 100%;
                    height: 92%;
                    padding: 1rem;
                    border: 1px solid #ccc;
                    & > img {
                         width: 100%;
                         height: 100%;
                         object-fit: cover;
                    }
               }
               .slider-control {
                    width: 100%;
                    height: 8%;
                    background: #ccc;
                    position: absolute;
                    bottom: 0;
                    left: 0;
               }
          }
     }
`
export const DotItems = Styled.div`
     & > img {
          cursor: pointer;
          border: 1px solid #ccc;
     }
     & > span {
          font-weight: bold;
     }
     &.active > span {
          color:  #04AA6D;
     }
     &.active > img {
          border: 3px solid #04AA6D;

     }
`