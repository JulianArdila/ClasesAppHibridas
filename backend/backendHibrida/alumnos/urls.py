from django.conf.urls import url
from alumnos.views import AlumnoList, AlumnoDetail, CursoList, CursoDetail

urlpatterns = [
    url(r'^alumnos/$', AlumnoList.as_view()),
    url(r'^alumnos/(?P<pk>[0-9]+)/$', AlumnoDetail.as_view()),
    url(r'^cursos/$', CursoList.as_view()),
    url(r'^cursos/(?P<pk>[0-9]+)/$', CursoDetail.as_view()),
]