window.addEventListener('load',()=>{

    const Prod_Name = localStorage.getItem('prod-name');
    const Prod_Price = localStorage.getItem('prod-price');
    const Prod_ImgUrl = localStorage.getItem('prod-imgurl');
    const Prod_Id = localStorage.getItem('prod-id');

    document.getElementById('prod_name').innerHTML = Prod_Name;
    document.getElementById('prod_price').innerHTML = Prod_Price;
    document.getElementById('prod_imgurl').src = Prod_ImgUrl;
    document.getElementById('prod-Id-showing').innerHTML = Prod_Id;

})