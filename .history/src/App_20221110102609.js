
export default function App() {
  return (
    <div className="App">
      <h1>Hollá Mundo</h1>
      <Aluno nome="Ana Karolyne"/>
    </div>
  );
}

function Aluno( {nome} ) {
  return(
    <div>Bem vindo {nome}</div>
  )
}
