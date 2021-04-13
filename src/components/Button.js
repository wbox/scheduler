import React from "react";

import "components/Button.scss";
import classNames from "classnames/bind";

export default function Button(props) {
   
   // let buttonClass = "button";   

   const buttonClass = classNames("button", {
      "button--base": props.base,
      "button--confirm": props.confirm,
      "button--danger": props.danger
   });

   // if (props.confirm) {
   //    buttonClass += " button--confirm";
   // }

   // if (props.base) {
   //    buttonClass += " button--base";
   // }

   // if (props.danger) {
   //    buttonClass += " button--danger";
   // }

   return (
      <button 
         className={buttonClass} 
         onClick={props.onClick} 
         disabled={props.disabled}
      >
      {props.children}
   </button>
   );
}
