from rest_framework_nested import routers
from rest_framework.routers import DefaultRouter
from .views import MontadoraViewSet, ModeloViewSet, MontadoraModeloViewSet
from django.urls import path, include

router = DefaultRouter()
router.register(r'montadoras', MontadoraViewSet, basename='montadora')
router.register(r'modelos', ModeloViewSet, basename='modelo')

# sub-recursos
montadoras_router = routers.NestedSimpleRouter(router, r'montadoras', lookup='montadora')
montadoras_router.register(r'modelos', MontadoraModeloViewSet, basename='montadora-modelo')


urlpatterns = [
    path('', include(router.urls)),
    path('', include(montadoras_router.urls)),
]
