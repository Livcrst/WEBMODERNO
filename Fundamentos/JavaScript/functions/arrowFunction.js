let comparComThis = (param)=>{

    console.log(this === param);

}

comparComThis(global);

// Cada arquivo do node é um módulo, o this será ligado a função definida em seu módulo.