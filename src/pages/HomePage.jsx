import React, { useEffect, useState } from "react";
import ExcusesDeDev from "../components/ExcuseDev";
import AddExcuse from "../components/AddExcuse";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ExcusesDeDev />
      <AddExcuse isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default HomePage;
