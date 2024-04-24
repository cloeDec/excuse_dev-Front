import React, { useState, useEffect } from "react";
import excuseService from "../services/excuseService";

const ExcusesDeDev = () => {
  const [excuses, setExcuses] = useState([]);
  const [excuseIndex, setExcuseIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchExcuse = async () => {
      try {
          const response = await excuseService.fetchExcuse();
          setExcuses(response.data);
      } catch (error) {
          console.log(error);
      }
  }

  const generateRandomExcuse = () => {
    setLoading(true);
    setTimeout(() => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * excuses.length);
      } while (newIndex === excuseIndex);
      setExcuseIndex(newIndex);
      setLoading(false);
    }, Math.floor(Math.random() * 4000) + 1000);
  };

  useEffect(() => {
    fetchExcuse();
  }, []);

  return (
    <div className="excuses-container">
      <h1>Excuses de Dev</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p className="excuse">{excuses[excuseIndex]?.message}</p>
      )}
      <button onClick={generateRandomExcuse}>Générer une nouvelle excuse</button>
    </div>
  );
};

export default ExcusesDeDev;

