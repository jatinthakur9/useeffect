import React, { useState } from "react";
import { useEffect } from "react";

import User from "./User";

const url = "https://jsonplaceholder.typicode.com/users";
function FetchDataExample() {
  const [users, setUser] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState("");
  //asycn wait way
  async function fetchData() {
    setisLoading(true);
    const response = await fetch(url);
    if (!(response.status >= 200 && response.status <= 299)) {
      setIsError(true);

      setMsg(`${response.status}  Error`);
      setisLoading(false);
      return;
    }
    const data = await response.json();
    setUser(data);
    setisLoading(false);
  }
  useEffect(() => {
    // // promise way
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });

    //async await way

    fetchData();
  }, []);

  if (isLoading) {
    return <h1>..Loading.. </h1>;
  }

  if (isError) {
    return <h1>{msg} </h1>;
  }
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
}

export default FetchDataExample;
