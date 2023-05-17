function calculate()
{
    let n = document.getElementById("nratio").value/100  ; 
    let p = document.getElementById("pratio").value/100 ; 
    let k = document.getElementById("kratio").value/100; 
     

    let reqn = document.getElementById("rn").value  + 0.0 ; 
    let reqp = document.getElementById("rp").value  + 0.0 ; 
    let reqk = document.getElementById("rk").value  + 0.0 ; 
    

    let area = document.getElementById("area").value 

  


    let namount  = (reqn / n) * area; 
    let pamount  = (reqp / p) * area; 
    let kamount  = (reqk / k) * area; 

    let  N =  Math.floor(namount);
  
    let P =  Math.floor(pamount);
   
    let K = Math.floor(kamount);

    document.getElementById("valuen").innerHTML = N.toString() + " Kg"  ; 
    document.getElementById("valuep").innerHTML = P.toString() +  " Kg" ; 
    document.getElementById("valuek").innerHTML = K.toString() + " Kg";  

    console.log(n) 
    console.log(p)
    console.log(k)
    console.log(reqn , reqp , reqk,area)
    console.log(N,P,K)
}   