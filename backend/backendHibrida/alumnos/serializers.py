from rest_framework import serializers
from alumnos.models import Alumno, Curso
from drf_extra_fields.fields import Base64ImageField
import datetime

class AlumnoSerializer(serializers.ModelSerializer):
    edad = serializers.SerializerMethodField()
    imagen = Base64ImageField(
        max_length=None,
        use_url=True,
        required=False,
        allow_null=True,
        allow_empty_file=True
    )
    class Meta:
        model = Alumno
        fields = ('nombre','codigo', 'fecha_nacimiento','curso','id', 'estatura', 'imagen', 'edad')

    def get_edad(self, obj):
        ## return obj.curso.seccion.name
        aux = datetime.date.today() - obj.fecha_nacimiento
        return int(aux.days / 365)


class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = '__all__'