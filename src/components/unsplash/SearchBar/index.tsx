import React, { FC, useState, FormEvent } from "react";
import { Redirect } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { StyledInput, StyledIcon, StyledForm } from "./SearchBarStyle";
import { FaSearch } from "react-icons/fa";

const SearchBar: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [submittedTerm, setSubmittedTerm] = useState<string>("");

  // const history = useHistory();

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.currentTarget.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.length < 3) {
      return;
    }
    setSubmittedTerm(searchTerm);
    setSearchTerm("");
  };

  return (
    <StyledForm onSubmit={handleFormSubmit} data-testid="search-bar">
      <StyledIcon>
        <FaSearch />
      </StyledIcon>

      <StyledInput
        type="text"
        value={searchTerm}
        placeholder="Look for something you like"
        onChange={handleInputChange}
      />
      {/* Option 1 using redirect */}
      {submittedTerm && (
        <Redirect
          to={{
            pathname: `/dashboard/new-content/results/${submittedTerm}`,
            state: submittedTerm,
          }}
        />
      )}
      {/* Option 2 using useHistory and useLocation */}
      {/* {submittedTerm &&
        history.push({
          pathname: `/dashboard/new-content/results/`,
          search: `?query=${submittedTerm}`,
          state: { detail: submittedTerm },
        })} */}
    </StyledForm>
  );
};

export default SearchBar;
