import React from "react";

import "../App.css";
function User({ name, email, id, username, website, company, address }) {
  return (
    <div className="Boxx">
      <h4> id : {id}</h4>
      <h4> name : {name}</h4>
      <h4> email : {email}</h4>
      <h4> username : {username}</h4>
      <h4> website : {website}</h4>
      <h4> companyName : {company.name}</h4>
      <h4> address : {address.city}</h4>
    </div>
  );
}

export default User;
