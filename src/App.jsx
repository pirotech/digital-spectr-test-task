import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { history, store } from "./store";
import {Layout} from "antd";
import MainPage from "./components/mainPage/MainPage";
import "./shared/styles/app.scss";
import 'antd/dist/antd.css';

const { Content } = Layout;

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout>
          <Content>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Redirect to="/" />
            </Switch>
          </Content>
        </Layout>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
