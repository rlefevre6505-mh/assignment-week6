import TextField from "@mui/material/TextField";

export default function Header() {
  return (
    <header>
      <h1>Daily Dose of Dogs</h1>
      <div className="search-div">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
        {/* <label htmlFor="site-search">Search the site:</label>
        <input type="search" id="search-bar" name="q" />
        <button className="search-button">Search</button> */}
      </div>
    </header>
  );
}
