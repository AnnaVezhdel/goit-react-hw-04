import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import s from "./SearchBar.module.css";

const SearchBar = ({ setQuery }) => {
  const [localQuery, setLocalQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localQuery.trim()) {
      toast.error("Please enter a search term to find images.");
      return;
    }
    setQuery(localQuery);
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          placeholder="Search images and photos"
        />
        <button type="submit">
          <CiSearch />
        </button>
      </form>
      <Toaster
        toastOptions={{
          position: "top-right",
          style: {
            border: "1px solid #713200",
            padding: "10px",
            color: "#713200",
          },
        }}
      />
    </header>
  );
};

export default SearchBar;
