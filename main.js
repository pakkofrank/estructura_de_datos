let btn1 = document.querySelector("#btn");
btn1.addEventListener('click', sueldo);

function sueldo (){
    let numeros = document.querySelector("#numero");
    let sueldo = Number(numeros.value);
    
    if(sueldo <= 1000){
        let aumento = sueldo*0.15;
        let total = sueldo+aumento 

        console.log(total)
        document.querySelector('#resultado').innerHTML="su aumento es de un 15% "+" = "+aumento+", total de $"+total;

    }else if(sueldo >= 1001 && sueldo <= 1200){

        let aumento1 = sueldo*0.12;
        let total1 = sueldo+aumento1; 

        console.log(aumento1)
        document.querySelector('#resultado').innerHTML="su aumento es de un 12% "+" = "+aumento1+", total de $"+total1;

    }else if(sueldo >= 1201 && sueldo <= 1400){

        let aumento2 = sueldo*0.10;
        let total2 = sueldo+aumento2; 

        console.log(aumento2)
        document.querySelector('#resultado').innerHTML="su aumento es de un 10% "+" = "+aumento2+", total de $"+total2;

    }else if(sueldo >= 1401 && sueldo <= 1500){

        let aumento3 = sueldo*0.8;
        let total3 = sueldo+aumento3; 

        console.log(total3)
        document.querySelector('#resultado').innerHTML="su aumento es de un 8% "+" = "+aumento3+", total de $"+total3;

    }else if(sueldo > 1500){

        let aumento4 = sueldo*0.05;
        let total4 = sueldo+aumento4; 

        console.log(total4)
        document.querySelector('#resultado').innerHTML="su aumento es de un 5%  "+" = "+aumento4+", total de $"+total4;

    }
    
    
    //document.getElementById('resultado').innerHTML=x;
}
