import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Routes, Route, useNavigate } from "react-router";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Browse" element={<Browse />} />
      </Routes>
    </main>
  );
};

export default Body;
