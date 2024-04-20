from django.db import models

class Marca(models.Model):
    nome = models.CharField(max_length=150)
    
    def __str__(self):
        return self.nome
    
    
class Unidade(models.Model):
    nome = models.CharField(max_length=150)
    endereco = models.CharField(max_length=150, default = "")
    marca = models.ForeignKey(Marca, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.nome
    
    
class NaturezaOrcamentaria(models.Model):
    nome = models.CharField(max_length=150)
    
    def __str__(self):
        return self.nome
    

