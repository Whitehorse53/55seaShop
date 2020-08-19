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