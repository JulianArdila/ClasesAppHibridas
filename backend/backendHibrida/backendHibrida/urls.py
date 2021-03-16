"""backendHibrida URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from alumnos.views import principal, formulario_sin_ajax, formulario_con_ajax
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static

urlapi = [
    url(r'^', include(('alumnos.urls','alumnos'))),
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('principal/', principal),
    path('formulario_sin_ajax/', formulario_sin_ajax),
    path('formulario_con_ajax/', formulario_con_ajax),
    url(r'^api/v1/', include(urlapi)),
    url(r'^api/v1/auth/', include('rest_auth.urls')),
    url(r'^api/v1/', include(('user.urls','user'))),
]

urlpatterns += static(
    settings.MEDIA_URL,
    document_root=settings.MEDIA_ROOT
)

urlpatterns += staticfiles_urlpatterns()