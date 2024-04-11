from django.urls import path
from . import views

urlpatterns = [
    # Listas
    path('fornecedor/', views.FornecedorView.as_view()),
    path('contrato_anual/', views.AnualViews.as_view()),
    path('contrato_spot/', views.SpotView.as_view()),
    path('contrato_obras/', views.ObrasView.as_view()),
    
    # IDs
    
]
