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
        fields = ["marca", "unidade", "fornecedor", "natureza_orcamentaria", "descricao_servico", "valor_mensal", "links_docs", "numero_otrs", "data_registro_otrs", "renovacao_automatica", "indice_reajuste"]

class SerializerContratoSpot(serializers.ModelSerializer):
    class Meta:
        model = Contrato_Spot
        fields = ["marca", "unidade", "fornecedor", "natureza_orcamentaria", "descricao_servico", "valor_contratado", "distribuicao_mes", "categoria", "links_docs", "numero_otrs", "data_registro_otrs"]

class SerializerContratoObras(serializers.ModelSerializer):
    class Meta:
        model = Contrato_Obras
        fields = ["marca", "unidade", "fornecedor", "natureza_orcamentaria", "ano_vigencia", "descricao_servico", "valor_contratado", "distribuicao_mes", "solicitante", "links_docs", "numero_otrs", "data_registro_otrs", "contr_prop", "info_diversas"]