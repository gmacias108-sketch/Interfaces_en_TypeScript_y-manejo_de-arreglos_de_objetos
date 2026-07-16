//Ejercicio 1
interface Estudiante {
    id: number;
    nombre: string;
    edad: number;
    programa: string;
    promedio: number;
}

let estudiantes: Estudiante[] = [
    {
        id: 1,
        nombre: "Gilbert",
        edad: 35,
        programa: "ADSO",
        promedio: 4.5
    },
    {
        id: 2,
        nombre: "Ana",
        edad: 22,
        programa: "Contabilidad",
        promedio: 3.8
    },
    {
        id: 3,
        nombre: "Carlos",
        edad: 25,
        programa: "Sistemas",
        promedio: 3.2
    },
    {
        id: 4,
        nombre: "Luisa",
        edad: 20,
        programa: "Diseño",
        promedio: 4.1
    },
    {
        id: 5,
        nombre: "Pedro",
        edad: 24,
        programa: "Mecánica",
        promedio: 2.9
    }
];

console.log(estudiantes);

//Ejercicio 2
interface Estudiante {
    id: number;
    nombre: string;
    edad: number;
    programa: string;
    promedio: number;
}

let estudiantin: Estudiante[] = [
    {
        id: 1,
        nombre: "Gilbert",
        edad: 35,
        programa: "ADSO",
        promedio: 4.5
    },
    {
        id: 2,
        nombre: "Ana",
        edad: 22,
        programa: "Contabilidad",
        promedio: 3.8
    },
    {
        id: 3,
        nombre: "Carlos",
        edad: 25,
        programa: "Sistemas",
        promedio: 3.2
    },
    {
        id: 4,
        nombre: "Luisa",
        edad: 20,
        programa: "Diseño",
        promedio: 4.1
    },
    {
        id: 5,
        nombre: "Pedro",
        edad: 24,
        programa: "Mecánica",
        promedio: 2.9
    }
];

let aprobados = estudiantin.filter(estudiante => estudiante.promedio >= 3.5);

console.log(aprobados);

//Ejercicio 3
interface Estudiante {
    id: number;
    nombre: string;
    edad: number;
    programa: string;
    promedio: number;
}

let estudiantesin: Estudiante[] = [
    {
        id: 1,
        nombre: "Gilbert",
        edad: 35,
        programa: "ADSO",
        promedio: 4.5
    },
    {
        id: 2,
        nombre: "Ana",
        edad: 22,
        programa: "Contabilidad",
        promedio: 3.8
    },
    {
        id: 3,
        nombre: "Carlos",
        edad: 25,
        programa: "Sistemas",
        promedio: 3.2
    },
    {
        id: 4,
        nombre: "Luisa",
        edad: 20,
        programa: "Diseño",
        promedio: 4.1
    },
    {
        id: 5,
        nombre: "Pedro",
        edad: 24,
        programa: "Mecánica",
        promedio: 2.9
    }
];

function buscarEstudiante(id: number) {

    let estudiante = estudiantesin.find(estudiante => estudiante.id === id);

    if (estudiante) {
        console.log(estudiante);
    } else {
        console.log("El estudiante no existe");
    }

}

buscarEstudiante(3);

//Ejercicio 4 
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    categoria: string;
}

let productos: Producto[] = [
    {
        id: 1,
        nombre: "Mouse",
        precio: 50000,
        stock: 10,
        categoria: "Tecnología"
    },
    {
        id: 2,
        nombre: "Teclado",
        precio: 80000,
        stock: 8,
        categoria: "Tecnología"
    },
    {
        id: 3,
        nombre: "Monitor",
        precio: 700000,
        stock: 5,
        categoria: "Tecnología"
    },
    {
        id: 4,
        nombre: "Impresora",
        precio: 600000,
        stock: 4,
        categoria: "Oficina"
    },
    {
        id: 5,
        nombre: "USB",
        precio: 30000,
        stock: 20,
        categoria: "Accesorios"
    }
];

console.log(productos);

//Ejercicio 5
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    categoria: string;
}

let productos1: Producto[] = [
    {
        id: 1,
        nombre: "Mouse",
        precio: 50000,
        stock: 10,
        categoria: "Tecnología"
    },
    {
        id: 2,
        nombre: "Teclado",
        precio: 80000,
        stock: 8,
        categoria: "Tecnología"
    },
    {
        id: 3,
        nombre: "Monitor",
        precio: 700000,
        stock: 5,
        categoria: "Tecnología"
    },
    {
        id: 4,
        nombre: "Impresora",
        precio: 600000,
        stock: 4,
        categoria: "Oficina"
    },
    {
        id: 5,
        nombre: "USB",
        precio: 30000,
        stock: 20,
        categoria: "Accesorios"
    }
];

function agregarProducto(producto: Producto) {

    productos1.push(producto);

}

agregarProducto({
    id: 6,
    nombre: "Disco Duro",
    precio: 350000,
    stock: 6,
    categoria: "Tecnología"
});

console.log(productos);

//Ejercicio 6
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    categoria: string;
}

