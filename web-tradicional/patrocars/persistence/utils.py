from sqlmodel import create_engine

def get_engine():
  engine = create_engine('sqlite:///montadoras.db')
  return engine