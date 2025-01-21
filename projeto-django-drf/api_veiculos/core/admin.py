from django.contrib import admin
from .models import Montadora, Modelo


class ModeloInline(admin.TabularInline):
    model = Modelo
    extra = 0


@admin.register(Montadora)
class MontadoraAdmin(admin.ModelAdmin):
    list_display = ('nome', 'pais', 'ano_fundacao', 'idade')
    search_fields = ('nome', 'pais', 'ano_fundacao')
    list_filter = ('pais',)

    inlines = [ModeloInline]


@admin.register(Modelo)
class ModeloAdmin(admin.ModelAdmin):
    list_display = ('nome', 'montadora', 'ano_lancamento', 'preco_referencia', 'motor', 'cor')
    search_fields = ('nome', 'montadora__nome')
    list_filter = ('montadora', 'motor')


