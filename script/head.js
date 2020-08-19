// $('.head_top_nav_down_list_shops_list_ul').mouseover(function(){
//     
//     $.ajax({
//         url: '../data/head.json',
//         type: 'get',
//         dataType: 'json',
//         success: function(data){
//           
//         }
//     })
// })
// 
$.ajax({
    url: '../data/head.json',
    type: 'get',
    dataType: 'json',
    success: function(data){     
     data.forEach((item,index)=>{
        
            if(item.name==="综合商家"){         
                list_ul=item.stores
                $('.head_top_nav_down_list_shops_list_ul_li_details_show_1').text(item.name)            
                list_ul.forEach((item,index)=>{
                  
                    $('.head_top_nav_down_list_shops_list_ul_li_details').append(`
                    <div class="head_top_nav_down_list_shops_list_ul_li_details_show_card">
                    <img class="head_top_nav_down_list_shops_list_ul_li_details_show_img" src="${item.store_logo}" alt="">
                <div
                class="head_top_nav_down_list_shops_list_ul_li_details_show_img_weap">
                    <span class="head_top_nav_down_list_shops_list_ul_li_details_show_3">${item.store_name}</span>
                    <span class="head_top_nav_down_list_shops_list_ul_li_details_show_4">${item.rebate_view}</span>
                    <span
                        class="head_top_nav_down_list_shops_list_ul_li_details_show_5">${item.rebate_influence_view}</span>
                        </div>
                    </div> 
                    ` )
                   })     
               
            }
     })
    }
})
$('.head_top_nav_down_list_shops_list').on('mouseover','li',function(){
    // 获得点击的对象
    
    var list_li=$(this).text().trim()

var list_ul
var list_number
$('.head_top_nav_down_list_shops_list_ul_li_details_show_card').remove();
$.ajax({
            url: '../data/head.json',
            type: 'get',
            dataType: 'json',
            success: function(data){
                
             data.forEach((item,index)=>{
                    if(item.name===list_li){  
                        
                        list_ul=item.stores

                        $('.head_top_nav_down_list_shops_list_ul_li_details_show_1').text(item.name)
                    
                        
                        list_ul.forEach((item,index)=>{
                          
                            $('.head_top_nav_down_list_shops_list_ul_li_details').append(`
                            <div class="head_top_nav_down_list_shops_list_ul_li_details_show_card">
                            <img class="head_top_nav_down_list_shops_list_ul_li_details_show_img" src="${item.store_logo}" alt="">
                        <div
                        class="head_top_nav_down_list_shops_list_ul_li_details_show_img_weap">
                            <span class="head_top_nav_down_list_shops_list_ul_li_details_show_3">${item.store_name}</span>
                            <span class="head_top_nav_down_list_shops_list_ul_li_details_show_4">${item.rebate_view}</span>
                            <span
                                class="head_top_nav_down_list_shops_list_ul_li_details_show_5">${item.rebate_influence_view}</span>
                                </div>
                            </div> 
                            ` )
                           })     
                       
                    }
                
             })
            }
        })
})
//点击登录
$('.head_top_nav_down_right_login').click(function(){
$('.login_weap').css("display","block")
$('.sign_weap').css("display","none")
})
//点击注册
$('.head_top_nav_down_right_sign').click(function(){
    $('.login_weap').css("display","none")
    $('.sign_weap').css("display","block")
    })

$('.sign_no').click(function(){
    $('.login_weap').css("display","none")
    $('.sign_weap').css("display","none")
    })
    
$('.login_toggle_button_login').click(function(){
        $('.login_weap').css("display","block")
        $('.sign_weap').css("display","none")
        })
        //点击注册
$('.login_toggle_button_sign').click(function(){
    $('.login_weap').css("display","none")
    $('.sign_weap').css("display","block")
    })