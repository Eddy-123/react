import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NotFound from "../components/NotFound";

function Definition() {
  const [word, setWord] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const { search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(" https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (!notFound) {
          setWord(data[0].meanings);
        }
      });
  }, []);
  if (notFound === true) {
    return (
      <>
        <NotFound />
        <Link to="/dictionnary">Search another</Link>
      </>
    );
  }
  return (
    <>
      {word ? (
        <>
          <h1>Here is a definition</h1>
          {word.map((meaning) => {
            return (
              <p key={uuidv4()}>
                {meaning.partOfSpeech}: {meaning.definitions[0].definition}
              </p>
            );
          })}
        </>
      ) : null}
    </>
  );
}

export default Definition;
