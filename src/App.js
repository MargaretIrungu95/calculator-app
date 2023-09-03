import { useState } from 'react';
import { evaluate } from "mathjs";
import './App.css';

const App = () => {

  const [add, setAdd] = useState("");
  const [ans, setAns] = useState("");

  const allButtons = ["7", "8", "9", "C", "4", "5", "6", "*", "1", "2", "3", "/", "+", "0", "-", "=", "sqrt", "(", ")", "ans", "^"];

  const handleClick =(string) => {
    if(string === "="){
        let expression = add;
        setAdd(evaluate(expression));
      try {
        const res = evaluate(expression);
        setAns (res.toString());
      }
      catch (error) {
          setAns ("Error");
      }
  
    } else if (string === "C"){
      setAdd("");
      setAns("");
    } else if (string === "(") {
      setAdd(add + "(");
    } else if (string === ")") {
      setAdd(add + ")");
    }else if (string === "^") {
      setAdd(add + "^");
    }else if (string === "ans") {
      setAdd(add + ans);
    }else if (string === "sqrt") {
      setAdd(add + "sqrt(");
    }
    else{
      setAdd(add + string);
    }
  }

  return (
    <div className="App">
      <h1 className="resultDisplay">{add}</h1>
      <div className={"btnWrap"}>
        {
          allButtons.map((button, index) =>{
            return (
              <button  className="calcButtons"  onClick={() => handleClick(button)} key={index}>{button}</button>
            )
          })
        }
      </div>
    </div>
  );
}
export default App;
