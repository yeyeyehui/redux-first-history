import React from "react";

import ReactDOM from "react-dom/client";

import { store, history } from "./store";

import { Routes, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";

import { HistoryRouter } from "./redux-first-history/rr6";

import Home from "./components/Home";

import Counter from "./components/Counter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </HistoryRouter>
  </Provider>
);
