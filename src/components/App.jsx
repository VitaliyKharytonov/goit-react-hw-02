import { useState } from "react";
import  Description  from "./Description/Description.jsx";


export default function App() {
  const {
    good: 0,
    neutral: 0,
    bad: 0,
} = useState();
  return (
    <>
      <Description />
    </>
  )
}


