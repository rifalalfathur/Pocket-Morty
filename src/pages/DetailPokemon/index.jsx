import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function DetailArticle() {

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
 const getMoves=async(res)=>{
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


  // const { detailId } = useParams();

  // const [data, setData] = useState({});

  // async function getPets() {
  //   try {
  //     const response = await axios.get(
  //       "https://rickandmortyapi.com/api/character/" + detailId
  //     );
  //     setData(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   getPets();
  // }, []);

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
