import { useContext } from "react";

import TemaContext from "./Context";

export default function Page_one() {
  const [cor, setCor] = useContext(TemaContext);
  return (
    <div>
      <h3>{cor}</h3>
    </div>
  );
}