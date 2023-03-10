import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function DetailArticle() {
  const { detailId } = useParams();

  const [data, setData] = useState({});

  async function getPets() {
    try {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character/" + detailId
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPets();
  }, []);

  return (
    <>
      
      {/* <div>Detail Article</div>
      <img src={data.image}/>
      <div>NAME : {data.name}</div>
      <div>STATUS : {data.status}</div>
      <div>GENDER : {data.gender}</div>
      <div>SPECIES : {data.species}</div> */}

      <Card className="text-center" style={{ width: '25rem' }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          <div>STATUS : {data.status}</div>
          <div>GENDER : {data.gender}</div>
          <div>SPECIES : {data.species}</div>
        </Card.Text>
      </Card.Body>
    </Card>

    </>
  );
}
