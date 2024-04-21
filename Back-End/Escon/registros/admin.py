from django.contrib import admin
from .models import Fornecedor, Contrato_Spot, Contrato_Anual, Contrato_Obras, ContadorCodigoContratoSpot, ContadorCodigoContratoAnual, ContadorCodigoContratoObras
# Register your models here.

admin.site.register(Fornecedor)
admin.site.register(Contrato_Spot)
admin.site.register(Contrato_Anual)
admin.site.register(Contrato_Obras)
admin.site.register(ContadorCodigoContratoSpot)
admin.site.register(ContadorCodigoContratoAnual)
admin.site.register(ContadorCodigoContratoObras)
