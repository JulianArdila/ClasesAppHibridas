
class Mascotas:
    nombre = "(Nombre)"
    color = "gris"
    edad = 15
    def __init__(self, nombre):
        self.nombre = nombre
        

    def __str__(self):
        return "Gato " + self.nombre
    
    def alimentarse(self):
        print(self.nombre + " se esta alimentando")
    


class Gato(Mascotas):
    def __init__(self, nombre):
        super().__init__(nombre)
    
    si_tiene_rayas = True

    def ronronear(self):
        print(self.nombre, " esta ronroneando")


class Perro(Mascotas):
    orejas_caidas = True

    def __init__(self, nombre):
        ##print(args, kwargs)
        super().__init__(nombre)

    def ladra(self):
        print(self.nombre, " esta ladrando")

gato1 = Gato("bigotes")
print(gato1.nombre)
gato1.alimentarse()
gato1.ronronear()
        
perro1 = Perro("firulais")
perro1.alimentarse()
perro1.ladra()

