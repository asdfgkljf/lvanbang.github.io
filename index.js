// 首页区域


// 轮播图效果
(function () {
    // 获取当前轮播图元素
    const swiper = document.querySelector('.banner .content .silde ')
    // 定义图片参数
    num = 0

    // 定义计时器轮播效果
    let timer = setInterval(() => {
        if (num === 3) {
            num = 0
        }
        // 通过轮播图元素整体向左移动达到滑动切换效果
        swiper.style.marginLeft = -num * 1440 + 'px'
        num += 1
    }, 3000)

    // 定义按钮点击切换效果
    const prev = document.querySelector('.banner .content .left') // 获取上一页箭头
    const next = document.querySelector('.banner .content .right')// 获取下一页箭头

    // 上一页箭头绑定点击事件，切换上一张轮播图
    prev.addEventListener('click', () => {
        num = num - 1
        if (num < 0) {
            num = 2
        }
        imgchange(num)
        // 点击后关闭自动切换
        clearInterval(timer)
        // console.log(num);
    })
    // 下一页箭头绑定点击事件，切换下一张轮播图
    next.addEventListener('click', () => {
        num = num + 1
        if (num >= 3) {
            num = 0
        }
        imgchange(num)
        // 点击后关闭自动切换
        clearInterval(timer)
        // console.log(num);

    })


    // 点击切换轮播图函数
    function imgchange(n) {
        swiper.style.marginLeft = -n * 1440 + 'px'
    }
})()

// 悬浮导航栏
function Nav() {

    window.addEventListener('scroll', () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 170) {
            document.querySelector('#nav').style.top = '0px'
            console.log('ascasc');
        }
        else {
            document.querySelector('#nav').style.top = '-100px'
        }
    })
}
Nav()

// 热点推荐区域渲染
function recommends() {
    // 数据
    const data = [
        {
            imgpath: './images/index/huangling.png',
            txt: '篁岭景区梯田叠翠铺绿，村庄聚气巢云，被称为“梯云人家”.',
            date: '',
            url: 'https://baike.baidu.com/item/%E7%AF%81%E5%B2%AD%E6%99%AF%E5%8C%BA/3834672?fr=ge_ala'
        },
        {
            imgpath: './images/index/lingyandong.png',
            txt: '灵岩洞是一个集自然与人文景观为一体的风景名胜区.',
            date: '',
            url: 'https://baike.baidu.com/item/%E7%81%B5%E5%B2%A9%E6%B4%9E/7056005?fr=ge_ala'
        },
        {
            imgpath: './images/index/likeng.png',
            txt: '李坑景区村落群山环抱，山清水秀，风光旖旎.',
            date: '',
            url: 'https://baike.baidu.com/item/%E6%9D%8E%E5%9D%91/5664224?fr=ge_ala'
        },
        {
            imgpath: './images/index/jiangwang.png',
            txt: '江湾景区是一座具有丰厚的徽州文化底蕴的古村落.',
            date: '',
            url: 'https://baike.baidu.com/item/%E6%B1%9F%E6%B9%BE%E6%99%AF%E5%8C%BA/4788969?fromtitle=%E5%A9%BA%E6%BA%90%E6%B1%9F%E6%B9%BE&fromid=795676&fr=aladdin'
        },
    ]
    // 获取热点父元素
    const recommend = document.querySelector('.recommend ul')
    // 调用函数获取当前时间
    const date = getTime()
    // console.log(date);
    // 定义模板字符串
    let str = ''
    data.map(item => {
        // 将当前时间转递给数据
        item.date = date
        // 循环为模板字符串中添加数据
        str +=
            `
        <li>
        <a href="#" onclick="window.open('${item.url}', '_blank')">
        <div class="pic">
            <img src="${item.imgpath}" alt="">
        </div>
        <div class="txt">
            <p>${item.txt}</p>
        </div>
        <div class="btn">
            <span>${item.date}</span>
            <button>了解更多</button>
        </div>
        </a>
    </li>
        `
    })

    // 将模板字符差入到当前页面中
    recommend.innerHTML = str

    // 定义获取时间的函数
    function getTime() {
        const date = new Date()

        const y = date.getFullYear()
        const m = date.getMonth() + 1
        const d = date.getDate()

        return `${y}-${m}-${d}`
    }
}
recommends()


