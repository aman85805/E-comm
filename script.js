let productImg = document.getElementById("productImg")
let btn = document.getElementsByClassName("btn")
btn[0].onclick = function () {
    productImg.src = "https://getketchadmin.getketch.com/product/8905980899199/660/LMOS000182_1.jpg";
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
}
btn[1].onclick = function () {
    productImg.src = "https://getketchadmin.getketch.com/product/8905980899199/660/LMOS000182_4.jpg";
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
   
}
btn[2].onclick = function () {
    productImg.src = "https://getketchadmin.getketch.com/product/8905980899199/660/LMOS000182_3.jpg";
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
}