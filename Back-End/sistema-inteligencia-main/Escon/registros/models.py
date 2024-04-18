from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver
from datetime import datetime

# Models Base
from base.models import (
    NaturezaOrcamentaria,
    Marca,
    Unidade
)

def definir_ano_vigencia():
    if datetime.now().month < 1:
        return ''
    else:
        return str(datetime.now().year+1)

LISTA_ANO_VIGENCIA = ((str(datetime.now().year), str(datetime.now().year)), (definir_ano_vigencia(), definir_ano_vigencia()))

class ContadorCodigoContratoSpot(models.Model):
    valor = models.IntegerField(default=0)

class ContadorCodigoContratoAnual(models.Model):
    valor = models.IntegerField(default=0)

class ContadorCodigoContratoObras(models.Model):
    valor = models.IntegerField(default=0)

class Fornecedor(models.Model):
    documento = models.CharField(max_length=50)
    razao_social = models.CharField(max_length=250)
    email = models.CharField(max_length=250)
    tipo_conta = models.CharField(max_length=50)
    banco = models.CharField(max_length=100)
    conta = models.CharField(max_length=100) 
    agencia = models.CharField(max_length=100) 
    dv = models.CharField(max_length=100) 
    tipo_pagamento = models.CharField(max_length=100)

    def __str__(self):
        return self.documento


class Contrato_Spot(models.Model):
    
    cod_contrato = models.CharField(max_length=20, default='', blank=True) # não é um input de form (front-end)
    data_registro = models.DateTimeField(auto_now=True) # não é um input de form (front-end)

    marca = models.ForeignKey(Marca, on_delete=models.DO_NOTHING)
    unidade = models.ForeignKey(Unidade, on_delete=models.DO_NOTHING)
    fornecedor = models.ForeignKey(Fornecedor, on_delete=models.DO_NOTHING)
    natureza_orcamentaria = models.ForeignKey(NaturezaOrcamentaria, on_delete=models.DO_NOTHING)
    
    ano_vigencia = models.CharField(max_length=10, blank=True) # não é um input de form (front-end)
    descricao_servico = models.TextField()
    valor_mensal = models.FloatField(default=0) # não é um input de form (front-end)
    valor_contratado = models.FloatField(default=0)
    mes_entrada = models.IntegerField(blank=True) # não é um input de form (front-end)
    distribuicao_mes = models.IntegerField(default=1)
    solicitante = models.CharField(max_length=100) # não é um input de form (front-end)
    categoria = models.CharField(max_length=100)
    links_docs = models.TextField()
    numero_otrs = models.CharField(max_length=100)
    data_registro_otrs = models.CharField(max_length=100)
    contr_prop = models.CharField(max_length=100) # não é um input de form (front-end)
    info_diversas = models.CharField(max_length=200) # não é um input de form (front-end)
    renovacao_automatica = models.CharField(max_length=10) # não é um input de form (front-end)
    indice_reajuste = models.CharField(max_length=10, default='') # não é um input de form (front-end)

    def __str__(self):
        return self.cod_contrato
    
class Contrato_Anual(models.Model):
    
    cod_contrato = models.CharField(max_length=20, default='', blank=True) # não é um input de form (front-end)
    data_registro = models.DateTimeField(auto_now=True) # não é um input de form (front-end)

    marca = models.ForeignKey(Marca, on_delete=models.DO_NOTHING)
    unidade = models.ForeignKey(Unidade, on_delete=models.DO_NOTHING)
    fornecedor = models.ForeignKey(Fornecedor, on_delete=models.DO_NOTHING)
    natureza_orcamentaria = models.ForeignKey(NaturezaOrcamentaria, on_delete=models.DO_NOTHING)
    
    mes_renovacao = models.IntegerField(default=1) # não é um input de form (front-end)
    descricao_servico = models.TextField()
    valor_mensal = models.FloatField(default=0)
    valor_contratado = models.FloatField(default=0) # não é um input de form (front-end)
    mes_entrada = models.IntegerField(blank=True) # não é um input de form (front-end)
    distribuicao_mes = models.IntegerField(blank=True) # não é um input de form (front-end)
    solicitante = models.CharField(max_length=100) # não é um input de form (front-end)
    categoria = models.CharField(max_length=100) # não é um input de form (front-end)
    links_docs = models.TextField() 
    numero_otrs = models.CharField(max_length=100)
    data_registro_otrs = models.CharField(max_length=100)
    contr_prop = models.CharField(max_length=100) # não é um input de form (front-end)
    info_diversas = models.CharField(max_length=200) # Gerar o CONCAT das informacoes de para Limpeza e Segurança pelo Front-End - VEM DO FRONT
    renovacao_automatica = models.CharField(max_length=10)
    indice_reajuste = models.CharField(max_length=10, default='')

    def __str__(self):
        return self.cod_contrato
    