// 文化推广区域渲染切换效果
function culture() {
    // 获取文化推广列表元素
    const culture = document.querySelector('.culture .content ul')

    // 数据
    const data = [
        {
            imgpath: './images/index/wenhua1.png',
            txt: '婺源三雕',
            dsr: '婺源三雕是指江西省婺源县境内明清古建筑中的砖雕、石雕和木雕，它属于徽派建筑艺术的支系，制品多用作民居、官宅、宗祠、庙宇、廊桥和牌坊等建筑上的装饰部件。婺源三雕的起源可追溯到唐代，从别号“雕三雕”的刘三元始，其技艺自成谱系。各种刀法是婺源三雕的关键所在，其特点在于不拘一法，混合并用，使作品达到空灵剔透的效果，故而圆雕、浮雕、浅雕、深雕和透雕较为常见'
        },
        {
            imgpath: './images/index/wenhua2.png',
            txt: '婺源绿茶',
            dsr: '婺源绿茶历史悠久，唐代著名茶叶专家陆羽在《茶经》中就有“歙州茶生于婺源山谷”的记载。《宋史·食货》婺源的谢源茶列为全国六种名茶“绝品”之一。明清时代，曾列为向朝廷进献的“贡茶”。明朝时，婺源县每年进贡的茶叶2500公斤左右。婺源绿茶外形紧细圆直，香气馥郁，滋味醇厚，具有‘叶绿、汤清、香浓、味醇’的特点。'
        },
        {
            imgpath: './images/index/wenhua3.png',
            txt: '婺源徽剧',
            dsr: '婺源徽剧，属皖南徽剧的一个支流。嘉庆三年（公元1796年），婺源人曹振镛回乡祭祖带来了皖南徽班华廉班进入婺源。光绪（公元1871—1908年）年间，京外四大徽班陆续在婺源落地生根。以婺源县为中心，流行于赣东北的浮梁、乐平、鄱阳和浙江开化等地。第一批国家级非物质文化遗产代表性项目名录传统戏剧类项目。'
        },
        {
            imgpath: './images/index/wenhua4.png',
            txt: '板龙灯',
            dsr: '婺源龙灯起源于唐，据传是由唐王下令赶造龙身，节节相连，组成龙形，正月十三全龙合拢，在民间试游三天三夜，最后送上天堂的故事演变而来。所以婺源习俗称正月十三为起灯节，十五闹元宵，十八圆灯，一直延续至今。'
        }
    ]

    let str = ''
    data.map(item => {
        str += `
        <li>
            <div class="front">
                <img src="${item.imgpath}" alt="">
                    <p>${item.txt}</p>
           </div>
            <div class="back">
                <span>${item.txt}</span>
                 <p>
                ${item.dsr}
                </p>
            </div>
        </li>
        `
    })
    culture.innerHTML = str;

    const lis = document.querySelectorAll('.culture .content ul li')
    lis.forEach(item => {
        item.addEventListener('click', () => {
            lis.forEach(i => {
                i.classList.remove('active')
            })
            item.classList.toggle('active')

            setTimeout(() => {
                item.classList.remove('active')
            }, 10000)
        })
    })

}
culture()

// 版权区域关注我们点击切换效果
function attention() {
    const lis = document.querySelectorAll('.footer .right ul li ')

    lis.forEach(item => {
        item.addEventListener('click', () => {
            lis.forEach(i => {
                i.classList.remove('active')
            })
            item.classList.add('active')
        })

    })
}
attention()
// 首页区域

