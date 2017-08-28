/* ========================================================
*                              CALCULO ÁREA DO QUADRADO 
*=========================================================*/

// Calculo o valor da área informado pelo usuario e retorna o resultado.. 
document.getElementById('button').onclick = function(){
    
    var area1 = document.getElementById('l1').value;
    var area2 = document.getElementById('l2').value;

    if( area1 === area2){
        
        document.getElementById('valordaarea').innerHTML = 'O valor da sua área é ' + area1 * area2;
    } 
   
    if( area1 > area2){
        
        document.getElementById('valordaarea').innerHTML = 'O valor da área 1 é maior que o valor da área 2';
    }
    
    else if( area2 > area1){
        
        document.getElementById('valordaarea').innerHTML = 'O valor da área 2 é maior que o valor da área 1';
    }
}

/* ========================================================
*                              CALCULADORA  
*=========================================================*/

// CAPTURA OS VALORES 
function num(numero){
    document.calculadora.visor.value += numero;
}

// LIMPA A TELA QUANDO CLICAR EM "AC" 
function limpar(){
    document.calculadora.visor.value = '';
}

// ENTREGA O RESULTADO CLICANDO EM =
function calcular(){
    document.calculadora.visor.value = eval(document.calculadora.visor.value);
}