class Contrato_Obras(models.Model):
    
    cod_contrato = models.CharField(max_length=20, default='', blank=True) # não é um input de form (front-end)
    data_registro = models.DateTimeField(auto_now=True) # não é um input de form (front-end)

    marca = models.ForeignKey(Marca, on_delete=models.DO_NOTHING)
    unidade = models.ForeignKey(Unidade, on_delete=models.DO_NOTHING)
    fornecedor = models.ForeignKey(Fornecedor, on_delete=models.DO_NOTHING)
    natureza_orcamentaria = models.ForeignKey(NaturezaOrcamentaria, on_delete=models.DO_NOTHING)
    
    ano_vigencia = models.CharField( max_length=10)
    descricao_servico = models.TextField()
    valor_mensal = models.FloatField(default=0) # não é um input de form (front-end)
    valor_contratado = models.FloatField(default=0)
    mes_entrada = models.IntegerField(blank=True) # não é um input de form (front-end)
    distribuicao_mes = models.IntegerField(default=1)
    solicitante = models.CharField(max_length=100)
    categoria = models.CharField(max_length=100) # não é um input de form (front-end)
    links_docs = models.TextField()
    numero_otrs = models.CharField(max_length=100)
    data_registro_otrs = models.CharField(max_length=100)
    contr_prop = models.CharField(max_length=100)
    info_diversas = models.CharField(max_length=200)
    renovacao_automatica = models.CharField(max_length=10) # não é um input de form (front-end)
    indice_reajuste = models.CharField(max_length=10, default='') # não é um input de form (front-end)

    def __str__(self):
        return self.cod_contrato

# Funcoes para atualização dos atrubutos
    # Funcao para criar o cod_contrato

def calcular_cod_contrato_spot():
    contador = ContadorCodigoContratoSpot.objects.first()  # Recupera o contador do banco de dados
    contador.valor += 1
    contador.save()

    if contador.valor <= 9:
        return 'CS000' + str(contador.valor)
    elif contador.valor <= 99:
        return 'CS00' + str(contador.valor)
    elif contador.valor <= 999:
        return 'CS0' + str(contador.valor)
    else:
        return 'CS' + str(contador.valor)

def calcular_cod_contrato_anual():
    contador = ContadorCodigoContratoAnual.objects.first()  # Recupera o contador do banco de dados
    contador.valor += 1
    contador.save()

    if contador.valor <= 9:
        return 'CA000' + str(contador.valor)
    elif contador.valor <= 99:
        return 'CA00' + str(contador.valor)
    elif contador.valor <= 999:
        return 'CA0' + str(contador.valor)
    else:
        return 'CA' + str(contador.valor)
    
def calcular_cod_contrato_obras():
    contador = ContadorCodigoContratoObras.objects.first()  # Recupera o contador do banco de dados
    contador.valor += 1
    contador.save()

    if contador.valor <= 9:
        return 'CC000' + str(contador.valor)
    elif contador.valor <= 99:
        return 'CC00' + str(contador.valor)
    elif contador.valor <= 999:
        return 'CC0' + str(contador.valor)
    else:
        return 'CC' + str(contador.valor)
    
    # Funcao para criar o ano_vigencia

def criar_ano_vigencia():
    return str(datetime.now().year)

    # Funcao para criar o mes_entrada

def criar_mes_entrada():
    return datetime.now().month

    # Funcao para criar o distribuicao_mes

def criar_distribuicao_mes():
    quant_mes = 1 - datetime.now().month
    return quant_mes

# Funcoes para atualização dos atrubutos
#     Funcao para criar salvar cod_contrato

@receiver(pre_save, sender=Contrato_Spot)
def pre_save_contrato_spot(sender, instance, **kwargs):
    instance.cod_contrato = calcular_cod_contrato_spot()

@receiver(pre_save, sender=Contrato_Anual)
def pre_save_contrato_anual(sender, instance, **kwargs):
    instance.cod_contrato = calcular_cod_contrato_anual()

@receiver(pre_save, sender=Contrato_Obras)
def pre_save_contrato_obras(sender, instance, **kwargs):
    instance.cod_contrato = calcular_cod_contrato_obras()

    # Funcao para criar salvar ano_vigencia

@receiver(pre_save, sender=Contrato_Spot)
def pre_save_ano_vigencia(sender, instance, **kwargs):
    instance.ano_vigencia = criar_ano_vigencia()

    # Funcao para criar salvar valor_contratado

@receiver(pre_save, sender=Contrato_Anual)
def pre_save_ano_vigencia(sender, instance, **kwargs):
    instance.valor_contratado = criar_distribuicao_mes() * instance.valor_mensal

    # Funcao para criar salvar mes_entrada

@receiver(pre_save, sender=Contrato_Spot)
def pre_save_mes_entrada(sender, instance, **kwargs):
    instance.mes_entrada = criar_mes_entrada()

@receiver(pre_save, sender=Contrato_Anual)
def pre_save_mes_entrada(sender, instance, **kwargs):
    instance.mes_entrada = criar_mes_entrada()

@receiver(pre_save, sender=Contrato_Obras)
def pre_save_mes_entrada(sender, instance, **kwargs):
    instance.mes_entrada = criar_mes_entrada()

    # Funcao para criar salvar distribuicao_mes

@receiver(pre_save, sender=Contrato_Anual)
def pre_save_distribuicao_mes(sender, instance, **kwargs):
    instance.distribuicao_mes = criar_distribuicao_mes()

