import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {
  BsArrowRight,
  BsBuilding,
  BsCollection,
  BsToggles2,
} from "react-icons/bs";

import { Header } from "../../components";

export default function Home() {
  const [data, setData] = useState({});

  async function getPets() {
    try {
      const response = await axios.get("https://rickandmortyapi.com/api/character/");
      setData(response.data);
      console.log(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  }

  useEffect(() => {
    getPets();
  }, []);

  return (
    <>
      {/* Header */}

      <div className="PM">
        <Header>
            <div className="text-center mb-5">
              <h2 className="fw-bolder">Pocket Mortys</h2>
              <h3>Pocket Mortys adalah website yang berisi character-character Pokemon juga Rick and Morty</h3>
              
            </div>
        </Header>
      
    </div>
      
    </>
  );
}