// 隐藏框
function hide() {
    const hide = document.querySelector('.hide')
    hide.querySelectorAll('.left i').forEach(item => {
        item.addEventListener('click', function (e) {
            hide.classList.toggle('active')
            hide.querySelectorAll('.left i').forEach(item => {
                item.classList.add('active')
            })
            e.target.classList.remove('active')

            if (hide.classList.contains('active')) {
                setTimeout(() => {
                    hide.classList.remove('active')
                    hide.querySelector('.icon-Leftxiangzuo35').classList.add('active')
                    hide.querySelector('.icon-Rightxiangyou34').classList.remove('active')
                }, 20000)
            }
            // this.classList.toggle('hide')
        })

    })

    const gettop = document.querySelector('.hide .gettop')
    gettop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

}
hide()
// 隐藏框
// console.log(localStorage.getItem('username'))

// 登录后用户名的渲染
function username() {
    let usernameData = localStorage.getItem('username')

    if (usernameData) {
        usernameData = usernameData.split(',')[0]
        const username = document.querySelector('#username')
        const usernamebox = document.querySelector('#usernamebox')

        const exit = document.querySelector('#exit')

        exit.innerHTML = '退出登录'


        // console.log(username);
        username.innerHTML = usernameData
        usernamebox.src = ''

        exit.addEventListener('click', () => {
            localStorage.removeItem('username')
            username.innerHTML = '登录注册'

            exit.innerHTML = '请先登录'
        })
    }

}
username()


// 婺女洲
// 婺女洲banner
function wnzBanner() {
    const prev = document.querySelector(' #wnz .banner .prev')
    const next = document.querySelector(' #wnz .banner .next')
    const silded = document.querySelector('#wnz .banner .siled')

    let flag = true
    prev.addEventListener('click', () => {
        const items = document.querySelectorAll('#wnz .banner .item')
        if (flag) {
            silded.prepend(items[items.length - 1])
            flag = false
        }
        setTimeout(() => {
            flag = true
        }, 1000)

    })

    next.addEventListener('click', () => {
        const items = document.querySelectorAll('#wnz .banner .item')
        if (flag) {
            silded.appendChild(items[0])
            flag = false

        }
        setTimeout(() => {
            flag = true
        }, 1000)

    })

}
wnzBanner()

// 婺女洲banner

