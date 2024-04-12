//Javascript no cuenta con el control del alcance de sus variable
//Sin embargo, existen convenciones que nos pueden ayudar a indicar cuando
//un elemento debe ser privado, es decir, que sólo lo manipularemos pr medio
//de métodos dentro de la clase


class Contador{
    constructor(valor){
        //Utilizar "_" para definir que un atributo o método lo usaremos como privado,
        //es decir, que sólo lo manipularemos dentro de la clase
        this._valor = valor

    }

    sumar(){
        this._valor = this._valor +1
    }

     obtenerValor(){
        return this._valor
     }
}

let contador = new Contador(0)

contador.sumar()
contador.sumar()
//contador._valor = 20 <- sintácticamente es correcto, sin embargo, por especificación esto no debería hacerse

console.log(contador.obtenerValor());