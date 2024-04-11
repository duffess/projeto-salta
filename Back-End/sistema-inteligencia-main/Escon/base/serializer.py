from rest_framework import serializers
from .models import (
    Marca,
    Unidade,
    NaturezaOrcamentaria, 
)


class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marca
        fields = "__all__"

class UnidadeSerializer(serializers.ModelSerializer):
    marca = MarcaSerializer()
    
    class Meta:
        model = Unidade
        fields = ['id', 'nome', 'marca']

class NaturezaOrcamentariaSerializer(serializers.ModelSerializer):
    class Meta:
        model = NaturezaOrcamentaria
        fields = "__all__" 
