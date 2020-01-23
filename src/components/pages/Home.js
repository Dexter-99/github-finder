import React, { Fragment } from "react";
import Search from "../layouts/Search";

import Users from "../users/Users";
export const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />{" "}
    </Fragment>
  );
};
export default Home;
