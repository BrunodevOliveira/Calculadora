function insert(num){
   const concatenar_numero = document.querySelector('#exibir_resultado').innerHTML;
   document.querySelector('#exibir_resultado').innerHTML = concatenar_numero + num
}
function clean(){
    const limpar_campo = document.querySelector('#exibir_resultado').innerHTML = "";
    // limpar_campo += "" 
}
function back(){
    const apagar_algarismo = document.querySelector('#exibir_resultado').innerHTML;
    document.querySelector('#exibir_resultado').innerHTML = apagar_algarismo.substring(0, apagar_algarismo.length -1);
}
function calcular(){
    const exibir_resultado = document.querySelector('#exibir_resultado').innerHTML;
    
    // Confirmo se há algum valor para ser calculado. o método eval faz o cálculo
    if(exibir_resultado){
        document.querySelector('#exibir_resultado').innerHTML = eval(exibir_resultado);
    }
}