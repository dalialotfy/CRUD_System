var productName = document.getElementById("productName")
var productPrice = document.getElementById("productPrice")
var productCatgory = document.getElementById("productCatgory")
var productDesc = document.getElementById("productDesc")
var alertName = document.getElementById("alertName")
var alertPrice= document.getElementById("alertPrice")
var alertCateg = document.getElementById("alertCateg")
var alertDesc = document.getElementById("alertDesc")
var productContainer;
if(localStorage.getItem("productList")== null){
    productContainer=[];
}
else{
    productContainer = JSON.parse(localStorage.getItem("productList"));
    displayProduct()
}

function addProduct(){
  if(validationName()&&validationPrice()&&validationCateg()&&validatonDesc()){
    var product= {
        name:productName.value,
        price:productPrice.value,
        category:productCatgory.value,
        description:productDesc.value
    }
    productContainer.push(product)
    localStorage.setItem("productList",JSON.stringify(productContainer))
    console.log(productContainer)
    // deleteForm()
    displayProduct()

}
}

function deleteForm(){

    productName.value= "";
    productPrice.value= "";
    productCatgory.value= "";
    productDesc.value= "";

}
function displayProduct(){
    var cartoona= "";
    for(var i = 0 ; i<productContainer.length;i++){
        cartoona+=`
        <tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].description}</td>
        <td>
            <button class="btn btn-warning text-white" onclick="updateProduct(${i})"><i class="fas fa-edit"></i> 
                update
            </button>
        </td>
        <td>
            <button class="btn btn-danger" onclick="deletProduct(${i})"> <i class="fas fa-minus-square"></i>
                delete
            </button>
        </td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML=cartoona
    
}

function validationName(){
    var regex = /^[a-zA-Z][a-z]{3,8}[0-9]?$/ 
    if(regex.test(productName.value)){   //.test btrg3 boolean
        alertName.style.display="none"
        return true
    }
    else{
        alertName.style.display="block"
        return false

    }
}
function validationPrice(){
    var regex = /^[0-9]{3,5}$/ 
    if(regex.test(productPrice.value)){   //.test btrg3 boolean
        alertPrice.style.display="none"
        return true
    }
    else{
        alertPrice.style.display="block"
        return false

    }
}
function validationCateg(){
    var regex = /^[a-zA-z]{3,10}$/ 
    if(regex.test(productCatgory.value)){   //.test btrg3 boolean
        alertCateg.style.display="none"
        return true
    }
    else{
        alertCateg.style.display="block"
        return false

    }
}
function validatonDesc(){
    var regex = /^[a-zA-z ]{3,50}$/ 
    if(regex.test(productDesc.value)){   //.test btrg3 boolean
        alertDesc.style.display="none"
        return true
    }
    else{
        alertDesc.style.display="block"
        return false

    }
}


// function validationInput(){
//     if(productName.value !=""&& productPrice.value!=""&&productCatgory.value!=""&&productDesc.value!=""){
//         return true
//     }
//     else{
//         return false
//     }
// }


function deletProduct(index){
    productContainer.splice(index,1)
    localStorage.setItem("productList",JSON.stringify(productContainer)) 
    displayProduct()
}

function search(term){
    var cartoona ="";
    for(var i=0;i<productContainer.length;i++){
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())){
            cartoona+=`
            <tr>
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].description}</td>
            <td>
                <button class="btn btn-warning" onclick="updateProduct(${i})"> <i class="fas fa-edit" ></i>
                    update
                </button>
            </td>
            <td>
                <button class="btn btn-danger" onclick="deletProduct(${i})" > <i class="fas fa-minus-square"></i>
                    delete
                </button>
            </td>
        </tr>`
        }
        else{
            console.log("Not Exist")
        }
    }
    document.getElementById("tableBody").innerHTML=cartoona

}



function updateProduct(index){
    var button =''
    productName.value=productContainer[index].name; 
    productPrice.value=productContainer[index].price;
    productCatgory.value=productContainer[index].category;
    productDesc.value=productContainer[index].description ;
    button = `<button class="btn btn-info" onclick="getUpdate(${index})" >Update Product</button>`;
    document.getElementById("switch").innerHTML=button;


}

function getUpdate(num){
    var button =''
    if(validationName()&&validationPrice()&&validationCateg()&&validatonDesc()){
    productContainer[num].name=productName.value; 
    productContainer[num].price=productPrice.value;
    productContainer[num].category=productCatgory.value;
    productContainer[num].description=productDesc.value ;
    displayProduct()
    deleteForm()
    button= `<button class="btn btn-info" onclick="addProduct()" >Add Product</button> `
    document.getElementById("switch").innerHTML=button}

    
}
