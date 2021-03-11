export interface ListAlumnos {
    count: number;
    next: string;
    previous: string;
    results: Result[];
  }
  
  export interface Result {
    nombre: string;
    codigo: number;
    fecha_nacimiento: string;
    curso: number;
    id: number;
    estatura?: any;
  }