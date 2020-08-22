$(function() {
    $('.head1').load('../pages/head.html');
    $('.foot1').load('../pages/foot.html');
  })
  function getQueryString(key){
    var url = location.href;
    var searchStr = url.split('?')[1];
    var reg = new RegExp('[&]?'+key+'=([^&#]*)[&]?','i');
    var arr = searchStr.match(reg);
    // console.log(arr[1]);
    // console.log( RegExp.$1 );
    return (RegExp.$1);
}
var id=getQueryString("id")
console.log('id: ', id);
  $.ajax({
    url: '../data/product.json',
    type: 'get',
    dataType: 'json',
    success: function(data){     
     data.forEach((item,index)=>{         
       if(item.id==id){
        $('.product_connect_left').append(`
        <div class="product_connect_left_up">
        <div class="product_connect_left_up_img">
        <img src="${item.deal_pic}" alt="">
      </div>
      <div class="product_connect_left_up_img_font">
        <div class="product_connect_left_up_img_font_p1">
          <span class="product_connect_left_up_img_font_p1_left">${item.rebate_view}</span>
          <span class="product_connect_left_up_img_font_p1_right1">
          ${item.title}
          </span>
          <span class="product_connect_left_up_img_font_p1_right2">
            ${item. price_view}
          </span>

        </div>
        <div class="product_connect_left_up_img_font_p2">
          <span> ${item.country_name}</span>
        </div>
        <div class="product_connect_left_up_img_font_p3">

          <img class="product_connect_left_up_img_font_p3_img" src=" ${item.country_flag_pic}" alt="">
          <span class="product_connect_left_up_img_font_p3_country">${item.country_abbr}</span>
          <span class="product_connect_left_up_img_font_p3_person">|</span>
          <span class="product_connect_left_up_img_font_p3_name">爆料人：${item.store_urlname}</span>
          <span class="product_connect_left_up_img_font_p3_time">${item.publish_time}</span>
          
        </div>
        <div class="product_connect_left_up_img_font_p4">去购买，拿返利</div>
      </div>
     
    </div>
    <div class="product_connect_left_down">
    <p>
    ${item.introduction}
    </p>
    </div>
   ` )
$('.product_connect_right_up_top').append(`
<div class="product_connect_right_up_add">
            <img class="product_connect_right_up_top_img" src="${item.deal_pic}" alt="">
            <div class="product_connect_right_up_top_p">
              <div class="product_connect_right_up_top_p1">
                <span class="product_connect_right_up_top_p1_font">${item.store_name}</span>
                <img class="product_connect_right_up_top_p1_img" src="${item.country_flag_pic}" alt="">
              </div>
              <span class="product_connect_right_up_top_p2"> ${item. price_view}</span>
              <span class="product_connect_right_up_top_p3">2.7万人获利</span>
            </div>
          </div>
`)






























       }
       
       
                  
                   })     
                        
    }
})