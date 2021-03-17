from django.db import models

# Create your models here.

class Materia(models.Model):
    nombre = models.CharField(max_length=200)

class Alumno(models.Model):
    """
    
    STATUS = (
        (0, 'Eliminado'),
        (1, 'Activo'),
        #(2, 'Pendiente'),
        #(3, 'Rechazado'),
    )

    status = models.IntegerField(default=1, choices=STATUS)
    """
    # Campos Boleanos
    estado = models.BooleanField(default=True)

    # Campos Texto
    nombre = models.CharField(max_length=200)

    # Campos Numericos
    codigo = models.IntegerField()
    estatura = models.FloatField(blank=True, null=True)
    
    # Campos fechas
    fecha_nacimiento = models.DateField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    # campo Forengkey
    curso = models.ForeignKey('Curso', on_delete=models.CASCADE)
    imagen = models.ImageField(upload_to='img/fotosapp/', blank=True, null=True)
    materias = models.ManyToManyField(Materia)

    def __str__(self):
        if self.imagen:
            return self.imagen.url
        return self.nombre


class Curso(models.Model):
    cantidad = models.IntegerField()
    curso = models.CharField(max_length=200)
    codigo = models.IntegerField()
    estado = models.BooleanField()
    promedio = models.FloatField()
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.curso + " - " + str(self.codigo)


