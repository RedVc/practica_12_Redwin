
// Números
function ingresarNumeros() {

    let numero = 0;

    // El número ingresado debe estar entre 1 y 100 y no ser una letra
    do {
       numero = prompt("Número entre 1 y 100");
    } while (numero > 100 || numero < 1 || isNaN(numero));




    // ------------------------------------ Factorial ------------------------------------
    let factorial = function (n) {

        let total = 1;

        for (let i = 1; i <= n; i++) {
            
            total *= i;
            
        }

        

        return total;
    };

    // llama la variable que contiene la función
    window.resultado1 = factorial(numero);

    



    // ------------------------------------ par|impar ------------------------------------
    let parImpar = new Function("a", "return a = a % 2 == 0 ? 1 : 0" )

    let resultado2 = parImpar(numero);

    window.mensaje = "";

    // Si resultado2 tiene un 1 es par, de lo contrario es impar
    if (resultado2 == 1) {
        
        mensaje = "Par"
    
    } else {
    
        mensaje = "Impar";
    
    }


    
    
    // ------------------------------------ Primo ------------------------------------ 
    


}




// ------------------------------ Factorial ----------------------------------------
// Mouse Enter 1
function over1() {
    document.getElementById('res1').innerHTML = resultado1;
}

// Mouse Leave
function leave1() {
    document.getElementById('res1').innerHTML = "Factorial del número:";
}

// eventListener
document.getElementById('resultado1').addEventListener("mouseenter", over1);
document.getElementById('resultado1').addEventListener("mouseleave", leave1);




// -------------------------------- Par/Impar--------------------------------------
// Mouse Enter 1
function over2() {
    document.getElementById('res2').innerHTML = mensaje;
}

// Mouse Leave
function leave2() {
    document.getElementById('res2').innerHTML = "El número es (par/impar):";
}



// eventListener
document.getElementById('resultado2').addEventListener("mouseenter", over2);
document.getElementById('resultado2').addEventListener("mouseleave", leave2);
