from django.shortcuts import render
from rest_framework import viewsets
from .serializer import InventarySerializer
from .models import Item

# Create your views here.
class InventaryView(viewsets.ModelViewSet):
    serializer_class = InventarySerializer
    queryset = Item.objects.all()
