
interface HelloProps{
  name?: string
}

function Hello({name = 'Visitante'}: HelloProps){
  return (
    <>
      <h2>Hello {name}!</h2>
    </>
  )
}

export default Hello