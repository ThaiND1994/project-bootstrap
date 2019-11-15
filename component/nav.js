//khi người dùng click vào icon Bars bên trong class menu-toggle thì sẽ tự động thêm class active vào nav lúc này ul sẽ hiện ra
// vì bên CSS nếu độ rộng màn hình dưới 991px sẽ ẩn thẻ nav đi,nêu người dùng click vào sẽ hiện ra
//.toggleClass(): Thêm hoặc loại bỏ một hoặc nhiều class của thành phần.(jquery)
$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    })
})