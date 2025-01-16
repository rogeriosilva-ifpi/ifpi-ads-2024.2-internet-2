from django.contrib import admin
from core.models import Montadora, Modelo


class ModeloINLINE(admin.TabularInline):
    model = Modelo
    extra = 1
    fields = ('nome', 'motorizacao', 'tipo_cambio', 'em_producao')
    show_change_link = True


@admin.register(Montadora)
class MontadoraAdmin(admin.ModelAdmin):
    list_display = ('nome', 'pais', 'ano_fundacao')
    search_fields = ('nome', 'pais')
    list_filter = ('pais', 'ano_fundacao')
    ordering = ('nome',)

    inlines = [ModeloINLINE]


@admin.register(Modelo)
class ModeloAdmin(admin.ModelAdmin):
    list_display = ('nome', 'motorizacao', 'tipo_cambio', 'em_producao', 'montadora')
    search_fields = ('nome', 'motorizacao', 'tipo_cambio')
    list_filter = ('em_producao', 'montadora')
    ordering = ('nome',)