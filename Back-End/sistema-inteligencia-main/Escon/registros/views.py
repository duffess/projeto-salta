from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import (
    Fornecedor,
    Contrato_Anual,
    Contrato_Spot,
    Contrato_Obras,
)

from .serializer import (
    SerializerFornecedor,
    SerializerContratoAnual,
    SerializerContratoSpot,
    SerializerContratoObras,
)

# get, post, delete and update
class FornecedorView(APIView):
    def get(self, request):
        lista_fornecedor = Fornecedor.objects.all()
        serializer = SerializerFornecedor(lista_fornecedor, many=True)
        
        response = Response(serializer.data)
        response["Access-Control-Allow-Origin"] = "http://localhost:3000"
        return response
    
    def post(self, request):
        serializer = SerializerFornecedor(data=request.data)
        
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
            fornecedor = Fornecedor.objects.get(pk=pk)
        except Fornecedor.DoesNotExist:
            return Response("Unidade não encontrada", status=status.HTTP_404_NOT_FOUND)
        
        fornecedor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        try:
            fornecedor = Fornecedor.objects.get(pk=pk)
        except Fornecedor.DoesNotExist:
            return Response("Unidade não encontrada", status=status.HTTP_404_NOT_FOUND)
        
        serializer = SerializerFornecedor(fornecedor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AnualViews(APIView):
    def get(self, request):
        lista_anual = Contrato_Anual.objects.all()
        serializer = SerializerContratoAnual(lista_anual, many=True)
        
        return Response(serializer.data)
    
    def post(self, request):
        post_data = request.data
        serializer = SerializerContratoAnual(post_data)
        
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
            anual = Contrato_Anual.objects.get(pk=pk)
        except Contrato_Anual.DoesNotExist:
            return Response("Unidade não encontrada", status=status.HTTP_404_NOT_FOUND)
        
        anual.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        try:
            anual = Contrato_Anual.objects.get(pk=pk)
        except Contrato_Anual.DoesNotExist:
            return Response("Unidade não encontrada", status=status.HTTP_404_NOT_FOUND)
        
        serializer = SerializerContratoAnual(anual, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SpotView(APIView):
    def get(self, request):
        lista_spot = Contrato_Spot.objects.all()
        serializer = SerializerContratoSpot(lista_spot, many=True)
        
        return Response(serializer.data)
    
    def post(self, request):
        post_data = request.data
        serializer = SerializerContratoSpot(post_data)
        
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
            spot = Contrato_Spot.objects.get(pk=pk)
        except Contrato_Spot.DoesNotExist:
            return Response("Unidade não encontrada", status=status.HTTP_404_NOT_FOUND)
        
        spot.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        try:
            spot = Contrato_Spot.objects.get(pk=pk)
        except Contrato_Spot.DoesNotExist:
            return Response("Unidade não encontrada", status=status.HTTP_404_NOT_FOUND)
        
        serializer = SerializerContratoSpot(spot, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ObrasView(APIView):
    def get(self, request):
        lista_obras = Contrato_Obras.objects.all()
        serializer = SerializerContratoObras(lista_obras, many=True)
        
        return Response(serializer.data)
    
    def post(self, request):
        post_data = request.data
        serializer = SerializerContratoObras(post_data)
        
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
            obras = Contrato_Obras.objects.get(pk=pk)
        except Contrato_Obras.DoesNotExist:
            return Response("Unidade não encontrada", status=status.HTTP_404_NOT_FOUND)
        
        obras.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        try:
            obras = Contrato_Obras.objects.get(pk=pk)
        except Contrato_Obras.DoesNotExist:
            return Response("Unidade não encontrada", status=status.HTTP_404_NOT_FOUND)
        
        serializer = SerializerContratoObras(obras, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)