let productos2: Producto[] = [
    {
        id: 1,
        nombre: "Mouse",
        precio: 50000,
        stock: 10,
        categoria: "Tecnología"
    },
    {
        id: 2,
        nombre: "Teclado",
        precio: 80000,
        stock: 8,
        categoria: "Tecnología"
    },
    {
        id: 3,
        nombre: "Monitor",
        precio: 700000,
        stock: 5,
        categoria: "Tecnología"
    },
    {
        id: 4,
        nombre: "Impresora",
        precio: 600000,
        stock: 4,
        categoria: "Oficina"
    },
    {
        id: 5,
        nombre: "USB",
        precio: 30000,
        stock: 20,
        categoria: "Accesorios"
    }
];

let total = 0;

productos2.forEach(producto => {

    total = total + (producto.precio * producto.stock);

});

console.log("Valor total del inventario:", total);

//Ejercicio 7 
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    categoria: string;
}

let productos3: Producto[] = [
    {
        id: 1,
        nombre: "Mouse",
        precio: 50000,
        stock: 10,
        categoria: "Tecnología"
    },
    {
        id: 2,
        nombre: "Teclado",
        precio: 80000,
        stock: 8,
        categoria: "Tecnología"
    },
    {
        id: 3,
        nombre: "Monitor",
        precio: 700000,
        stock: 5,
        categoria: "Tecnología"
    },
    {
        id: 4,
        nombre: "Impresora",
        precio: 600000,
        stock: 4,
        categoria: "Oficina"
    },
    {
        id: 5,
        nombre: "USB",
        precio: 30000,
        stock: 20,
        categoria: "Accesorios"
    }
];

function actualizarStock(id: number, nuevoStock: number) {

    let producto = productos3.find(producto => producto.id === id);

    if (producto) {
        producto.stock = nuevoStock;
        console.log(productos3);
    } else {
        console.log("Producto no encontrado");
    }

}

actualizarStock(3, 12);

//Ejercicio 8

interface Cliente {
    id: number;
    nombre: string;
    correo: string;
    telefono: string;
    activo: boolean;
}

let clientes: Cliente[] = [
    {
        id: 1,
        nombre: "Gilbert",
        correo: "gilbert@gmail.com",
        telefono: "3101111111",
        activo: true
    },
    {
        id: 2,
        nombre: "Ana",
        correo: "ana@gmail.com",
        telefono: "3112222222",
        activo: false
    },
    {
        id: 3,
        nombre: "Carlos",
        correo: "carlos@gmail.com",
        telefono: "3123333333",
        activo: true
    },
    {
        id: 4,
        nombre: "Luisa",
        correo: "luisa@gmail.com",
        telefono: "3134444444",
        activo: true
    },
    {
        id: 5,
        nombre: "Pedro",
        correo: "pedro@gmail.com",
        telefono: "3145555555",
        activo: false
    }
];

let clientesActivos = clientes.filter(cliente => cliente.activo);

console.log(clientesActivos);

//Ejercicio 9
interface Cita {
    id: number;
    cliente: string;
    servicio: string;
    fecha: string;
    hora: string;
    estado: "pendiente" | "realizada" | "cancelada";
}

let citas: Cita[] = [
    {
        id: 1,
        cliente: "Gilbert",
        servicio: "Corte",
        fecha: "15/07/2026",
        hora: "08:00",
        estado: "pendiente"
    },
    {
        id: 2,
        cliente: "Ana",
        servicio: "Tinte",
        fecha: "15/07/2026",
        hora: "09:00",
        estado: "realizada"
    },
    {
        id: 3,
        cliente: "Carlos",
        servicio: "Barba",
        fecha: "15/07/2026",
        hora: "10:00",
        estado: "cancelada"
    },
    {
        id: 4,
        cliente: "Luisa",
        servicio: "Peinado",
        fecha: "16/07/2026",
        hora: "11:00",
        estado: "pendiente"
    },
    {
        id: 5,
        cliente: "Pedro",
        servicio: "Corte",
        fecha: "16/07/2026",
        hora: "02:00",
        estado: "pendiente"
    }
];

let citasPendientes = citas.filter(cita => cita.estado === "pendiente");

console.log(citasPendientes);

//Ejercicio 10

interface Curso {
    id: number;
    nombre: string;
    instructor: string;
    calificaciones: number[];
}

let cursos: Curso[] = [
    {
        id: 1,
        nombre: "TypeScript",
        instructor: "Carlos Ruiz",
        calificaciones: [4.5, 4.0, 3.8, 5.0]
    },
    {
        id: 2,
        nombre: "Angular",
        instructor: "María López",
        calificaciones: [3.5, 4.2, 4.8, 4.0]
    },
    {
        id: 3,
        nombre: "Bases de Datos",
        instructor: "Pedro Gómez",
        calificaciones: [3.0, 3.8, 4.1, 4.5]
    }
];

cursos.forEach(curso => {

    let suma = 0;

    curso.calificaciones.forEach(calificacion => {
        suma = suma + calificacion;
    });

    let promedio = suma / curso.calificaciones.length;

    console.log("Curso:", curso.nombre);
    console.log("Promedio:", promedio);

});