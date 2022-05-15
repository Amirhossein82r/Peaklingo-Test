import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./containers/Dashboard";

const router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default router;
