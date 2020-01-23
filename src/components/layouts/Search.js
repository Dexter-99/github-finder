import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please Enter Something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="#search" className="lead">
          Search User
        </label>
        <input
          type="text"
          id="search"
          name="text"
          placeholder="Search Users ...."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn btn-dark btn-block"
        />
        {githubContext.users.length > 0 && (
          <button
            className="btn btn-light btn-block"
            onClick={githubContext.clearUsers}
          >
            Clear Users
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
