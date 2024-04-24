import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import excuseService from "../services/excuseService";

const HttpCodePage = () => {
  const { id } = useParams();
  const [excuse, setExcuse] = useState([]);

  const fetchExcuseById = async () => {
    try {
      const response = await excuseService.fetchExcuseById(id);
      setExcuse(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchExcuseById();
  }, []);

  return (
    <div>
      <h1>Http Code</h1>
      <p>Http Code : {excuse.http_code}</p>
      <p>Tag : {excuse.tag}</p>
      <p>Message : {excuse.message}</p>
    </div>
  );
};

export default HttpCodePage;
