from rest_framework import serializers
from alumnos.models import Alumno
from drf_extra_fields.fields import Base64ImageField


class AlumnoSerializer(serializers.ModelSerializer):
    imagen = Base64ImageField(
        max_length=None,
        use_url=True,
        required=False,
        allow_null=True,
        allow_empty_file=True
    )
    class Meta:
        model = Alumno
        fields = ('nombre','codigo', 'fecha_nacimiento','curso','id', 'estatura', 'imagen')