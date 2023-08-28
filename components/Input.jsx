
const Input = ({ query, setQuery,search }) => {
    return (
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={search}
      />
    );
  };
  
  export default Input;
  