from sqlmodel import Session, select
from .utils import get_engine
from patrocars.models import Montadora

class MontadoraRepository():

  def __init__(self):
    self.session = Session(get_engine())

  def get_all(self):
    sttm = select(Montadora)
    montadoras = self.session.exec(sttm).all()
    return montadoras
  
  def save(self, montadora: Montadora):
    self.session.add(montadora)
    self.session.commit()
    self.session.refresh(montadora)
    return montadora