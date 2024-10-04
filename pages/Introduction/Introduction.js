// 动态渲染游玩攻略列表
const playPlan = () => {
    const data  = [
        {
            path: '../../images/Introduction/Introduction1.png',
            title: '交通',
            content: '火车：婺源高铁站——是抵达婺源最方便的快捷交通方式'
            
        },
        {
            path: '../../images/Introduction/Introduction2.png',
            title: '出行',
            content: '支付宝搜索【上饶公交卡】乘坐公共交通扫码支付'
            
        },
        {
            path: '../../images/Introduction/Introduction3.png',
            title: '住宿',
            content: '婺源县城高端酒店推荐三家：宝婺度假酒店、开元名都大酒店、林栖大酒店。'
            
        },
        {
            path: '../../images/Introduction/Introduction4.png',
            title: '路线',
            content: '东线：李坑、月亮湾、汪口、江湾、晓起、江岭、篁岭、庆源、水墨上河（热门路线'
            
        },
        {
            path: '../../images/Introduction/Introduction5.png',
            title: '门票',
            content: '婺源风景区有通票和单独门票，通票包含'
            
        },
        {
            path: '../../images/Introduction/Introduction6.png',
            title: '篁岭',
            content: '篁岭真的是婺源一个宝藏的地方！'
            
        },
        {
            path: '../../images/Introduction/Introduction7.png',
            title: '江岭',
            content: '若论花海盛，当属江岭春'
            
        },
        {
            path: '../../images/Introduction/Introduction8.png',
            title: '庆源',
            content: '空山隐卧好烟霞，美似武陵桃源家'
            
        },
    ]

    const container = document.querySelector('.playPlan .left .content ul')
    let  str = ''
    data.forEach(item => {
        str += `
    <li>
        <div class="img"><img src="${item.path}" alt=""></div>
        <div class="txt">
            <h5>${item.title}</h5>
            <p>${item.content}</p>
        </div>
    </li>
        `
    })
    container.innerHTML = str
}
playPlan()

// 动态渲染景点排行榜列表

const playRank = () => {
    const data = [
        {
            path: '../../images/Introduction/bang1.png',
            name: '篁岭'
        },
        {
            path: '../../images/Introduction/bang2.png',
            name: '婺女洲'
        },
        {
            path: '../../images/Introduction/bang3.png',
            name: '庆源'
        },
        {
            path: '../../images/Introduction/bang4.png',
            name: '江岭'
        },
        {
            path: '../../images/Introduction/bang5.png',
            name: '李坑'
        }

    ]

    const container = document.querySelector('.playPlan .right ul')

    let str = ''
    data.forEach(item => {
       str +=  `
        <li >
        <div class="img"><img src=${item.path} alt="" ></div>
        <p>${item.name}</p>
        </li>
        `
    })

    container.innerHTML = str
}
playRank()



// 滑动渐变加载效果
const scrollShow = () => {
    const playPlan = document.querySelector('.playPlan')
    const feiYi = document.querySelector('.FeiYi')
    window.addEventListener('scroll', () => {
        console.log(window.scrollY);
        if (window.scrollY  >= 1050) {
            playPlan.classList.add('active')
        }
        if (window.scrollY  >= 2500) {
            feiYi.classList.add('active')
        }
    })
}
scrollShow()

