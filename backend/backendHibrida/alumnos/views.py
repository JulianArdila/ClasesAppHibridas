from django.shortcuts import render
from .models import Alumno, Curso
from rest_framework import generics, filters
from alumnos.serializers import AlumnoSerializer, CursoSerializer

class AlumnoList(generics.ListCreateAPIView):
    serializer_class = AlumnoSerializer
    queryset = Alumno.objects.all().order_by('nombre')
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['nombre', 'id']
    filterset_fields = [
        'nombre',
        'codigo',
        'fecha_nacimiento',
        'curso',
        'curso__id',
        'curso__curso'
    ]

class AlumnoDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AlumnoSerializer
    queryset = Alumno.objects.all()


class CursoList(generics.ListCreateAPIView):

    serializer_class = CursoSerializer
    queryset = Curso.objects.all()
    filter_backends = [
        filters.SearchFilter,
    ]
    search_fields = ['id', 'curso']

class CursoDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CursoSerializer
    queryset = Curso.objects.all()
    
    
# Create your views here.
def principal(request):
    alumnos = Alumno.objects.filter(curso__curso="6D")
    cursos = Curso.objects.all()
    return render(request, "principal.html", {
        'alumnos':alumnos,
        'cursos':cursos,
        'titulo': "Titulo desde el Render"
    })

    
def formulario_sin_ajax(request):
    alumnos = Alumno.objects.all()
    
    return render(request, "form.html", {
        'alumnos':alumnos,
        'titulo': "Titulo desde el Render"
    })

def formulario_con_ajax(request):
    alumnos = Alumno.objects.all()
    
    return render(request, "form-ajax.html", {
        'alumnos':alumnos,
        'titulo': "Titulo desde el Render"
    })