// 营业时间
// 婺女洲
const scaleTiem = () => {
    const navs = document.querySelectorAll('#wnz .nave div')
    const item1 = document.querySelector('#wnz .intro .left .conten .item-1')
    const item2 = document.querySelector('#wnz .intro .left .conten .item-2')
    navs.forEach(item => {
        item.addEventListener('click', () => {
            navs.forEach(item => {
                item.classList.remove('active')
            })
            item.classList.add('active')
            if (item.innerText === '淡季') {
                // console.log('xjaoixjsa');
                item1.style.display = 'block'
                item2.style.display = 'none'
            }
            else {
                item1.style.display = 'none'
                item2.style.display = 'block'
            }

        })
    })
}
scaleTiem()
// 篁岭
const hl_scaleTiem = () => {
    const navs = document.querySelectorAll('#hl .nave div')
    const item1 = document.querySelector('#hl .intro .left .conten .item-1')
    const item2 = document.querySelector('#hl .intro .left .conten .item-2')
    navs.forEach(item => {
        item.addEventListener('click', () => {
            navs.forEach(item => {
                item.classList.remove('active')
            })
            item.classList.add('active')
            if (item.innerText === '淡季') {
                // console.log('xjaoixjsa');
                item1.style.display = 'block'
                item2.style.display = 'none'
            }
            else {
                item1.style.display = 'none'
                item2.style.display = 'block'
            }

        })
    })
}
hl_scaleTiem()
// 灵岩洞
const lyd_scaleTiem = () => {
    const navs = document.querySelectorAll('#lyd .nave div')
    const item1 = document.querySelector('#lyd .intro .left .conten .item-1')
    const item2 = document.querySelector('#lyd .intro .left .conten .item-2')
    navs.forEach(item => {
        item.addEventListener('click', () => {
            navs.forEach(item => {
                item.classList.remove('active')
            })
            item.classList.add('active')
            if (item.innerText === '淡季') {
                // console.log('xjaoixjsa');
                item1.style.display = 'block'
                item2.style.display = 'none'
            }
            else {
                item1.style.display = 'none'
                item2.style.display = 'block'
            }

        })
    })
}
lyd_scaleTiem()
// 李坑
const lk_scaleTiem = () => {
    const navs = document.querySelectorAll('#lk .nave div')
    const item1 = document.querySelector('#lk .intro .left .conten .item-1')
    const item2 = document.querySelector('#lk .intro .left .conten .item-2')
    navs.forEach(item => {
        item.addEventListener('click', () => {
            navs.forEach(item => {
                item.classList.remove('active')
            })
            item.classList.add('active')
            if (item.innerText === '淡季') {
                // console.log('xjaoixjsa');
                item1.style.display = 'block'
                item2.style.display = 'none'
            }
            else {
                item1.style.display = 'none'
                item2.style.display = 'block'
            }

        })
    })
}
lk_scaleTiem()
//江湾
const jw_scaleTiem = () => {
    const navs = document.querySelectorAll('#jw .nave div')
    const item1 = document.querySelector('#jw .intro .left .conten .item-1')
    const item2 = document.querySelector('#jw .intro .left .conten .item-2')
    navs.forEach(item => {
        item.addEventListener('click', () => {
            navs.forEach(item => {
                item.classList.remove('active')
            })
            item.classList.add('active')
            if (item.innerText === '淡季') {
                // console.log('xjaoixjsa');
                item1.style.display = 'block'
                item2.style.display = 'none'
            }
            else {
                item1.style.display = 'none'
                item2.style.display = 'block'
            }

        })
    })
}
jw_scaleTiem()

// 营业时间

// 购买门票区域渲染
//婺女洲
const wnzBuyTicket = () => {
    const data = [
        {
            pic: './images/WuNvZhou/menpiao1.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)成人票-仅当日可售',
            price: 79
        },
        {
            pic: './images/WuNvZhou/menpiao2.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)成人票-非当日可售',
            price: 110
        },
        {
            pic: './images/WuNvZhou/menpiao3.png',
            txt: '婺女洲度假区夜场票+《遇见·婺源》演出嘉宾票成人票 ',
            price: 160
        },
        {
            pic: './images/WuNvZhou/menpiao4.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)+《遇见·婺源》演出嘉宾席票+遇见光影体验馆票成人票-仅当日可售',
            price: 198
        },
        {
            pic: './images/WuNvZhou/menpiao4.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)+《遇见·婺源》演出嘉宾席票+遇见光影体验馆票成人票-仅当日可售',
            price: 198
        }
    ]
    const container = document.querySelector('#wnz .server .content-2 .right ul')
    let str = ''
    data.map(item => {
        str += `
            <li>
                <div class="pic"><img src="${item.pic}" alt=""></div>
                <div class="txt">
                    <h5>${item.txt}</h5>
                    <div class="price">价格：
                        <span>￥${item.price}</span> /人
                    </div>
                    <button>立即购买</button>
                </div>
            </li>
`
    })
    container.innerHTML = str
}
wnzBuyTicket()

// 篁岭区域
function hlBanner() {
    const prev = document.querySelector(' #hl .banner .prev')
    const next = document.querySelector(' #hl .banner .next')
    const silded = document.querySelector('#hl .banner .siled')

    let flag = true
    prev.addEventListener('click', () => {
        const items = document.querySelectorAll('#hl .banner .item')
        if (flag) {
            silded.prepend(items[items.length - 1])
            flag = false
        }
        setTimeout(() => {
            flag = true
        }, 1000)

    })

    next.addEventListener('click', () => {
        const items = document.querySelectorAll(' #hl .banner .item')
        if (flag) {
            silded.appendChild(items[0])
            flag = false

        }
        setTimeout(() => {
            flag = true
        }, 1000)

    })

}
hlBanner()

