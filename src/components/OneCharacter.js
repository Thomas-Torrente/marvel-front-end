import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const OneCharacter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();
  return (
    <>
      <div></div>
    </>
  );
};

export default OneCharacter;
