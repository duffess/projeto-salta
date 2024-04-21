from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver
#from datetime import datetime

LISTA_ESTADO = (('AC', 'AC'),
                ('AL', 'AL'),
                ('AP', 'AP'),
                ('AM', 'AM'),
                ('BA', 'BA'),
                ('CE', 'CE'),
                ('DF', 'DF'),
                ('ES', 'ES'),
                ('GO', 'GO'),
                ('MA', 'MA'),
                ('MT', 'MT'),
                ('MS', 'MS'),
                ('MG', 'MG'),
                ('PA', 'PA'),
                ('PB', 'PB'),
                ('PR', 'PR'),
                ('PE', 'PE'),
                ('PI', 'PI'),
                ('RJ', 'RJ'),
                ('RN', 'RN'),
                ('RS', 'RS'),
                ('RO', 'RO'),
                ('RR', 'RR'),
                ('SC', 'SC'),
                ('SP', 'SP'),
                ('SE', 'SE'),
                ('TO', 'TO'))
LISTA_NORTE = ['AC', 'AP', 'AM', 'PA', 'RO', 'RR', 'TO']
LISTA_NORDESTE = ['AL', 'BA', 'CE', 'MA', 'PB', 'PE', 'PI', 'RN', 'SE']
LISTA_CENTROOESTE = ['DF', 'GO', 'MT', 'MS']
LISTA_SUDESTE = ['ES', 'MG', 'RJ', 'SP']
LISTA_SUL = ['PR', 'RS', 'SC']

class Marca_Base(models.Model):
    marca = models.CharField(max_length=50, unique=True)
    bu = models.CharField(max_length=20)
    nucleo_regional = models.CharField(max_length=50)
    
    def __str__(self):
        return self.marca    

class Unidade_Base(models.Model):
    marca = models.ForeignKey(Marca_Base, on_delete=models.CASCADE, to_field='marca')
    unidade_operacoes = models.CharField(max_length=50, unique=True)
    unidade_financeiro = models.CharField(max_length=50)
    estado = models.CharField(choices=LISTA_ESTADO, max_length=5)
    regiao = models.CharField(max_length=10, blank=True)
    endereco = models.CharField(max_length=300)
    diretor_unidade = models.CharField(max_length=50)
    
    def __str__(self):
        return self.unidade_operacoes

class NaturezaOrcamentaria_Base(models.Model):
    linha_orc = models.CharField(max_length=100, unique=True)
    n_linha_orc = models.CharField(max_length=10)
    alocacao_dre = models.CharField(max_length=50)
    
    def __str__(self):
        return self.linha_orc
    

def definir_Regiao(estado):

    if estado in LISTA_NORTE:
        return 'Norte'
    elif estado in LISTA_NORDESTE:
        return 'Nordeste'
    elif estado in LISTA_CENTROOESTE:
        return 'Centro-Oeste'
    elif estado in LISTA_SUDESTE:
        return 'Sudeste'
    else:
        return 'Sul'

@receiver(pre_save, sender=Unidade_Base)
def pre_save_regiao(sender, instance, **kwargs):
    instance.regiao = definir_Regiao(instance.estado)