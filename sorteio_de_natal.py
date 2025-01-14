import random

def main():
  arquivos = open('convidados.txt')
  alunos = list(map(str.strip, arquivos.readlines()))

  random.shuffle(alunos)
  random.shuffle(alunos)
  random.shuffle(alunos)
  
  contador = 0
  
  for aluno in alunos:
    contador += 1
    print(aluno)
    if contador % 2 == 0:
      print('-----' * 4)
    

main()