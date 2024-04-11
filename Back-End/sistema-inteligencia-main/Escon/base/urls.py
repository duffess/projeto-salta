from django.urls import path
from . import views

urlpatterns = [
    # Listas
    path('marcas/', views.MarcasView.as_view()),
    path('unidade/', views.UnidadeViews.as_view()),
    path('naturezas_orcamentarias/', views.NOView.as_view()),
    
    # IDs
    
]
