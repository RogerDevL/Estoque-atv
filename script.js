const bntSubmit = document.getElementById("btn");
 
 const data = [];
 
bntSubmit.addEventListener('click', function (event){    
    
    event.preventDefault();


 
    const usuario = {
 
        quant: quant.value,
        regiao: regiao.value,
        modelos: modelos.value,
        telefone: telefone.value,
        cnpj: cnpj.value,
        pagamento: pagamento.value,
        loja: loja.value
        
        


    }
    quant.value=""
    regiao.value="Regiao"
    modelos.value="Produtos disponiveis"
    telefone.value=""
    cnpj.value=""
    pagamento.value="Forma de pagamento"
    loja.value=""

    




data.push(usuario)
    console.log(usuario) 


})