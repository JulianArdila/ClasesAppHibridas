from django.shortcuts import render
from .serializers import UserSerializer
from .models import User
from rest_framework import generics
from rest_framework.decorators import permission_classes
from .permissions import IsPostOrIsAuthenticated

# Create your views here.
@permission_classes((IsPostOrIsAuthenticated, ))
class UserList(generics.ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()