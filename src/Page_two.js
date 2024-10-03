import { useContext } from "react";

import TemaContext from "./Context";

export default function Page_two() {
  const [tema, time] = useContext(TemaContext);
  return (
    <div>
      <h3>{time}</h3>
    </div>
  );
}