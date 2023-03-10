import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {
  BsArrowRight,
  BsBuilding,
  BsCollection,
  BsToggles2,
} from "react-icons/bs";

import { Header } from "../../components";

export default function Pokemon() {


  const [pokeData,setPokeData]=useState([]);

  const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
  // const [nextUrl,setNextUrl]=useState();
  // const [prevUrl,setPrevUrl]=useState();
  // const [pokeDex,setPokeDex]=useState();

  const getAbility=async(res)=>{
    res.map(async(item)=>{
       const result=await axios.get(item.url)
       console.log("MAP DATA", result.data.abilities[0].ability.name);
       setPokeData(state=>{
           state=[...state,result.data.abilities[0]]

           state.sort((a,b)=>a.id>b.id?1:-1)
           return state;
       })
    })
 }

 const pokeFun=async()=>{

  const res=await axios.get(url);
  // setNextUrl(res.data.next);
  // setPrevUrl(res.data.previous);
  getAbility(res.data.results.abilities?.ability);
  getPokemon(res.data.results)

}
  const getPokemon=async(res)=>{
     res.map(async(item)=>{
        const result=await axios.get(item.url)
        console.log(result.data)
        setPokeData(state=>{
            state=[...state,result.data]
            state.sort((a,b)=>a.id>b.id?1:-1)
            return state;
        })
     })
  }
  useEffect(()=>{
      pokeFun();
  },[])

  //
  // const [data, setData] = useState({});

  // async function getPets() {
  //   try {
  //     const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
  //     setData(response.data.results);
  //     console.log(response.data.results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // function limit(string = "", limit = 0) {
  //   return string.substring(0, limit);
  // }

  // useEffect(() => {
  //   getPets();
  // }, []);

  return (
    <>
      {/* Header */}
      <div className="Pokemon">
      <Header>
      <div className="text-center mb-5">
            <h2 className="fw-bolder">PokeDex</h2>
            <h3>Pokémon adalah salah satu waralaba media yang 
        dimiliki oleh perusahaan permainan video Nintendo 
        dan diciptakan oleh Satoshi Tajiri pada 1995</h3>
            
          </div>
        
      </Header>
      </div>

      <section className="bg-light py-5 border-bottom">
        <Container className="px-5 my-5">
          
          <Row className="gx-5 justify-content-center">
            {pokeData !== undefined &&
              pokeData?.map((item, i) => (
                <Col key={i} lg={3} xl={3} className="padding">
                  <Card>
                    <Card.Img variant="top" gap={7} width={100} height={100} src={item.sprites.other.dream_world.front_default} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Title>{item.abilities[0].ability.name}</Card.Title>
                      <Card.Text style={{ WebkitLineClamp: 3, lineClamp: 3, textOverflow:'ellipsis' }}>
                        height = {item.height} 
                        <br></br>
                        weight = {item.weight}
                      </Card.Text>
                      
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
