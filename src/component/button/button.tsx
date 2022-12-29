import {Button} from "rsuite"
const ButtonComponent:React.FC<any> = (props) => {
     return <Button disabled={props.disabled} appearance={props.appearance} color={props.color} style={props.style} onClick={props.onClick}>
          {props.icon}
          {props.name}
     </Button>
}
export default ButtonComponent;