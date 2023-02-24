import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getApiData } from "./redux/greetingSlice";

const Greeting = () => { 

  const dispatch = useDispatch();
  const newGreetings = useSelector((state) => state.greeting.greetingData);

  useEffect(() => {
    dispatch(getApiData());
  }, [dispatch]);
  
  return (
    <>
      <p>Greetings in Different Languages</p>
      {newGreetings.map((greeting) => (
          <div key={greeting.id}>
            <h2>{greeting.greeting}</h2>
          </div>
      ))}
    </>
  )
}

export default Greeting;