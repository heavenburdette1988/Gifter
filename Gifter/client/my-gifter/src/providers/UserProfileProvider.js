import React, { useState } from "react";

export const UserProfileContext = React.createContext();

export const UserProfileProvider = (props) => {
    const [users, setUsers] = useState([]);

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const getCurrentUser = () => {
        const currentUser = localStorage.getItem("gifterUser");
    
        return currentUser;
      };

      const login = (userObject) => {
        
        return fetch(`api/userprofile/getbyemail?email=${userObject.email}`)
        
          .then((r) => r.json())
          .then((userObjFromDB) => {
                localStorage.setItem("gifterUser", JSON.stringify(userObjFromDB));
                if(userObjFromDB.status !== 404){
                setIsLoggedIn(true)
            } else {
                    setIsLoggedIn(false)
                }
                console.log(userObjFromDB)
          })
        //   .then(() => setIsLoggedIn(true))
        //chaining
      };
    
      const register = (userObject) => {
        fetch("/api/userprofile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userObject),
        })
          .then((response) => response.json())
          .then((userObject) => {
            localStorage.setItem("gifterUser", JSON.stringify(userObject));
          });
      };
    
      const logout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
      };

    const getAllUsers = () => {
        return fetch(`https://localhost:44369/api/userprofile`)
        .then((res) => res.json())
        .then(setUsers);
    }

    const getUser = (id) => {
        return fetch(`https://localhost:44369/api/userprofile/userposts/${id}`)
        .then((res) => res.json());
    };         

    return (
        <UserProfileContext.Provider value={{ users, isLoggedIn, getAllUsers, getUser, getCurrentUser, register, logout,login }}>
            {props.children}
        </UserProfileContext.Provider>
    );
};