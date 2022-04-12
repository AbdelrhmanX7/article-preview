let shareBtn = document.querySelector(".acc-share")

shareBtn.onclick = function() {
    this.style.background = "hsl(214, 17%, 51%)"
    document.getElementById("share-img").classList.add("filter-white")
    document.querySelector('.share-states').style.display = "flex"
    event.stopPropagation()
}
document.onclick = function() {
    shareBtn.style.background = "hsl(210, 46%, 95%)"
    document.getElementById("share-img").classList.remove("filter-white")
    document.querySelector('.share-states').style.display = "none"
}