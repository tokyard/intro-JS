function mudar(){
  document.getElementById("visitante").innerHTML = document.getElementById("nome").value;
}


function preco(unidade) {
  var uni1 = parseInt(document.getElementById("uni1").innerHTML);
  var uni2 = parseInt(document.getElementById("uni2").innerHTML);
  var preco1 = parseFloat(document.getElementById("preco1").innerHTML);
  var preco2 = parseFloat(document.getElementById("preco2").innerHTML);

  switch (unidade) {
      case '+1':
          console.log('Mais unidades no produto 1');
          document.getElementById("uni1").innerHTML = ++uni1;
          document.getElementById("preco1").innerHTML = preco1 + 12.00;

          break;

      case '+2':
          console.log('Mais unidades no produto 2');
          document.getElementById("uni2").innerHTML = ++uni2;
          document.getElementById("preco2").innerHTML = preco2 + 15.00;

          break;
      case '-1':
          console.log('Menos unidades no produto 1');
          if (uni1 > 0) {
              document.getElementById("uni1").innerHTML = --uni1;
              document.getElementById("preco1").innerHTML = preco1 - 12.00;
          }
          break;
      case '-2':
          console.log('Menos unidades no produto 2');
          if (uni2 > 0) {
              document.getElementById("uni2").innerHTML = --uni2;
              document.getElementById("preco2").innerHTML = preco2 - 15.00;
          }
          break;
  }
}

function remover(rem) {
  if (rem == 'a1') {
      let pai=document.getElementById("itema");
      let filho=document.getElementById("proda");

      pai.removeChild(filho);

      let para = document.createElement('p');
      para.setAttribute("id", "aviso");
      para.innerHTML = "Item removido com sucesso <hr>";
      pai.appendChild(para);
  }else{
      let pai=document.getElementById("itemb");
      let filho=document.getElementById("prodf");

      pai.removeChild(filho);

      let para = document.createElement('p');
      para.setAttribute("id", "aviso");
      para.innerHTML = "Item removido com sucesso<hr>";
      pai.appendChild(para);   
    }
 
 
    }

function finalizar() {
  document.location.reload(true);
}


