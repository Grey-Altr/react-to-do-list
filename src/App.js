import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useUser } from './context/UserContext.js';
import Auth from './components/auth/Auth.js';
import Items from './components/items/Items.js';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/items" component={Items} />
        <Route exact path="/">
          <>
            {user && <Redirect to="items" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
