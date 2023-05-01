
function Square(props){
    return <div className={props.value==="X"?"square x":props.value==="O"?"square o":"square"} onClick={()=>props.handleClick()}><h1>{props.value}</h1></div>;
}
export default Square;