
const returnBtn = document.getElementById('returnBtn')



returnBtn.onclick = () => {
    goBack()
}


function goBack() {
    window.history.back();
}