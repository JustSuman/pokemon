import { useEffect, useState } from "react";

const Poke = ({ poke }) => {
  //states
  const [img, setImg] = useState();
  const [ability, setAbility] = useState("");

  //effect
  useEffect(() => {
    fetch(poke.url)
      .then((res) => res.json())
      .then((data) => {
        setImg(data.sprites.other.dream_world.front_default);
        setAbility(data.abilities[0].ability.name);
      });
  }, [poke.url]);

  return (
    <div className="poke-info">
      <img src={img} alt="" className="poke-icon" />
      <div className="info">
        <h1>Pokemon name: {poke.name}</h1>
        <span>Ability: {ability}</span>
      </div>
    </div>
  );
};

const AllPokemon = () => {
  //state
  const [fav, setFav] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  console.log(fav);
  return (
    <>
      <h1>All Pokemons</h1>
      <div className="card-container">
        {data && data.map((i) => <Poke poke={i} setFav={setFav} fav={fav} />)}
      </div>
    </>
  );
};

export default AllPokemon;
