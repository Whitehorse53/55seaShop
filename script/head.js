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
//获取各地时间
// 0: {name_cn: "北京", name_en: "beijing", zone: "8"}
// 1: {name_cn: "伦敦", name_en: "london", zone: "1"}
// 2: {name_cn: "米兰", name_en: "milan", zone: "2"}
// 3: {name_cn: "首尔", name_en: "seoul", zone: "9"}
// 4: {name_cn: "奥克兰", name_en: "auckland", zone: "12"}
// 5: {name_cn: "洛杉矶", name_en: "losangeles", zone: "-7"}
// 6: {name_cn: "巴黎", name_en: "paris", zone: "2"}
// 7: {name_cn: "东京", name_en: "tokyo", zone: "9"}
// 8: {name_cn: "悉尼", name_en: "sydney", zone: "10"}
// 9: {name_cn: "柏林", name_en: "berlin", zone: "2"}
// 10: {name_cn: "纽约", name_en: "newyork", zone: "-4"}
function everyTime (n){
    var time1 = new Date()
    var month=time1.getMonth()+1;
    var day=time1.getDate();
    var hours=time1.getHours()-8+n;
    var minutes=time1.getMinutes();
     if(hours<0){
         hours=hours+24;
         day=day-1;
     }
     if(hours>24){
         hours=hours-24;
         day=day+1;
     }
     if(hours<10){
        hours="0"+hours;
     }
     if(minutes<10){
        minutes="0"+minutes;
     }
    return (month+"月"+day+"日"+hours+":"+minutes)
    }
    var beijing=everyTime(8)
    var london=everyTime(1)
    var milan=everyTime(2)
    var seoul=everyTime(9)
    var auckland=everyTime(12)
    var losangeles=everyTime(-7)
    var paris=everyTime(2)
    var tokyo=everyTime(9)
    var sydney=everyTime(10)
    var berlin=everyTime(2)
    var newyork=everyTime(-4)
    $('.head_top_nav_down_right_time').append(`
    时间：纽约<span>${newyork}</span><i class="iconfont icon-03-copy"></i>
    <ul>
        <li>时间：北京 <span>${beijing}</span></li>
        <li>时间：伦敦 <span>${london}</span></li>
        <li>时间：米兰 <span>${milan}</span></li>
        <li>时间：首尔 <span>${seoul}</span></li>
        <li>时间：奥克兰 <span>${auckland}</span></li>
        <li>时间：洛杉矶 <span>${losangeles}</span></li>
        <li>时间：巴黎 <span>${paris}</span></li>
        <li>时间：东京 <span>${tokyo}</span></li>
        <li>时间：悉尼 <span>${sydney}</span></li>
        <li>时间：柏林 <span>${berlin}</span></li>
        <li>时间：纽约 <span>${newyork}</span></li>
    </ul>
    `)
localStorage.getItem("user");
localStorage.getItem("pass");
if(localStorage.getItem("user")&&localStorage.getItem("pass")){
    $('.head_top_nav_down_right_inf').remove();
    $('.head_top_nav_down_right').append(`<div class="head_top_nav_down_right_inf">
    <div class="head_top_nav_down_right_login">用户:</div>
    <div class="head_top_nav_down_right_sign">${localStorage.getItem("user")}</div>
    <div class="head_top_nav_down_right_out">退出</div>
     </div>`)

}
$('.head_top_nav_down_right').on("click",'.head_top_nav_down_right1_out',
function(){
    localStorage.clear()
    alert("退出成功")
    $('.head_top_nav_down_right_inf').remove();
    $('.head_top_nav_down_right').append(`<div class="head_top_nav_down_right_inf">
    <div class="head_top_nav_down_right_login">登录</div>
    <div class="head_top_nav_down_right_sign">注册</div>
     </div>`)
    
})
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
$('.head_top_nav_down_right').on("click",'.head_top_nav_down_right_login',function(){
$('.login_weap').css("display","block")
$('.sign_weap').css("display","none")
})
//点击注册
$('.head_top_nav_down_right').on("click",'.head_top_nav_down_right_sign',function(){
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
    if(!$('.sign_other_inf_radio').is(':checked')){
        
     alert('请务必认真阅读并同意《用户协议》和《隐式政策》')
     return
    }
    // console.log( $('.sign_other_inf_radio').is(':checked'));
    var inputLogin = $('.sign_number_input');
    var inpoutPass = $('.sign_pssword_input');
  
        if (!inputLogin.val() || !inpoutPass.val()) {   
            console.log('inpoutPass.val(): ', inpoutPass.val());
            console.log('inputLogin.val() : ', inputLogin.val() );
            alert('注册账号或密码不能为空！');
            return false;
        }
        $.ajax({
            url: "../php/user.php",
            type: 'get',
            data: {
                type: 'add',
                user: inputLogin.val(),
                pass: inpoutPass.val()
            },
            dataType: 'json',
            success: function (data){     
               
                alert(data.msg);
                $('.login_weap').css("display","block")
                $('.sign_weap').css("display","none")
                // alert('跳转至登入页面 ');

            },
            error: function (status){
                console.log('status: ', status);
             
                // alert(status.msg);
                alert('提交失败');
            }
        });
    })
    
    $('.login_sure_button').click(function (){
        
            var user1 = $('.login_number_input');
            var pass1 = $('.login_pssword_input');
            console.log('user1.val(): ', user1.val());
            console.log('pass1.val(): ', pass1.val());
              
        if (!user1.val() || !pass1.val()) {    
            alert('登录账号或密码不能为空！');
            return false;
        }
        $.ajax({
            url:"../php/user.php",
            type: 'get',
            data: {
                type: 'login',
                user:user1.val(),
                  pass:pass1.val()
            },
            dataType: 'json',
            success: function (data){  
                console.log('data: ', data); 
                alert(data.msg);
                localStorage.setItem("user",user1.val())
                localStorage.setItem("pass",pass1.val())
              
                $('.login_weap').css("display","none")
               
                    $('.head_top_nav_down_right_inf').remove();
                    $('.head_top_nav_down_right').append(`<div class="head_top_nav_down_right_inf">
                    <div class="head_top_nav_down_right_login">用户:${localStorage.getItem("user")}<</div>
                    
                    <div class="head_top_nav_down_right1_out">退出</div>
                     </div>`)
                
                
            },
            error: function (status){
                console.log('status: ', status);
                alert(status.msg); 
            }
        });
    })
