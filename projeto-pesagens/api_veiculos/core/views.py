from rest_framework import viewsets
from .models import Montadora
from .serializers import MontadoraSerializer
from rest_framework.pagination import PageNumberPagination
from django_filters import rest_framework as filters


class CustomPagination(PageNumberPagination):
    page_size_query_param = 'take'
    page_query_param = 'skip'
    max_page_size = 100
    page_size = 10


class MontadoraFilter(filters.FilterSet):
    nome = filters.CharFilter(lookup_expr='icontains')
    pais = filters.CharFilter(lookup_expr='icontains')
    ano_fundacao = filters.NumberFilter()
    ano_fundacao__gte = filters.NumberFilter(field_name='ano_fundacao', lookup_expr='gte')
    ano_fundacao__lte = filters.NumberFilter(field_name='ano_fundacao', lookup_expr='lte')

    class Meta:
        model = Montadora
        fields = ['nome', 'pais', 'ano_fundacao']



class MontadoraViewSet(viewsets.ModelViewSet):
    queryset = Montadora.objects.all()
    serializer_class = MontadoraSerializer
    pagination_class = CustomPagination
    filterset_class = MontadoraFilter
