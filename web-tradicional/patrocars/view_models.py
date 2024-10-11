from pydantic import BaseModel

class InputMontadora(BaseModel):
  nome: str
  pais: str
  ano: int