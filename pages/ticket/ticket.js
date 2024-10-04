// 点击轮播图切换大图
const changeLargeImg = () => {
    const bigImg = document.querySelector('.content .left .img img')
    const smallIImgs = document.querySelectorAll('.content .left .swiper ul li img')

    smallIImgs.forEach(item => {
        item.addEventListener('click', () => {
            bigImg.src = item.src
        })
    })
}
changeLargeImg ()