const hlBuyTicket = () => {
    const data = [
        {
            pic: './images/HuangLing/menpiao1.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)成人票-仅当日可售',
            price: 79
        },
        {
            pic: './images/HuangLing/menpiao2.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)成人票-仅当日可售',
            price: 79
        },
        {
            pic: './images/HuangLing/menpiao3.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)成人票-仅当日可售',
            price: 79
        },
        {
            pic: './images/HuangLing/menpiao4.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)成人票-仅当日可售',
            price: 79
        },
        {
            pic: './images/HuangLing/menpiao5.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)成人票-仅当日可售',
            price: 79
        },
        {
            pic: './images/HuangLing/menpiao6.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)成人票-仅当日可售',
            price: 79
        },
        {
            pic: './images/HuangLing/menpiao7.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)成人票-仅当日可售',
            price: 79
        },
        {
            pic: './images/HuangLing/menpiao8.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)成人票-仅当日可售',
            price: 79
        },
        {
            pic: './images/HuangLing/menpiao9.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)成人票-仅当日可售',
            price: 79
        },
        {
            pic: './images/HuangLing/menpiao10.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)成人票-仅当日可售',
            price: 79
        }

    ]
    const container = document.querySelector('#hl .server .content-2 .right ul')
    let str = ''
    data.map(item => {
        str += `
            <li>
                <div class="pic"><img src="${item.pic}" alt=""></div>
                <div class="txt">
                    <h5>${item.txt}</h5>
                    <div class="price">价格：
                        <span>￥${item.price}</span> /人
                    </div>
                    <button>立即购买</button>
                </div>
            </li>
`
    })
    container.innerHTML = str
}
hlBuyTicket()

// 篁岭区域

// 灵岩洞区域
function lydBanner() {
    const prev = document.querySelector(' #lyd .banner .prev')
    const next = document.querySelector(' #lyd .banner .next')
    const silded = document.querySelector('#lyd .banner .siled')

    let flag = true
    prev.addEventListener('click', () => {
        const items = document.querySelectorAll('#lyd .banner .item')
        if (flag) {
            silded.prepend(items[items.length - 1])
            flag = false
        }
        setTimeout(() => {
            flag = true
        }, 1000)

    })

    next.addEventListener('click', () => {
        const items = document.querySelectorAll(' #lyd .banner .item')
        if (flag) {
            silded.appendChild(items[0])
            flag = false

        }
        setTimeout(() => {
            flag = true
        }, 1000)

    })

}
lydBanner()

const lydBuyTicket = () => {
    const data = [
        {
            pic: './images/LingYanDong/menpiao1.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)成人票-仅当日可售',
            price: 79
        },
        {
            pic: './images/LingYanDong/menpiao2.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)成人票-仅当日可售',
            price: 79
        },
        {
            pic: './images/LingYanDong/menpiao3.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)成人票-仅当日可售',
            price: 79
        },
        {
            pic: './images/LingYanDong/menpiao4.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)成人票-仅当日可售',
            price: 79
        },
        {
            pic: './images/LingYanDong/menpiao5.png',
            txt: '婺女洲度假区门票(含飞鸟乐园)成人票-仅当日可售',
            price: 79
        }


    ]
    const container = document.querySelector('#lyd .server .content-2 .right ul')
    let str = ''
    data.map(item => {
        str += `
            <li>
                <div class="pic"><img src="${item.pic}" alt=""></div>
                <div class="txt">
                    <h5>${item.txt}</h5>
                    <div class="price">价格：
                        <span>￥${item.price}</span> /人
                    </div>
                    <button>立即购买</button>
                </div>
            </li>
`
    })
    container.innerHTML = str
}
lydBuyTicket()

