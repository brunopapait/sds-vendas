import Dashoard from 'pages/Dashboard';
import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/dashboard' exact component={Dashoard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;