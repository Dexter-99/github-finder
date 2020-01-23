import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";

import GithubContext from "../../context/github/githubContext";

function Users() {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid-3">
        {users.map(user => (
          <UserItem
            key={user.id}
            name={user.login}
            image={user.avatar_url}
            link={user.html_url}
          />
        ))}
      </div>
    );
  }
}

export default Users;
