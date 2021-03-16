from rest_framework import serializers
from alumnos.models import Alumno
from drf_extra_fields.fields import Base64ImageField


class AlumnoSerializer(serializers.ModelSerializer):
    imagen = Base64ImageField()
    class Meta:
        model = Alumno
        fields = ('nombre','codigo', 'fecha_nacimiento','curso','id', 'estatura', 'imagen')