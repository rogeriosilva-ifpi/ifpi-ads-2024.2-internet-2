from typing import Annotated
from fastapi import FastAPI, Request, Form
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, RedirectResponse
from pydantic import BaseModel
from sqlmodel import SQLModel

from .models import Montadora
from .persistence.utils import get_engine
from .persistence.montadora_repository import MontadoraRepository
from .view_models import InputMontadora

app = FastAPI()

app.mount('/static', StaticFiles(directory='static'), name='static')

templates = Jinja2Templates(directory='templates')

# Montadora
SQLModel.metadata.create_all(get_engine())

# montadoras = ['FIAT', 'Toyota', 'Nissan', 'Hyundai']
# montadoras: list[Montadora] = []

repository = MontadoraRepository()

@app.get('/montadoras_list')
def montadora_list(request: Request):
  montadoras = repository.get_all()


  return templates.TemplateResponse(
    request=request, 
    name='montadora_list.html', 
    context={'montadoras': montadoras}
  )


@app.get('/montadoras_form')
def montadora_form(request: Request):
  return templates.TemplateResponse(request, 'montadora_form.html')


class MontadoraForm(BaseModel):
  nome: str


@app.post('/montadora_save')
def montadora_save(request: Request, input: Annotated[InputMontadora, Form()]):
  # Check --> pydantic model_dump
  montadora = Montadora(nome=input.nome, pais=input.pais, ano_fundacao=input.ano)
  repository.save(montadora)
  return RedirectResponse('/montadoras_list', status_code=303)





@app.get('/hello', response_class=HTMLResponse)
def hello(request: Request):
  return templates.TemplateResponse(
    request, 'index.html', context={'name': 'João'}
  )


@app.post('/saudacao')
def saudacao(request: Request, name: str = Form(...)):
  return templates.TemplateResponse(
    request, 'index.html', context={'name': name}
  )