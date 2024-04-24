import React, { useState } from "react";
import excuseService from "../services/excuseService";

const AddExcuse = () => {
  const [exc, setExc] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setExc({ ...exc, [name]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await excuseService.addExcuse(exc);
      setModalOpen(false); 
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Ajouter une excuse</button>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <form className="add_excuse" method="post" onSubmit={handleAdd}>
              <input
                type="number"
                name="http_code"
                placeholder="http_code"
                value={exc.http_code}
                required
                onChange={handleChange}
              ></input>
              <input
                type="text"
                name="tag"
                placeholder="tag"
                value={exc.tag}
                required
                onChange={handleChange}
              ></input>
              <input
                type="text"
                name="message"
                placeholder="message"
                value={exc.message}
                required
                onChange={handleChange}
              ></input>
              <button type="submit" value="Ajouter">
                Valider
              </button>
            </form>
            <button onClick={() => setModalOpen(false)}>Fermer</button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddExcuse;
