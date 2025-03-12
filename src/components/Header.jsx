import React, { useEffect, useState } from "react";
import netflixLogo from "../assets/netflixlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faUser);
import { useNavigate } from "react-router";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { toggleGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // Navigate to browse page if user is authenticated
      if (currentUser) {
        navigate("/browse");
      } else {
        navigate("/");
      }
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, [navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  return (
    <div className="absolute w-screen h-16 px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between items-center">
      <img src={netflixLogo} alt="Netflix Logo" className="h-12" />
      <div className="text-white flex items-center space-x-4">
       { showGptSearch&& <select
          name=""
          id=""
          className="p-2 py-3 bg-black text-white "
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier} className="">
              {lang.name}
            </option>
          ))}
        </select>}

        <button
          className="py-2 px-4 m-2 mx-4 bg-purple-900 rounded"
          onClick={handleGptSearchClick}
        >
          GPT Search
        </button>
        {user ? (
          <>
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-10 h-10 rounded-full border-2 border-black"
              />
            ) : (
              <div className="w-10 h-10  bg-red-600 flex items-center justify-center border-2 border-black">
                <span className="text-white font-bold">
                  {user.displayName
                    ? user.displayName.charAt(0).toUpperCase()
                    : user.email.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <button onClick={handleSignOut} className="text-xl">
              Sign Out
            </button>
          </>
        ) : (
          <FontAwesomeIcon icon={faUser} className="text-3xl" />
        )}
      </div>
    </div>
  );
};

export default Header;
