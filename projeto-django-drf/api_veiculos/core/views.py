from rest_framework import viewsets
from .serializers import MontadoraSerializer, ModeloSerializer
from .models import Montadora, Modelo


class MontadoraViewSet(viewsets.ModelViewSet):
    queryset = Montadora.objects.all()
    serializer_class = MontadoraSerializer


class MontadoraModeloViewSet(viewsets.ModelViewSet):
    queryset = Modelo.objects.all()
    serializer_class = ModeloSerializer

    def get_queryset(self):
        return self.queryset.filter(montadora=self.kwargs.get('montadora_pk'))


class ModeloViewSet(viewsets.ModelViewSet):
    queryset = Modelo.objects.all()
    serializer_class = ModeloSerializer


