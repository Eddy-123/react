import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dictionary() {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button
        onClick={() => {
          navigate("/definition/" + word, { replace: true });
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Dictionary;
