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
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
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
    return showGptSearch ? "Homepage" : "GPT Search";
  };

  const shouldShowGptButton = () => {
    return location.pathname === "/browse";
  };

  const isLoginPage = location.pathname === "/";

  return (
    <div
      className={`w-full px-4 md:px-8 py-2 ${
        isLoginPage
          ? "bg-black"
          : "bg-gradient-to-b from-black/80 to-transparent"
      } z-50`}
    >
      <div className="flex items-center justify-between">
        <img
          className="w-24 md:w-44 cursor-pointer"
          src={netflixLogo}
          alt="Netflix Logo"
          onClick={() => navigate("/browse")}
        />
        {user && (
          <div className="flex items-center gap-4">
            {shouldShowGptButton() && (
              <button
                onClick={handleGptSearchClick}
                className="px-2 ml-3 py-1 text-[.8rem] md:py-2  md:mx-4 md:my-2 bg-purple-800 rounded-lg opacity-80 hover:opacity-100 text-white"
              >
                {getGptButtonText()}
              </button>
            )}
            <select
              className="px-[0.3rem] py-[0.5rem] text-[0.8rem]  my-1 md:p-2 md:mx-4 md:my-2 bg-gray-800 text-white rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUser} className="text-white text-xl" />
              <button
                onClick={handleSignOut}
                className="text-white text-sm hover:text-gray-300"
              >
                (Sign Out)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
