from django.contrib import admin
from .models import (
    Marca,
    Unidade,
    NaturezaOrcamentaria,
)


class MarcaAdmin(admin.ModelAdmin):
    ...
    
class UnidadeAdmin(admin.ModelAdmin):
    ...
    
class NaturezaOrcamentariaAdmin(admin.ModelAdmin):
    ...


admin.site.register(Marca, MarcaAdmin)
admin.site.register(Unidade, UnidadeAdmin)
admin.site.register(NaturezaOrcamentaria, NaturezaOrcamentariaAdmin)
