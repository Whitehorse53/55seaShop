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











// 注册

var login = $('.login_sure_button');
var add = $('.sign_sure_button');

$('.sign_sure_button').click(function (){
    var inputLogin = $('.sign_number_input');
    var inpoutPass = $('.sign_pssword_input');
    console.log('inputLogin.value: ',inputLogin.value);
    console.log('inpoutPass: ', inpoutPass);
   
        if (!inputLogin.value.value || inpoutPass.value) {   
            alert('账号或密码不能为空！');
            return false;
        }
        ajax({
            url: '../code/data/user.php',
            type: 'post',
            data: {
                type: 'add',
                use2r: user2.value,
                pass2: pass2.value
            },
            dataType: 'json',
            success: function (data){
                var json = JSON.parse(data);
                alert(json.msg);
            },
            error: function (status){
                alert('提交失败');
            }
        });
    })
    
    $('.login_sure_button').click(function (){
var user1 = $('.login_number_input');
var pass1 = $('.login_pssword_input');
        if (!user1.value || !pass1.value) {
            alert('账号或密码不能为空！');
            return false;
        }
        ajax({
            url: '../code/data/user.php',
            type: 'post',
            data: {
                type: 'login',
                user1: user1.value,
                pass1: pass1.value
            },
            dataType: 'json',
            success: function (data){
                var json = JSON.parse(data);
                alert(json.msg);
            },
            error: function (status){
                alert('提交失败');
            }
        });
    })