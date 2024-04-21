from rest_framework import serializers
from .models import (
    Marca_Base,
    Unidade_Base,
    NaturezaOrcamentaria_Base, 
)


class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marca_Base
        fields = "__all__"

class UnidadeSerializer(serializers.ModelSerializer):
    marca = MarcaSerializer()
    
    class Meta:
        model = Unidade_Base
        fields = "__all__"

class NaturezaOrcamentariaSerializer(serializers.ModelSerializer):
    class Meta:
        model = NaturezaOrcamentaria_Base
        fields = "__all__" 
