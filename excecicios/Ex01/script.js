function carregar() {
  var msg = window.document.getElementById("mensagem");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  //var hora = data.getHours();
  var hora = 
  msg.innerHTML = `Agora são ${hora} horas.`;
 
  if (hora >= 0 && hora < 12) {
    img.src = "fotos/manha.jpg";
    document.body.style.background = "#F2B90C";
  } else if (hora >= 12 && hora < 18) {
    img.src = "fotos/tarde.jpg";
    document.body.style.background = "#5888A6";
  } else {
    img.src = "fotos/noite.jpg";
    document.body.style.background = "#856DA6";
  }
}
