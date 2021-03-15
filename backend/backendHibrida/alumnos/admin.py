from django.contrib import admin
from alumnos.models import Alumno, Curso

# Register your models here.

admin.site.register(Alumno)

admin.site.register(Curso)