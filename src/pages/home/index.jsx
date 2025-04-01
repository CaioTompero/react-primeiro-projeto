import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import {AddButton, Container, Product, TrashButton } from './styled'

//react Hooks
//userRef
//o que fizemos agora? Eu importei o inputRef, peguei o userRef que importei e coloquei 
//ele dentro de uma variavel e declarei dentro do log o inputrRef

//UseState/estado -> é uma variavel que toda vez que troca de valor a tela ira recarregar


function Home() {
  const [products, setproducts] = useState([])
  const inputRef = useRef()

function cliqueiNoBotao() {
    setproducts([{id: v4(), nome: inputRef.current.value} , ...products])
    inputRef.current.value=''
 
    // products.push(inputRef.current.value); o push serve para pegar o que tem dentro do meu input e colocar dentro do meu array
}
  function delectProduct(id) {
    setproducts(products.filter(products =>  products.id !== id))
    
  }

  return (


    <Container>

      <h1>Lista de compras ?</h1>
      <input placeholder="produtos..." ref={inputRef} />
      <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>

      {
        products.map((products) => (
          <  Product key={products.id}>
            <p>{products.nome}</p>
            <TrashButton  onClick={() => delectProduct(products.id)}>🗑️</TrashButton >
            </Product>
        ))
      }

    </Container>
    //o que estou fazendo ?  cliqueiNoBotao eu adiciono o que tem dentro do meu input dentro 
    // do meu array de product conforme meu array vai populando eu coloco meu array na tela
    //OBS: no react sou obrigado a envolver meus elementos em um elemento maior ou seja eles tem que ter um pai
  )
}

export default Home
