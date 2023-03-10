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

export default function Mor() {
  const [data, setData] = useState({});

  async function getMor() {
    try {
      const response = await axios.get("https://rickandmortyapi.com/api/character/");
      setData(response.data);
      console.log(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMor();
  }, []);

  return (
    <>
      {/* Header */}
      <div className="Mor">
      <Header>
      <div className="text-center mb-5">
            <h2 className="fw-bolder">Rick and Morty</h2>
            <h3>Rick and Morty adalah komedi situasi fiksi ilmiah animasi dewasa Amerika yang dibuat oleh Justin Roiland dan Dan Harmon untuk blok pemrograman malam hari Cartoon Network, Adult Swim.</h3>
            
          </div>
        
      </Header>
      </div>
      {/* Section */}
      
      {/* Article */}
      <section className="bg-light py-5 border-bottom">
        <Container className="px-5 my-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder">New Articles</h2>
            <p className="lead mb-0">Lorem ipsum dolor sit amet</p>
          </div>
          <Row className="gx-5 justify-content-center">
            {data !== undefined &&
              data?.results?.slice(0, 20).map((item, i) => (
                <Col key={i} lg={6} xl={4} className="padding">
                  <Card>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text style={{ WebkitLineClamp: 3, lineClamp: 3, textOverflow:'ellipsis' }}>
                        
                      </Card.Text>
                      <div className="d-grid">
                        <Button
                          href={`/articles/detail/${item.id}`}
                          variant="outline-primary">
                          Details
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </>
  );
}