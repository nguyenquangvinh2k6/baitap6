const btn = document.querySelectorAll("button")
btn.forEach(function(button,bai6){
   button.addEventListener("click",function(event){{
    var btnItem = event.target
    var product = btnItem.parentElement
    var producting = product.querySelector("img").src
    var productName = product.querySelector("H1").innerText
    var productPrice = product.querySelector("span").innerText
    addcart(productName,productPrice,producting)

   }})

})
function  addcart(productName,productPrice,producting){
    var addtr = document.createElement("tr")
    var trcontent = '<tr> <td style="display:flex; align-items:center" ><img style="width:70px" src="'+producting+'" alt="">'+productName+'</td>   <td><p><span>'+productPrice+'</span>đ</p</td>   <td><input style="width:30px;outline:none; " type="number" value="1" min="0"></td>   <td style="cursor: pointer ;" >Xóa</td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
}
