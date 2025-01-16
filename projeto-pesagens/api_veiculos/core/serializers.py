from rest_framework import serializers
from .models import Montadora


class MontadoraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Montadora
        fields = '__all__'