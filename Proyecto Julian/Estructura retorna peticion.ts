
var peticion = [] // servicio
var list = []
var resultado = []
for (let i = 0; i<= peticion.length; i++){
    list.push(i);
    resultado.push(
        {
            id: peticion[i].id,
            asistencia: null
        }
    )
}