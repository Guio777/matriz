let row = 0
let col = 0

function matriz(row,col){
    let datos = ""
    for(i = 0; i < row; i++)
    {
    for(j = 0; j < col; j++)
        
    {
        datos = datos + "[" + i + "," + j + "]";
        
    }
    datos+="\n"
    } 
    console.log(datos);
  
  
}

matriz(2,2)
