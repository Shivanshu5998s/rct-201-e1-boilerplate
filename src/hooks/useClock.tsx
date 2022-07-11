import { useEffect, useState } from "react";
type clockFun = (a: number) => void;

const useClock = () => {
  // TODO
  // refer readme.md for what to return
    const [time, setTime] = useState(new Date());


    useEffect(() => {
      let timerId = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(timerId);
    }, []);
  
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

  return {hours , minutes, seconds}
};

export default useClock;