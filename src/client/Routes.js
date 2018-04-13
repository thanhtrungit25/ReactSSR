import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";
import App from "./App";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...AdminsListPage,
        path: "/admins"
      },
      {
        ...UsersListPage,
        path: "/users"
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
