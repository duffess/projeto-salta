from django.contrib import admin
from .models import (
    Marca,
    Unidade,
    NaturezaOrcamentaria,
)


class MarcaAdmin(admin.ModelAdmin):
    list_display = ['nome'] 
    search_fields = ['nome']

class UnidadeAdmin(admin.ModelAdmin):
    list_display = ['nome'] 
    search_fields = ['nome']
    
class NaturezaOrcamentariaAdmin(admin.ModelAdmin):
    list_display = ['nome'] 
    search_fields = ['nome']


admin.site.register(Marca, MarcaAdmin)
admin.site.register(Unidade, UnidadeAdmin)
admin.site.register(NaturezaOrcamentaria, NaturezaOrcamentariaAdmin)
