
from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

admin.site.site_header = "Gestão de Veículos"
admin.site.index_title = "Cadastros e Operações"

schema_view = get_schema_view(
    openapi.Info(
        title="API de Veículos",
        default_version='v1',
        description="Documentação da API de Veículos",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@veiculos.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')),
]

urlpatterns += [
     path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
     path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc-ui'),
]


from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns += [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
