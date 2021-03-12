from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    phone = models.CharField(max_length=20, blank=True, null=True)
    birthday = models.DateField(max_length=20, blank=True, null=True)
    cc = models.CharField(max_length=20, blank=True, null=True)