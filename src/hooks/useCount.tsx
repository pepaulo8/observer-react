import { useState } from "react";
 
const randomNumber = (min: number, max: number) => {
 // min and max included
 return Math.floor(Math.random() * (max - min + 1) + min);
};
 
export const useCount = () => {
 const [count, setCount] = useState(0);
 
 const randomCount = () => {
   setCount(randomNumber(0, 1000));
 };
 
 return { count, randomCount };
};