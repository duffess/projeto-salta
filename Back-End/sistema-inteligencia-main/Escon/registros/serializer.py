from rest_framework import serializers

from .models import (
    Fornecedor,
    Contrato_Anual,
    Contrato_Spot,
    Contrato_Obras,
)

class SerializerFornecedor(serializers.ModelSerializer):
    class Meta:
        model = Fornecedor
        fields = "__all__"

class SerializerContratoAnual(serializers.ModelSerializer):
    class Meta:
        model = Contrato_Anual
        fields = "__all__"

class SerializerContratoSpot(serializers.ModelSerializer):
    class Meta:
        model = Contrato_Spot
        fields = "__all__"

class SerializerContratoObras(serializers.ModelSerializer):
    class Meta:
        model = Contrato_Obras
        fields = "__all__"