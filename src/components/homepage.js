import { useState, useRef, useEffect } from "react";
import Pokemon from "./pokemon";
import Header from "./header";

function Homepage() {
  //state
  const [val, setVal] = useState("pokemon");
  const [search, setSearch] = useState("");
  //ref hook
  const PokemonCardRef = useRef(null);

  //to remove the delay
  useEffect(() => {
    if (search) {
      PokemonCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [search]);

  //to search the pokemon
  const searchFunc = () => {
    setSearch(val);
  };

  return (
    <>
      <Header />
      <div className="container-wrapper">
        <div className="container">
          <div className="logo">
            <img
              className="pokemon-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
              alt="pokemon logo"
            />
            <h2>
              Search your favorite pokemon to know <br />
              its abilities and other fun facts
            </h2>
          </div>
          <div className="search-container">
            <input
              class="search-tag"
              type="text"
              name={val}
              placeholder="Enter the pokemon name"
              onChange={(e) => {
                setVal(e.target.value);
              }}
            />
            <button type="submit" onClick={searchFunc}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div ref={PokemonCardRef} className="card-wrapper">
        {search && <Pokemon search={search} setSearch={setSearch} />}
      </div>
    </>
  );
}

export default Homepage;
