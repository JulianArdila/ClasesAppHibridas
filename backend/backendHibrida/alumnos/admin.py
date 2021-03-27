from django.contrib import admin
from alumnos.models import Alumno, Curso, Materia

# Register your models here.

admin.site.register(Alumno)

admin.site.register(Materia)
admin.site.register(Curso)