// 灵岩洞区域

// 李坑
function lkBanner() {
    const prev = document.querySelector(' #lk .banner .prev')
    const next = document.querySelector(' #lk .banner .next')
    const silded = document.querySelector('#lk .banner .siled')

    let flag = true
    prev.addEventListener('click', () => {
        const items = document.querySelectorAll('#lk .banner .item')
        if (flag) {
            silded.prepend(items[items.length - 1])
            flag = false
        }
        setTimeout(() => {
            flag = true
        }, 1000)

    })

    next.addEventListener('click', () => {
        const items = document.querySelectorAll(' #lk .banner .item')
        if (flag) {
            silded.appendChild(items[0])
            flag = false

        }
        setTimeout(() => {
            flag = true
        }, 1000)

    })

}
lkBanner()

const lkBuyTicket = () => {
    const data = [
        {
            pic: './images/likeng/2.jpeg',
            txt: '李坑景区门票成人票-仅当日可售',
            price: 55
        },
        {
            pic: './images/likeng/4.jpeg',
            txt: '李坑景区门票儿童/老人票-仅当日可售',
            price: 27.5
        }
    ]
    const container = document.querySelector('#lk .server .content-2 .right ul')
    let str = ''
    data.map(item => {
        str += `
            <li>
                <div class="pic"><img src="${item.pic}" alt=""></div>
                <div class="txt">
                    <h5>${item.txt}</h5>
                    <div class="price">价格：
                        <span>￥${item.price}</span> /人
                    </div>
                    <button>立即购买</button>
                </div>
            </li>
`
    })
    container.innerHTML = str
}
lkBuyTicket()

//江湾
function jwBanner() {
    const prev = document.querySelector(' #jw .banner .prev')
    const next = document.querySelector(' #jw .banner .next')
    const silded = document.querySelector('#jw .banner .siled')

    let flag = true
    prev.addEventListener('click', () => {
        const items = document.querySelectorAll('#jw .banner .item')
        if (flag) {
            silded.prepend(items[items.length - 1])
            flag = false
        }
        setTimeout(() => {
            flag = true
        }, 1000)

    })

    next.addEventListener('click', () => {
        const items = document.querySelectorAll(' #jw .banner .item')
        if (flag) {
            silded.appendChild(items[0])
            flag = false

        }
        setTimeout(() => {
            flag = true
        }, 1000)

    })

}
jwBanner()

const jwBuyTicket = () => {
    const data = [
        {
            pic: './images/JiangWang/banner4.jpeg',
            txt: '江湾景区门票成人票-仅当日可售',
            price: 60
        },
        {
            pic: './images/JiangWang/banner1.jpeg',
            txt: '江湾景区门票儿童/老人票-仅当日可售',
            price: 30
        }
    ]
    const container = document.querySelector('#jw .server .content-2 .right ul')
    let str = ''
    data.map(item => {
        str += `
            <li>
                <div class="pic"><img src="${item.pic}" alt=""></div>
                <div class="txt">
                    <h5>${item.txt}</h5>
                    <div class="price">价格：
                        <span>￥${item.price}</span> /人
                    </div>
                    <button>立即购买</button>
                </div>
            </li>
`
    })
    container.innerHTML = str
}
jwBuyTicket()





