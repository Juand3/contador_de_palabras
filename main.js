function contarPalabras(texto) {

    const palabras = texto.split(' ');
      
    
    const conteoPalabras = {};
      
    
    for (const palabra of palabras) {
    
    const palabraMinuscula = palabra.toLowerCase();
      
    
    if (conteoPalabras[palabraMinuscula]) {
    
    conteoPalabras[palabraMinuscula]++;
    } else {
    
    conteoPalabras[palabraMinuscula] = 1;
    }
    }
      
    
    for (const [palabra, contador] of Object.entries(conteoPalabras)) {
    console.log(`Palabra ${palabra}: ${contador} veces`);
    }
    }
      
    
    const textoUsuario = prompt('Ingrese una oracion:');
      
    
    contarPalabras(textoUsuario);
      