let campocep =  document.querySelector('#cep');
let botao =  document.querySelector('#botao');
let rua =  document.querySelector('#rua');
let bairro =  document.querySelector('#bairro');
let cidade =  document.querySelector('#cidade');
let estado =  document.querySelector('#estado');
let ddd =  document.querySelector('#ddd');


cep.value = '01001000';

botao.addEventListener("click", function() {
    let campocep = document.querySelector('#cep');
    let cep = campocep.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=cbviacep'
    document.body.appendChild(script);
})

function cbviacep(resposta){

    if('erro' in resposta){
        alert("CEP NÃO ENCONTRADO!")
        return;
    }

    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    estado.value = resposta.uf;
    cidade.value = resposta.localidade;
    ddd.value = resposta.ddd;
}