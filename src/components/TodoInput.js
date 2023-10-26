import React,{useState} from "react";

function TodoInput(props) {
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value) /* harr change ke baad call hoga */
        }}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" 
      onClick={()=>{
        props.addList(inputText)
        setInputText("") /* input box ko clear kareyga */
      }}>+</button>      
    </div>
  );
}

export default TodoInput;
