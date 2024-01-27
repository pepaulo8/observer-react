import React from "react";
 
interface IBox {
 color: string;
 children?: React.ReactNode;
}
 
export const Box: React.FC<IBox> = ({ color, children }) => {
 return (
   <div style={{ display: "flex", flex: 1, background: color, height: 300 }}>
     {children}
   </div>
 );
};