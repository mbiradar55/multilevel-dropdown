import "./styles.css";
import axios from "axios";
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import Question from "./Question";

/*
 * Subjects covered by coding challenge
 * ------------------------------
 * 1. Naming Convention
 * 2. Debugging
 * 3. Data Structures and Algorithms
 * 4. React and TypeScript
 * 5. Calling API
 * 6. HTML & CSS styling
 *
 */

const getToken = async (setToken: Dispatch<SetStateAction<string>>) =>
  await axios
    .post("https://interview-questions-dbs.herokuapp.com/login")
    .then((res) => {
      setToken(res.data.token);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });

const getData = async (
  token: string,
  setMenu: Dispatch<SetStateAction<any | undefined>>,
  setOldMenu
) => {
  // Add REST API call here to get data using token retrieved from first API
  // (https://interview-questions-dbs.herokuapp.com/welcome (GET))
  // Header: { headers: { Authorization: 'Bearer <<token>>'} }

  await axios
    .get("https://interview-questions-dbs.herokuapp.com/welcome", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => {
      setMenu(res.data.data);
      setOldMenu(res.data.data);
    })
    .catch((error) => {});
};

const App = () => {
  const [token, setToken] = useState("");
  const [menu, setMenu] = React.useState<any>([]);
  const [back, setBack] = React.useState(false);
  const [oldmenu, setOldMenu] = React.useState<any>([]);
  const [newmenu, setNewMenu] = React.useState<any>([]);

  useEffect(() => {
    getToken(setToken);
    //You can make another API call here to set dropdown menu data
    getData(token, setMenu, setOldMenu);
  }, [token]);

  const handleMenu = (oldMenu: any | undefined, newMenu: any = []) => {
    // Handle Menu data here
    setMenu(newMenu);
    setBack(true);
    setNewMenu(newMenu);
    //setOldMenu(oldMenu);
  };

  const handleBack = () => {
    // Handle Back Button here
    setBack(false);
    setMenu(oldmenu);
    //console.log("oldmenu", oldmenu);
  };

  return (
    <div className="flex justify-center">
      {/* Start component code here */}
      {/* Code above this line or comment the line below when starting */}
      {/* <Question /> */}
      <div className="vertical-menu">
        {back && (
          <a key="1" href="/#" onClick={handleBack}>
            Back
          </a>
        )}
        {menu.map((menudata) => {
          return (
            <>
              <a
                href="/#"
                key={menudata.name}
                onClick={() =>
                  handleMenu(menudata.name, menudata.children.data)
                }
              >
                {menudata.name}
              </a>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default App;
