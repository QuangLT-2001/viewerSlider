import {Modal} from "rsuite"
const ModalComponent:React.FC<any> = props => {
     return  <Modal size={props.size} onClose={props.close} open={props.open} >
           <Modal.Header>
          </Modal.Header>
          <Modal.Body style={{width: "100%", height: "100vh"}}>
               <img src={props.slider.name} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
          </Modal.Body>
   </Modal>
}
export default ModalComponent;