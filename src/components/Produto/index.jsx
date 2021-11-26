import React, { useState, useEffect } from 'react';
import api from '../../Services/api';

function Produto(){

    const [data,setData] = useState([])

const getProdutos = async()=>{
    fetch("https://ecommerce-residencia.herokuapp.com/produto").then((response)=> response.json())
    .then((responseJson)=>(setData(responseJson)
    ))
}

useEffect(
    ()=>{
        getProdutos()
    },[]
)
return(
    <div><h1>Listar</h1>
   
        <body>
            {Object.values(data).map(produto =>(
              <div key={produto.id}>
                  <div>{produto.id}</div>
                  <div>{produto.nome}</div>
                  <div><img src={`${produto.fotoLink}`}/></div>
                  <div>R$:{produto.valor}</div>






              </div>
            ))}
        </body>
   
    
    
    
    
    
    </div>
   
)


}

export default Produto;