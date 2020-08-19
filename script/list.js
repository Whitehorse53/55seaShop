$(function() {
    $('.head').load('../pages/head.html');
    $('.foot').load('../pages/foot.html');
  })
  $.ajax({
    url: '../data/list.json',
    type: 'get',
    dataType: 'json',
    success: function(data){     
     data.forEach((item,index)=>{
                      
                    $('.gba_markeup_connect').append(`
                    <a class="gba_markeup_connect_a" href="../pages/product.html?id=${item.id}">
                    <div class="gba_markeup_connect_every">
                    <img class="gba_markeup_connect_every_img" src="${item.img1}" alt="">
                    <!-- 大图片上下分割 -->
                    <div class="gba_markeup_connect_every_coutry">
                     <img  class="gba_markeup_connect_every_coutry_img" src="${item.img2}" alt="">
                      <p class="gba_markeup_connect_every_coutry_name">${item.p1}</p>
                    </div>
                   
                    <p class="gba_markeup_connect_every_p1">${item.p2}</p>
                    <p class="gba_markeup_connect_every_p2">${item.p3}</p>
                    <div class="gba_markeup_connect_every_p3">${item.p4}</div>
                  </div>
                  </a>
               ` )
                   })     
                        
    }
})