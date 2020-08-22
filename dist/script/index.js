$(function() {
  $('.head').load('../pages/head.html');
  $('.foot').load('../pages/indexfoot.html');
})
 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 3000,
      loop: true,
      setWrapperSize :true,
      autoplay:{
        delay:3000,
        stopOnLastSlide:true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },   
    });
    $.ajax({
      url: '../data/index.json',
      type: 'get',
      dataType: 'json',
      success: function(data){ 
        var numlist=data.data.top_deals;
        console.log('numlist: ', numlist);
        numlist.forEach((item,index)=>{          
                      $('.recent_news_list ul').append(`
                      <li>
                      <img src="${item.deal_pic}" alt="">
                
                <div class="recent_news_list_every">
                  <h3 class="recent_news_list_every_1">
                    <span class="recent_news_list_every_1_left">${item.rebate_view}</span>
                    <div  class="recent_news_list_every_1_right">
                      <span class="recent_news_list_every_1_right_1">
                      ${item.title}
                      </span>
                      <span class="recent_news_list_every_1_right_2">${item.price_view}</span>
                    </div>
                  </h3>
                  <div class="recent_news_list_every_2">
                    <span>转运</span>
                    <span>中文客服</span>
                    <span>支付宝</span>
                  </div>
                  <div class="recent_news_list_every_3">
                  ${item.introduction}
                  </div>
                  <div class="recent_news_list_every_4">
                    <span class="recent_news_list_every_4_left">折扣码:</span>
                    <span class="recent_news_list_every_4_center">20now</span>
                    <span class="recent_news_list_every_4-right">距离结束还有${item.left_time}</span>
                  </div>
                  <div class="recent_news_list_every_5">
                    <div class="recent_news_list_every_5_left_1">
                      <span class="recent_news_list_every_5_left_1_in">点赞</span>
                    </div>
                    <div class="recent_news_list_every_5_left_2">
                      <span class="recent_news_list_every_5_left_2_in">评论</span>
                    </div>
                    <div class="recent_news_list_every_5_right">
                      <div class="recent_news_list_every_5_time">今天17:27</div>
                      <div class="recent_news_list_every_5_country">
                        <span>${item.store_urlname}</span>
                      </div >
                      <div class="recent_news_list_every_5_go">去购买,那返利</div>
                    </div>
                  </div>
                
                </div>
                
                    </li>
                 ` )
                     })     
                          
      }
  })
  //划过的动效
  $('.rebate_merchant_img li').mouseover(function(e){
        // if(e.target.parentNode===$('.rebate_merchant_img').get(0)){
          var pLeft=e.target.offsetLeft
          console.log('pLeft: ', pLeft);
          // $('.rebate_merchant_img_p').css("left",pLeft)   
          // $('.rebate_merchant_img_p').css("width", e.target.clientWidth)
          console.log('e.target.clientWidth: ', e.target.clientWidth);
          $('.rebate_merchant_img_p').stop()
          $('.rebate_merchant_img_p').animate({
             "left":pLeft,
             "width":e.target.clientWidth
          },300)
      
        // } 

  })
   //划过的动效
   $('.overseas_merchant_ul li').mouseover(function(e){
   
      var pLeft=e.target.offsetLeft
      console.log('pLeft: ', pLeft);
      $('.overseas_merchant_ul_p').stop()
      $('.overseas_merchant_ul_p').animate({
         "left":pLeft,
         "width":e.target.clientWidth
      },300)
  
   

})