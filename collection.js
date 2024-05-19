


var productcontainer = document.getElementById("products")
var productlist = productcontainer.querySelectorAll("div")
console.log(productlist)
console.log(productcontainer)
var search = document.querySelector("#search")
 search.addEventListener("keyup",function( ){

    var enteredvalue = event.target.value

    for(count=0;count<productlist.length;count=count+1)
        {
            
            var productname = productlist[count].querySelector("h1").textContent

            if(productname.indexOf(enteredvalue)<0)
                {
                    productlist[count].style.display="none"
                    console.log( productlist[count].style.display="none")

                }
                else
                {

                    productlist[count].style.display="block"
                    console.log( productlist[count].style.display="block")
                }

        }

 })