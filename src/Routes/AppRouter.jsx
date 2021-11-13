import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainScreen } from "../Components/App/MainScreen";
import { LoginScreen } from "../Components/auth/LoginScreen";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { getAuth } from "@firebase/auth";
import { login } from "../actions/auth";
import { RegisterScreen } from "../Components/auth/RegisterScreen";
import { AddScreen } from "../Components/App/AddScreen";
import { startLoadingProducts } from "../actions/inventory";
import { EditScreen } from "../Components/App/EditScreen";
import { MyProfileScreen } from "../Components/App/MyProfileScreen";
export const AppRouter = () => {
  initializeApp(firebaseConfig);
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.email,user.photoURL));
        setIsLoggedIn(true);
        dispatch(startLoadingProducts(user.uid,user.email))
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);
  if (checking) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ color: "white", marginTop: "200px" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  const LoginRoute = () => {
    return <>{!isLoggedIn ? <LoginScreen></LoginScreen> : <MainScreen />}</>;
  };
  const RegisterRoute = () => {
    return (
      <>{!isLoggedIn ? <RegisterScreen></RegisterScreen> : <MainScreen />}</>
    );
  };
  const GeneralRoute = () => {
    return <>{!isLoggedIn ? <LoginScreen></LoginScreen> : <MainScreen />}</>;
  };
  const MainRoute = () => {
    return <>{isLoggedIn ? <MainScreen></MainScreen> : <LoginScreen />}</>;
  };
  const AddRoute = () => {
    return <>{isLoggedIn ? <AddScreen></AddScreen> : <LoginScreen />}</>;
  };
  const EditRoute = () => {
    return <>{isLoggedIn ? <EditScreen></EditScreen> : <LoginScreen />}</>;
  };
  const ProfileRoute = () => {
    return <>{isLoggedIn ? <MyProfileScreen></MyProfileScreen> : <LoginScreen />}</>;
  };
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/login"
            element={<LoginRoute />}
          
          />
          <Route
            path="/register"
            element={<RegisterRoute />}
          
          />
          <Route
            path="/"
            element={<MainRoute />}
           
          />
          <Route
            path="/addInventory"
            element={<AddRoute />}
           
          />
          <Route
            path="*"
            element={<GeneralRoute />}
            
          />
           <Route
            path="/edit/:editProductId"
            element={<EditRoute/>}
            
          />
            <Route
            path="/profile/:profileId"
            element={<ProfileRoute/>}
            
          />
          
        </Routes>
      </div>
    </Router>
    
  );
  
};
