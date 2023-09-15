import { useState, useEffect } from "react";
import axios from "axios";

function useFlip() {
  const [isFacingUp, setIsFacingUp] = useState(true);

  const flipCard = () => {
    setIsFacingUp((isUp) => !isUp);
  };

  return [isFacingUp, flipCard];
}

function useAxios(baseURL) {
  const [data, setData] = useState([]);
  const [urlExtension, setUrlExtension] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(baseURL + urlExtension);
      setData((data) => [...data, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (urlExtension !== "") {
      fetchData();
    }
  }, [urlExtension]);

  return [data, setUrlExtension];
}

export { useFlip, useAxios };

