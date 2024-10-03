import { useContext } from "react";

import TemaContext from "./Context";

export default function Page_one() {
  const [tema, time] = useContext(TemaContext);
  return (
    <div>
      <h3>{time}</h3>
    </div>
  );
}