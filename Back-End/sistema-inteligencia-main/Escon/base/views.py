from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import (
    Marca,
    Unidade,
    NaturezaOrcamentaria,
)
from .serializer import (
    MarcaSerializer,
    UnidadeSerializer,
    NaturezaOrcamentariaSerializer,
)

# get, post, delete and update
class MarcasView(APIView):
    def get(self, request):
        lista_marcas = Marca.objects.all()
        serializer = MarcaSerializer(lista_marcas, many=True)
        
        return Response(serializer.data)
    
    def post(self, request):
        serializer = MarcaSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data,
                status.HTTP_200_OK,
            )
            
        return Response(
            "Não foi possível inserir dados",
            status.HTTP_400_BAD_REQUEST,
        )
    
    def delete(self, request, pk):
        try:
            marca = Marca.objects.get(pk=pk)
        except Marca.DoesNotExist:
            return Response("Marca não encontrada", status=status.HTTP_404_NOT_FOUND)
        
        marca.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        try:
            marca = Marca.objects.get(pk=pk)
        except Marca.DoesNotExist:
            return Response("Marca não encontrada", status=status.HTTP_404_NOT_FOUND)
        
        serializer = MarcaSerializer(marca, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UnidadeViews(APIView):
    def get(self, request):
        lista_unidade = Unidade.objects.all()
        serializer = UnidadeSerializer(lista_unidade, many=True)
        
        return Response(serializer.data)
    
    def post(self, request):
        post_data = request.data
        serializer = UnidadeSerializer(post_data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data,
                status.HTTP_200_OK,
            )
            
        return Response(
            "Não foi possível inserir dados",
            status.HTTP_400_BAD_REQUEST,
        )
    
    def delete(self, request, pk):
        try:
            unidade = Unidade.objects.get(pk=pk)
        except Unidade.DoesNotExist:
            return Response("Unidade não encontrada", status=status.HTTP_404_NOT_FOUND)
        
        unidade.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        try:
            unidade = Unidade.objects.get(pk=pk)
        except Unidade.DoesNotExist:
            return Response("Unidade não encontrada", status=status.HTTP_404_NOT_FOUND)
        
        serializer = UnidadeSerializer(unidade, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class NOView(APIView):
    def get(self, request):
        lista_NO = NaturezaOrcamentaria.objects.all()
        serializer = NaturezaOrcamentariaSerializer(lista_NO, many=True)
        
        return Response(serializer.data)
    
    def post(self, request):
        post_data = request.data
        serializer = NaturezaOrcamentariaSerializer(post_data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(
                serializer.data,
                status.HTTP_200_OK,
            )
            
        return Response(
            "Não foi possível inserir dados",
            status.HTTP_400_BAD_REQUEST,
        )
    
    def delete(self, request, pk):
        try:
            no = NaturezaOrcamentaria.objects.get(pk=pk)
        except NaturezaOrcamentaria.DoesNotExist:
            return Response("Unidade não encontrada", status=status.HTTP_404_NOT_FOUND)
        
        no.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        try:
            no = NaturezaOrcamentaria.objects.get(pk=pk)
        except NaturezaOrcamentaria.DoesNotExist:
            return Response("Unidade não encontrada", status=status.HTTP_404_NOT_FOUND)
        
        serializer = NaturezaOrcamentariaSerializer(no, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)