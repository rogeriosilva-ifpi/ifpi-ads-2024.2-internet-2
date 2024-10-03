from fastapi import FastAPI, Request, Form
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse

app = FastAPI()

app.mount('/static', StaticFiles(directory='static'), name='static')

templates = Jinja2Templates(directory='templates')


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