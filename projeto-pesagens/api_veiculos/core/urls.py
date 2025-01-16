from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MontadoraViewSet

router = DefaultRouter()
router.register(r'montadoras', MontadoraViewSet)

urlpatterns = [
    path('', include(router.urls)),
]