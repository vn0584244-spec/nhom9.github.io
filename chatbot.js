function ask(){

let q=document.getElementById("q").value

let chat=document.getElementById("chat")

chat.innerHTML+="<p><b>Bạn:</b> "+q+"</p>"

let a="Xin lỗi tôi chưa hiểu câu hỏi."

if(q.includes("giá"))
a="Bạn có thể xem giá sách ở mục Mua sắm."

if(q.includes("liên hệ"))
a="Hotline: 0123 456 789"

if(q.includes("sách hot"))
a="Sapiens, Atomic Habits, Đắc Nhân Tâm."

chat.innerHTML+="<p><b>Bot:</b> "+a+"</p>"

}