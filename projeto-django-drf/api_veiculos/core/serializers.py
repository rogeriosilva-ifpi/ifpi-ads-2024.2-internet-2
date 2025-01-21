from rest_framework import serializers
from core.models import Montadora, Modelo


class MontadoraSerializer(serializers.ModelSerializer):
    modelos = serializers.StringRelatedField(many=True)

    class Meta:
        model = Montadora
        fields = '__all__'


class MontadoraSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Montadora
        fields = ['id', 'nome']


class ModeloSerializer(serializers.ModelSerializer):
    montadora = MontadoraSimpleSerializer()

    class Meta:
        model = Modelo
        fields = '__all__'