// 点击切换函数
const changeRouter = () => {
    const hadIndex = document.querySelector('.had-index')
    const hadWnz = document.querySelector('.had-wnz')
    const hadHl = document.querySelector('.had-hl')
    const hadLyd = document.querySelector('.had-lyd')
    const hadLk = document.querySelector('.had-lk')
    const hadJw = document.querySelector('.had-jw')


    const Index = document.querySelector('.index')
    const Wnz = document.querySelector('#wnz')
    const Hl = document.querySelector('#hl')
    const Lyd = document.querySelector('#lyd')
    const Lk = document.querySelector('#lk')
    const Jw = document.querySelector('#jw')


    hadIndex.addEventListener('click', (e) => {
        e.preventDefault()
        Index.classList.add('active')
        Wnz.classList.remove('active')
        Hl.classList.remove('active')
        Lyd.classList.remove('active')
        Lk.classList.remove('active')
        Jw.classList.remove('active')
    })
    hadWnz.addEventListener('click', (e) => {
        e.preventDefault()
        Index.classList.remove('active')
        Wnz.classList.add('active')
        Hl.classList.remove('active')
        Lyd.classList.remove('active')
        Lk.classList.remove('active')
        Jw.classList.remove('active')
    })
    hadHl.addEventListener('click', (e) => {
        e.preventDefault()
        Index.classList.remove('active')
        Wnz.classList.remove('active')
        Hl.classList.add('active')
        Lyd.classList.remove('active')
        Lk.classList.remove('active')
        Jw.classList.remove('active')
    })
    hadLyd.addEventListener('click', (e) => {
        e.preventDefault()
        Index.classList.remove('active')
        Wnz.classList.remove('active')
        Hl.classList.remove('active')
        Lyd.classList.add('active')
        Lk.classList.remove('active')
        Jw.classList.remove('active')
    })
    hadLk.addEventListener('click', (e) => {
        e.preventDefault()
        Index.classList.remove('active')
        Wnz.classList.remove('active')
        Hl.classList.remove('active')
        Lyd.classList.remove('active')
        Lk.classList.add('active')
        Jw.classList.remove('active')
    })
    hadJw.addEventListener('click', (e) => {
        e.preventDefault()
        Index.classList.remove('active')
        Wnz.classList.remove('active')
        Hl.classList.remove('active')
        Lyd.classList.remove('active')
        Lk.classList.remove('active')
        Jw.classList.add('active')
    })
}
changeRouter()


// 订票区域左侧选项
const ticketSide = (id) => {
    const lis = document.querySelectorAll(`#${id} .server .content-2  .left  ul li`)
    lis.forEach(item => {
        item.addEventListener('click', () => {
            lis.forEach(i => i.classList.remove('active'))
            item.classList.add('active')
        })
    })
}
ticketSide('wnz')



// 两个到导航栏关联
const contextNav = (selector, flag) => {
    const navs1 = document.querySelectorAll(`.header ul li`)
    const nav2 = document.querySelectorAll('.nav ul li')
    if (flag === 1) {
        nav2.forEach(item => {
            if (item.children[0].innerText === selector) {
                nav2.forEach(i => i.classList.remove('active'))
                item.classList.add('active')
            }
        })
    }
    if (flag === 0) {
        navs1.forEach(item => {
            if (item.children[0].innerText === selector) {
                navs1.forEach(i => i.classList.remove('active'))
                item.classList.add('active')
            }
        })
    }
}


//头部 导航点击突出显示效果
const showHeader = () => {
    const navs = document.querySelectorAll('.header ul li')
    navs.forEach(item => {
        item.addEventListener('click', () => {
            navs.forEach(i => i.classList.remove('active'))
            item.classList.add('active')
            // console.log(item.children[0].innerText);
            contextNav(item.children[0].innerText, 1)

        })
    })
}
showHeader()



