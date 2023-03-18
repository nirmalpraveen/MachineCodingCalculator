import React from "react";
import "./styles.css";

export default function App() {
  const [str, setStr] = React.useState("");

  const captureInput = (event) => {
    let regex = /[A-Z]/gi;
    if (event.target.value.match(regex)) {
      alert("Please enter just numbers");
      let arr = event.target.value.split("");
      let newStr = arr.splice(0, arr.length - 2).join("");
      document.getElementsByClassName("result")[0].value = newStr;
    } else {
      setStr(event.target.value);
    }
  };

  const buttonClickHandler = (event) => {
    switch (event.target.textContent) {
      case "+":
        document.getElementsByClassName("result")[0].value += "+";
        break;
      case "-":
        document.getElementsByClassName("result")[0].value += "-";
        break;
      case "*":
        document.getElementsByClassName("result")[0].value += "*";
        break;
      case "/":
        document.getElementsByClassName("result")[0].value += "/";
        break;
      case "=":
        try {
          document.getElementsByClassName("result")[0].value = eval(
            document.getElementsByClassName("result")[0].value
          );
        } catch (e) {
          document.getElementsByClassName("result")[0].value = e;
        }
        break;
      default:
    }
  };

  return (
    <div className="App">
      <input type="text" className="result" onChange={captureInput}></input>
      <div className="button-group" onClick={buttonClickHandler}>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
      </div>
    </div>
  );
}
