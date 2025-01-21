from django.db import models
from django.core.exceptions import ValidationError
from django.utils import timezone


class Montadora(models.Model):
    nome = models.CharField(max_length=100, null=False, blank=False)
    pais = models.CharField(max_length=100)
    ano_fundacao = models.IntegerField('Ano de Fundação')

    def __str__(self):
        return self.nome
    
    def idade(self):
        return timezone.now().year - self.ano_fundacao
    
def validate_ano_lancamento(value):
        current_year = timezone.now().year
        if value < 1899 or value > current_year:
            raise ValidationError(f'O ano de lançamento deve ser entre 1899 e {current_year}.')


MOTOR_CHOICES = (
    ('1.0', 'Motor 1.0'),
    ('1.3', 'Motor 1.3'),
    ('1.4', 'Motor 1.4'),
    ('1.6', 'Motor 1.6'),
    ('1.8', 'Motor 1.8'),
    ('2.0', 'Motor 2.0'),
    ('2.2', 'Motor 2.2'), 
)


class Modelo(models.Model):
    nome = models.CharField(max_length=100, null=False, blank=False)
    ano_lancamento = models.IntegerField('Ano de Lançamento', validators=[validate_ano_lancamento])
    preco_referencia = models.DecimalField(max_digits=10, decimal_places=2)
    motor = models.CharField(choices=MOTOR_CHOICES, max_length=100)
    cor = models.CharField(max_length=50)

    montadora = models.ForeignKey(
         Montadora, 
         on_delete=models.RESTRICT,
         related_name='modelos')

    def __str__(self):
        return self.nome
