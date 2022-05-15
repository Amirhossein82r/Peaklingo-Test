import React, { FC } from "react";

type Props = {
  children?: React.ReactNode;
};
const App: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default App;
