from sqlmodel import SQLModel, Field


class Montadora(SQLModel, table=True):
  id: int | None = Field(default=None, primary_key=True)
  nome: str
  pais: str
  ano_fundacao: int