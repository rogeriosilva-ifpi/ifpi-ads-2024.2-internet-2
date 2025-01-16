from django.db import models
from django.core.exceptions import ValidationError
from django.utils import timezone


def validate_ano_fundacao(value):
        current_year = timezone.now().year
        if value > current_year:
            raise ValidationError(f'O ano de fundação não pode ser no futuro. Ano fornecido: {value}')
        if value < current_year - 200:
            raise ValidationError(f'O ano de fundação não pode ser superior a 200 anos atrás. Ano fornecido: {value}')



class Montadora(models.Model):
    nome = models.CharField(max_length=100)
    pais = models.CharField(max_length=50)
    
    ano_fundacao = models.IntegerField(validators=[validate_ano_fundacao])

    def __str__(self):
        return self.nome


MOTORIZACAO_CHOICES = [
    ('1.0', 'Motor 1.0'),
    ('1.4', 'Motor 1.4'),
    ('1.6', 'Motor 1.6'),
    ('2.0', 'Motor 2.0'),
]

CAMBIO_CHOICES = [
    ('manual', 'Manual'),
    ('automatico', 'Automático'),
]

class Modelo(models.Model):
    nome = models.CharField(max_length=100)
    
    motorizacao = models.CharField(max_length=3, choices=MOTORIZACAO_CHOICES)
    tipo_cambio = models.CharField(max_length=10, choices=CAMBIO_CHOICES)
    em_producao = models.BooleanField(default=True)

    montadora = models.ForeignKey(Montadora, on_delete=models.RESTRICT, related_name='modelos')
    
    def __str__(self):
        return self.nome
