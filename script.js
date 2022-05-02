document.querySelectorAll('.course-block-div h1').forEach((el) => {
    el.addEventListener('click', () => {
        let content = el.nextElementSibling;
        console.log(content);
        if(content.style.maxHeight){
            document.querySelectorAll('.course-block-div-list').forEach((el => el.style.maxHeight = null))
        }else{
            document.querySelectorAll('.course-block-div-list').forEach((el => el.style.maxHeight = null))
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
})
