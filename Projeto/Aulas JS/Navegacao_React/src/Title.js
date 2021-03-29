import { useEffect } from "react";

const Title = ({ text }) => {
  useEffect(() => {
    console.log("Montagem");
    return () => {
      console.log("Desmontagem");
    };
  }, []);

  /*     useEffect(() => {
        console.log("change Title prop text");
    },[text]); */

  return <h1>{text}</h1>;
};

/* const Title = (props) => {
    return <h1>{props.text}</h1>
} */

export default Title;
