import logo from "./logo.svg";
import "./App.css";
import Footer, { MenuFooter, PI } from "./components/Footer";
import React, { useState } from "react";
import { Person } from "./pages/Person";
import { Category } from "./pages/Category";
import Login from "./pages/Login";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AuthenContext, AuthenProvider } from "./context/AuthenContext";
import { useContext } from "react";
import { useAuth } from "./hook/useAuth";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CategoryRedux } from "./pages/CategoryRedux";
function App() {
  return (
    <>
    <Provider store={store}>
      <AuthenProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Navigate to="/dashboard/category" />} />
              <Route path="category" element={<Category />} />
              <Route path="person" element={<Person />} />
              <Route path="category-redux" element={<CategoryRedux />} />
            </Route>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/hello/:name" element={<Hello />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthenProvider>
      </Provider>
    </>
  );
}

function Hello() {
  const { name } = useParams();
  return <h1>Hello {name}</h1>;
}

function DashboardLayout() {
  let { loading, user, logout } = useAuth();

  if(loading) return (
    <div>Loading..............</div>
  );

  if (user)
    // != null, undefined
    return (
      <div>
        <h2>Hello {user.name} </h2>
        <button onClick={logout}>Logout</button>
        <Outlet />
        <h1>Footer</h1>
      </div>
    );
  else return <Navigate to="/login" />;
}

function Menu() {
  return (
    <ul>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
      <li>
        <Link to={"/dashboard/category"}>Category</Link>
      </li>
      <li>
        <Link to={"/dashboard/category-redux"}>Category Redux</Link>
      </li>
      <li>
        <Link to={"/dashboard/person"}>Person</Link>
      </li>
    </ul>
  );
}
function NotFound() {
  return <h1>404</h1>;
}
export default App;
