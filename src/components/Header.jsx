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
import { useLocation } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // Navigate to browse page if user is authenticated
      if (currentUser) {
        // Only redirect if not already on a valid page
        if (location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        navigate("/");
      }
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, [navigate, location.pathname]);

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
  };

  const getGptButtonText = () => {
    // If we're on browse page and GPT search is NOT showing, display "GPT Search"
    if (location.pathname === "/browse" && !showGptSearch) {
      return "GPT Search";
    }
    // If GPT search IS showing, display "Home Page"
    else if (showGptSearch) {
      return "Home Page";
    }
    // Default fallback
    return "GPT Search";
  };
    const shouldShowGptButton = () => {
      return user && location.pathname !== "/";
    };

  return (
    <div
      className="absolute w-screen h-16 px-8 py-2 
    md:bg-gradient-to-b from-black z-50 flex flex-col
    md:flex-row justify-between items-center "
    >
      <img
        src={netflixLogo}
        alt="Netflix Logo"
        className="h-12 cursor-pointer"
        onClick={() => navigate("/browse")}
      />
      <div className="text-white flex items-center space-x-4 mx-auto md:mx-0">
        {showGptSearch && (
          <select
            name="language"
            id="language-select"
            className="p-2 py-3 bg-black text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}

        {shouldShowGptButton() && (
          <button
            className="py-2 px-4 m-2 mx-4 bg-red-800 rounded hover:bg-red-700 transition-colors"
            onClick={handleGptSearchClick}
          >
            {getGptButtonText()}
          </button>
        )}
        {user ? (
          <>
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-10 h-10 rounded-full border-2 border-black"
              />
            ) : (
              <div className="w-10 h-10 bg-white flex items-center justify-center border-2 border-black ">
                <span className="text-black text-[1.5rem] font-bold">
                  {user.displayName
                    ? user.displayName.charAt(0).toUpperCase()
                    : user.email.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <button onClick={handleSignOut} className="text-xl hover:underline">
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
