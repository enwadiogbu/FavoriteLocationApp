import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Emeka Nwadiogbu, Jr.",
      image:
        "https://media1.picsearch.com/is?pQU4m8AHqhBx3-L37RO7eMXxTgUcvU-CX-Xx-l7Rxvg&height=219",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