// 点击切换函数
const navchangeRouter = () => {
    const hadIndex = document.querySelector('.nav-index')
    const hadWnz = document.querySelector('.nav-wnz')
    const hadHl = document.querySelector('.nav-hl')
    const hadLyd = document.querySelector('.nav-lyd')
    const hadLk = document.querySelector('.nav-lk')
    const hadJw = document.querySelector('.nav-jw')


    const Index = document.querySelector('.index')
    const Wnz = document.querySelector('#wnz')
    const Hl = document.querySelector('#hl')
    const Lyd = document.querySelector('#lyd')
    const Lk = document.querySelector('#lk')
    const Jw = document.querySelector('#jw')


    hadIndex.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        Index.classList.add('active')
        Wnz.classList.remove('active')
        Hl.classList.remove('active')
        Lyd.classList.remove('active')
        Lk.classList.remove('active')
        Jw.classList.remove('active')
    })
    hadWnz.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        Index.classList.remove('active')
        Wnz.classList.add('active')
        Hl.classList.remove('active')
        Lyd.classList.remove('active')
        Lk.classList.remove('active')
        Jw.classList.remove('active')
    })
    hadHl.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        Index.classList.remove('active')
        Wnz.classList.remove('active')
        Hl.classList.add('active')
        Lyd.classList.remove('active')
        Lk.classList.remove('active')
        Jw.classList.remove('active')
    })
    hadLyd.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        Index.classList.remove('active')
        Wnz.classList.remove('active')
        Hl.classList.remove('active')
        Lyd.classList.add('active')
        Lk.classList.remove('active')
        Jw.classList.remove('active')
    })
    hadLk.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        Index.classList.remove('active')
        Wnz.classList.remove('active')
        Hl.classList.remove('active')
        Lyd.classList.remove('active')
        Lk.classList.add('active')
        Jw.classList.remove('active')
    })
    hadJw.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        Index.classList.remove('active')
        Wnz.classList.remove('active')
        Hl.classList.remove('active')
        Lyd.classList.remove('active')
        Lk.classList.remove('active')
        Jw.classList.add('active')
    })
}
navchangeRouter()

// 悬浮导航突出显示效果
const showNav = () => {
    const navs = document.querySelectorAll('.nav ul li')
    navs.forEach(item => {
        item.addEventListener('click', () => {
            navs.forEach(i => i.classList.remove('active'))
            item.classList.add('active')
            contextNav(item.children[0].innerText, 0)
        })
    })
}
showNav()

//右侧隐藏框点击跳转
const hiderNav = () => {
    const navs = document.querySelectorAll('.hide ul li')
    navs.forEach(item => {
        item.addEventListener('click', () => {
            if (item.className === 'visit') {
                window.location.href = './pages/Introduction/Introduction.html'
            }
            if (item.className === 'forum') {
                window.location.href = './pages/Forum/Forum.html'
            }
            if (item.className === 'user') {
                window.location.href = './pages/User/user.html'
            }
        })
    })
}
hiderNav()

// 票务点击跳转
const ticketRouter = () => {
    const tickets = document.querySelectorAll('.attr .server .content-2 .right ul li')
    tickets.forEach(item => {
        item.addEventListener('click', () => {
            window.location.href = './pages/ticket/ticket.html'
        })
    })
}
ticketRouter()

// 滑动渐变式显示
const wheelShow = () => {
    const intro = document.querySelector('.intro1')
    const cltural = document.querySelector('.culture')
    window.addEventListener('scroll', (e) => {
        if (window.scrollY > 160) {
            intro.classList.add('hidden')
        }
        if (window.scrollY > 800) {
            cltural.classList.add('hidden')
        }
        // console.log(window.scrollY);

    })
}
wheelShow()

// 婺女洲滑动加载效果
const sccrollLoading = () => {
    window.addEventListener('scroll', () => {
        const isLoading = document.querySelector('#wnz').className.split(' ').includes('active')
        // console.log(isLoading);
        if (isLoading) {
            console.log(window.scrollY);
            const introduce = document.querySelector('#wnz .introduce')
            const intro = document.querySelector('#wnz .intro')
            const server = document.querySelector('#wnz .server')
            const spotRedcdommend = document.querySelector('#wnz .spot-redcdommend')
            if (window.scrollY > 10) {
                introduce.classList.add('hidden')
            }
            if (window.scrollY > 770) {
                intro.classList.add('hidden')
            }
            if (window.scrollY > 1750) {
                server.classList.add('hidden')
            }
            if (window.scrollY > 4080) {
                spotRedcdommend.classList.add('hidden')
            }
        }
    })
}
sccrollLoading()





