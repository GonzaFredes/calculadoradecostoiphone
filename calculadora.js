let nombreCliente = prompt("Bienvenid@! \n \nAquí podrás calcular cuanto te costará adquirir el último Iphone en Argentina con impuestos y envío incluído.\n \nPor favor ingresa tu nombre.")
let dolar = parseInt(prompt("¡Hola " + nombreCliente + "! " + "\n \nIngresa el valor del dólar blue actual (Sólo números enteros). \n \nPara obtener el valor de dolar blue consulta https://dolarhoy.com/cotizaciondolarblue y utiliza el valor de VENTA \n \nSi no quieres buscar el valor actual puedes tomar como valor de referencia $295 (Recuerda ingresar solo el número,sin el símbolo $)"))
let producto = (prompt("El valor ingresado es de $" + dolar + " pesos argentinos por cada dolar americano \n \nElige un producto de la siguiente lista \n \n1. Iphone 13 \n2. Iphone 13 Pro \n3. Iphone 13 Pro Max"))

while ((producto !== "1") && (producto !== "2") && (producto !== "3")) {
    alert("Ingresa una opción disponible, solo pueden ingresarse números, inténtalo nuevamente")
    producto = (prompt("El valor ingresado es de $" + dolar + " pesos argentinos por cada dolar americano \n \nElige un producto de la siguiente lista \n \n1. Iphone 13 \n2. Iphone 13 Pro \n3. Iphone 13 Pro Max"))
}

valorIphone13128 = 0
valorIphone13256 = 0
valorIphone13512 = 0
valorIphone13Pro128 = 0
valorIphone13Pro256 = 0
valorIphone13Pro512 = 0
valorIphone13Pro1TB = 0
valorIphone13ProMax128 = 0
valorIphone13ProMax256 = 0
valorIphone13ProMax512 = 0
valorIphone13ProMax1TB = 0

const costoEnvioBA = 25
const costoEnvioInt = 32

if (producto === "1") {
    primeraOpcionIphone13 = prompt("¿Que version de Iphone 13 quieres? (Ingresa el número correspondiente a alguna de las siguientes opciones) \n \n1.128 GB\n2.256 GB\n3.512 GB")
    while ((primeraOpcionIphone13 !== "1") && (primeraOpcionIphone13 !== "2") && (primeraOpcionIphone13 !== "3") && (primeraOpcionIphone13 !== "4")) {
        alert("Ingresa una opción válida")
        primeraOpcionIphone13 = prompt("¿Que version de Iphone 13 quieres? (Ingresa el número correspondiente a alguna de las siguientes opciones) \n \n1.128 GB\n2.256 GB\n3.512 GB")
    }
    if (primeraOpcionIphone13 === "1") {
        valorIphone13128 = 799
    } else if (primeraOpcionIphone13 === "2") {
        valorIphone13256 = 899
    } else if (primeraOpcionIphone13 === "3") {
        valorIphone13512 = 1099
    }
} else if (producto === "2") {
    segundaOpcionIphone13Pro = prompt("¿Que version de Iphone 13 Pro quieres? (Ingresa el número correspondiente a alguna de las siguientes opciones) \n \n1.128 GB\n2.256 GB\n3.512 GB\n4.1 TB")
    while ((segundaOpcionIphone13Pro !== "1") && (segundaOpcionIphone13Pro !== "2") && (segundaOpcionIphone13Pro !== "3") && (segundaOpcionIphone13Pro !== "4") && (segundaOpcionIphone13Pro !== "5")) {
        alert("Ingresa una opción válida")
        segundaOpcionIphone13Pro = prompt("¿Que version de Iphone 13 Pro quieres? (Ingresa el número correspondiente a alguna de las siguientes opciones) \n \n1.128 GB\n2.256 GB\n3.512 GB\n4.1 TB")
    }
    if (segundaOpcionIphone13Pro === "1") {
        valorIphone13Pro128 = 999
    } else if (segundaOpcionIphone13Pro === "2") {
        valorIphone13Pro256 = 1099
    } else if (segundaOpcionIphone13Pro === "3") {
        valorIphone13Pro512 = 1299
    } else if (segundaOpcionIphone13Pro === "4") {
        valorIphone13Pro1TB = 1499
    }
} else if (producto === "3") {
    terceraOpcionIphone13ProMax = prompt("¿Que version de Iphone 13 Pro Max quieres? (Ingresa el número correspondiente a alguna de las siguientes opciones) \n \n1.128 GB\n2.256 GB\n3.512 GB\n4.1 TB")
    while ((terceraOpcionIphone13ProMax !== "1") && (terceraOpcionIphone13ProMax !== "2") && (terceraOpcionIphone13ProMax !== "3") && (terceraOpcionIphone13ProMax !== "4") && (terceraOpcionIphone13ProMax !== "5")) {
        alert("Ingresa una opción válida")
        terceraOpcionIphone13ProMax = prompt("¿Que version de Iphone 13 Pro Max quieres? (Ingresa el número correspondiente a alguna de las siguientes opciones) \n \n1.128 GB\n2.256 GB\n3.512 GB\n4.1 TB")
    }
    if (terceraOpcionIphone13ProMax === "1") {
        valorIphone13Pro128 = 1099
    } else if (terceraOpcionIphone13ProMax === "2") {
        valorIphone13Pro256 = 1199
    } else if (terceraOpcionIphone13ProMax === "3") {
        valorIphone13Pro512 = 1399
    } else if (terceraOpcionIphone13ProMax === "4") {
        valorIphone13Pro1TB = 1599
    }
}

let lugarEnvio = (prompt("A qué parte de Argentina quieres que te enviemos tu Iphone? (Responde con el número correspondiente a tu opción)\n \n 1.Buenos Aires\n 2.Interior del país"))

while ((lugarEnvio !== "1") && (lugarEnvio !== "2")) {
    alert("Ingresa una opción disponible, solo pueden ingresarse números, inténtalo nuevamente")
    lugarEnvio = (prompt("A qué parte de Argentina quieres que te enviemos tu Iphone? (Responde con el número correspondiente a tu opción solamente)\n \n 1.Buenos Aires\n 2.Interior del país"))
}

function sumar() {
    if (lugarEnvio === "1") {
        const resultado = costoEnvioBA + valorIphone13128 + valorIphone13256 + valorIphone13512 + valorIphone13Pro128 + valorIphone13Pro256 + valorIphone13Pro512 + valorIphone13Pro1TB + valorIphone13ProMax128 + valorIphone13ProMax256 + valorIphone13ProMax512 + valorIphone13ProMax1TB
        return resultado
    } else if (lugarEnvio === "2") {
        const resultado = costoEnvioInt + valorIphone13128 + valorIphone13256 + valorIphone13512 + valorIphone13Pro128 + valorIphone13Pro256 + valorIphone13Pro512 + valorIphone13Pro1TB + valorIphone13ProMax128 + valorIphone13ProMax256 + valorIphone13ProMax512 + valorIphone13ProMax1TB
        return resultado
    }
}

const sinImpuestos = (sumar() * dolar)

function totalImpuestos() {
    const impuestos = (((sumar() - 500) / 2) + sumar()) * dolar
    return impuestos
}

alert(nombreCliente + " el precio con envío sin impuestos para traer tu Iphone es de $" + sinImpuestos + " pesos argentinos, mientras que el precio final con impuestos y envío incluidos es de $" + totalImpuestos()+" pesos argentinos")
alert("Gracias por utilizar mi calculadora de costos. \n \n Developed by Gonzalo Fredes")