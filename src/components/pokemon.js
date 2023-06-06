import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Pokemon = ({ search }) => {
  const [abilities, setAbilities] = useState([]);
  const [sprite, setSprite] = useState("");

  // search functionality
  useEffect(() => {
    try {
      fetch("https://pokeapi.co/api/v2/pokemon/" + search)
        .then((res) => res.json())
        .then((data) => {
          setAbilities(data.abilities);
          setSprite(data.sprites.other.dream_world.front_default);
        })
        .catch((error) => {
          toast.error("No pokemon with such name");
        });
    } catch (err) {
      console.log(err);
    }
  }, [search]);

  return (
    <>
      <div className="poke-info" id="pokemon-card">
        <div>
          <h1>About Pokemon</h1>
          {sprite && <img src={sprite} alt="" className="poke-icon" />}
        </div>
        <div className="info">
          <h1>Pokemon name: {search}</h1>
          <span>Abilities:</span>
          <ul>
            {abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Pokemon;
