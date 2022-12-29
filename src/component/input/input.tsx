import { InputPicker } from 'rsuite';
const InputComponent:React.FC<any> = props => {
     return <InputPicker data={props.data} onChange={props.onChange} placement={props.placement}  value={props.value} placeholder={props.placeholder}/>
}
export default InputComponent;