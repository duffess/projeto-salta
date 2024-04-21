from django.contrib import admin
from .models import (
    Marca_Base,
    Unidade_Base,
    NaturezaOrcamentaria_Base,
)


class MarcaAdmin(admin.ModelAdmin):
    ...
    
class UnidadeAdmin(admin.ModelAdmin):
    ...
    
class NaturezaOrcamentariaAdmin(admin.ModelAdmin):
    ...


admin.site.register(Marca_Base, MarcaAdmin)
admin.site.register(Unidade_Base, UnidadeAdmin)
admin.site.register(NaturezaOrcamentaria_Base, NaturezaOrcamentariaAdmin)
