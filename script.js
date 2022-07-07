// document.querySelectorAll('.course-block-div h1').forEach((el) => {
//     el.addEventListener('click', () => {
//         let content = el.nextElementSibling;
//         console.log(content);
//         if(content.style.maxHeight){
//             document.querySelectorAll('.course-block-div-list').forEach((el => el.style.maxHeight = null));
//         }else{
//             document.querySelectorAll('.course-block-div-list').forEach((el => el.style.maxHeight = null));
//             content.style.maxHeight = content.scrollHeight + 'px';
//             // document.querySelectorAll('.course-block-div');
//             // content.style.borderRadius = 10 + 'px';
//         }
//     })
// })
function CheckedFun(){
    let BorderStyle1 = document.getElementById("vis-panel");
    let BorderStyle2 = document.getElementById("vis-panel1");
    let BorderStyle3 = document.getElementById("vis-panel2");
    let BorderStyle4 = document.getElementById("vis-panel3");
    let CourseBlockDiv = document.querySelector('.course-block-div');
    if(BorderStyle1.checked){
        CourseBlockDiv.style.borderRadius = '18px';
    }else{
        CourseBlockDiv.style.borderRadius = '40px';
    }
    if(BorderStyle2.checked){
        CourseBlockDiv.style.borderRadius = '18px';
    }else{
        CourseBlockDiv.style.borderRadius = '40px';
    }
    if(BorderStyle3.checked){
        CourseBlockDiv.style.borderRadius = '18px';
    }else{
        CourseBlockDiv.style.borderRadius = '40px';
    }
    if(BorderStyle4.checked){
        CourseBlockDiv.style.borderRadius = '18px';
    }else{
        CourseBlockDiv.style.borderRadius = '40px';
    }
}