/*
    Fazer o que se pede:
    - Construir uma nova página com o tema "INTRODUÇÃO AO JAVASCRIPT"
    - Criar um arquivo CSS e incorporar na página. Usar todas as formatações CSS nesse arquivo.
    - A página deverá contes:
    -- O que é Java Script
    -- Logo ou símbolo
    -- Histórico
    -- Principais comandos, como declaração de variáveis, laços, imprimir em tela, capturar informações do usuário. 
    -- Nos exemplos de cada comando, colocar uma breve descrição.
*/

  // JavaScript demonstration
function doDemo (button) {
    var square = document.getElementById("square");
    square.style.backgroundColor = "#fa4";
    button.setAttribute("disabled", "true");
    setTimeout(clearDemo, 2000, button);
  }
  
  function clearDemo (button) {
    var square = document.getElementById("square");
    square.style.backgroundColor = "transparent";
    button.removeAttribute("disabled");
  }