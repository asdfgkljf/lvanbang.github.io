// 动态渲染游记分享
let data = [
    {
        id: 1,
        name: '顾言',
        pic: '../../images/Forum/user1.jpg',
        address: '南昌市',
        date: '2023-11-07',
        title: '婺源，有才华!',
        content: '婺源有森林鸟类国家级自然保护区。赋春镇的鸳鸯湖是全国最大的野生鸳鸯越冬栖息地。每年冬天，成群的鸳鸯汇聚于此，堪称奇观。',
        seeing: 1256,
        like: 3453,
        tell: 2341,
        url: "../../images/Forum/concution1.png",
        comment: [
            {
                img: '../../images/Forum/user2.jpg',
                name: '季也',
                content: '夜景很绝，住的民丰客栈，离景区三分钟，便宜干净，老板人超级超级好',
                address: '上饶市'
            },
            {
                img: '../../images/Forum/user3.jpg',
                name: 'vrw',
                content: '婺源这个地方除了大还是大呀',
                address: '赣州市'
            },
            {
                img: '../../images/Forum/user2.jpg',
                name: '季也',
                content: '夜景很绝，住的民丰客栈，离景区三分钟，便宜干净，老板人超级超级好',
                address: '上饶市'
            },
            {
                img: '../../images/Forum/user2.jpg',
                name: '季也',
                content: '夜景很绝，住的民丰客栈，离景区三分钟，便宜干净，老板人超级超级好',
                address: '上饶市'
            },
        ]
    },
    {
        id: 2,
        name: '季也',
        pic: '../../images/Forum/user2.jpg',
        address: '上饶市',
        date: '2023-09-21',
        title: '中国最美乡村婺源!',
        content: '悠长的青石板道斑驳寂静的马头墙日光斜照入了暮色一抹明黄花海装扮了整个春天',
        seeing: 4325,
        like: 3545,
        tell: 2331,
        url: "../../images/Forum/concution2.png",
        comment: [
            {
                img: '../../images/Forum/user2.jpg',
                name: '季也',
                content: '夜景很绝，住的民丰客栈，离景区三分钟，便宜干净，老板人超级超级好',
                address: '上饶市'
            },
            {
                img: '../../images/Forum/user3.jpg',
                name: 'vrw',
                content: '婺源这个地方除了大还是大呀',
                address: '赣州市'
            },
            {
                img: '../../images/Forum/user2.jpg',
                name: '季也',
                content: '夜景很绝，住的民丰客栈，离景区三分钟，便宜干净，老板人超级超级好',
                address: '上饶市'
            },
            {
                img: '../../images/Forum/user2.jpg',
                name: '季也',
                content: '夜景很绝，住的民丰客栈，离景区三分钟，便宜干净，老板人超级超级好',
                address: '上饶市'
            },
        ]
    },
    {
        id: 3,
        name: 'Piw',
        pic: '../../images/Forum/user3.jpg',
        address: '南昌市',
        date: '2023-08-27',
        title: '婺源!',
        content: '春天到了，总得去一趟婺源吧！去看看它的青瓦白墙、木格花窗，去漫步在油菜花海，灯火万家，小桥流水，梯田层叠就这样带着探春的心情三月初',
        seeing: 6776,
        like: 13893,
        tell: 9871,
        url: "../../images/Forum/concution3.png",
        comment: [
            {
                img: '../../images/Forum/user2.jpg',
                name: '季也',
                content: '夜景很绝，住的民丰客栈，离景区三分钟，便宜干净，老板人超级超级好',
                address: '上饶市'
            },
            {
                img: '../../images/Forum/user3.jpg',
                name: 'vrw',
                content: '婺源这个地方除了大还是大呀',
                address: '赣州市'
            },
            {
                img: '../../images/Forum/user2.jpg',
                name: '季也',
                content: '夜景很绝，住的民丰客栈，离景区三分钟，便宜干净，老板人超级超级好',
                address: '上饶市'
            },
            {
                img: '../../images/Forum/user2.jpg',
                name: '季也',
                content: '夜景很绝，住的民丰客栈，离景区三分钟，便宜干净，老板人超级超级好',
                address: '上饶市'
            },
        ]
    },
    {
        id: 4,
        name: '卡三班',
        pic: '../../images/Forum/user4.jpg',
        address: '九江市',
        date: '2023-11-01',
        title: '篁岭，晒秋!',
        content: '婺源县的所有景点中，篁岭算是名气最大的。别的不说，光是它并不包含在旅游套票中，需要单独买票并且票价为145/人（网络购票140元/人），',
        seeing: 8954,
        like: 13243,
        tell: 5431,
        url: "../../images/Forum/concution4.png",
        comment: [
            {
                img: '../../images/Forum/user2.jpg',
                name: '季也',
                content: '夜景很绝，住的民丰客栈，离景区三分钟，便宜干净，老板人超级超级好',
                address: '上饶市'
            },
            {
                img: '../../images/Forum/user3.jpg',
                name: 'vrw',
                content: '婺源这个地方除了大还是大呀',
                address: '赣州市'
            },
            {
                img: '../../images/Forum/user2.jpg',
                name: '季也',
                content: '夜景很绝，住的民丰客栈，离景区三分钟，便宜干净，老板人超级超级好',
                address: '上饶市'
            },
            {
                img: '../../images/Forum/user2.jpg',
                name: '季也',
                content: '夜景很绝，住的民丰客栈，离景区三分钟，便宜干净，老板人超级超级好',
                address: '上饶市'
            },
        ]
    },
    {
        id: 1,
        name: '顾言',
        pic: '../../images/Forum/user1.jpg',
        address: '南昌市',
        date: '2023-11-07',
        title: '婺源，有才华!',
        content: '婺源有森林鸟类国家级自然保护区。赋春镇的鸳鸯湖是全国最大的野生鸳鸯越冬栖息地。每年冬天，成群的鸳鸯汇聚于此，堪称奇观。',
        seeing: 1256,
        like: 3453,
        tell: 2341,
        url: "../../images/Forum/concution1.png",
        comment: [
            {
                img: '../../images/Forum/user2.jpg',
                name: '季也',
                content: '夜景很绝，住的民丰客栈，离景区三分钟，便宜干净，老板人超级超级好',
                address: '上饶市'
            },
            {
                img: '../../images/Forum/user3.jpg',
                name: 'vrw',
                content: '婺源这个地方除了大还是大呀',
                address: '赣州市'
            },
            {
                img: '../../images/Forum/user2.jpg',
                name: '季也',
                content: '夜景很绝，住的民丰客栈，离景区三分钟，便宜干净，老板人超级超级好',
                address: '上饶市'
            },
            {
                img: '../../images/Forum/user2.jpg',
                name: '季也',
                content: '夜景很绝，住的民丰客栈，离景区三分钟，便宜干净，老板人超级超级好',
                address: '上饶市'
            },
        ]
    },
]
const renderTravelShare = (travelShare) => {
    const container = document.querySelector('#content .share ul')

    let str = ''
    data.forEach(item => {
        let str2 = ''
        item.comment?.forEach(i => {
            str2 += `
           
           <div class="comminction">
               <div class="user">
                   <img src=${i.img} alt="">
                   <div class="name">${i.name}{</div>
               </div>
               <div class="comment"><p>${i.content}</p></div>
               <div class="address">${i.address}</div>
               <div class="good">
               <i class="iconfont icon-dianzan-aixinshixin"><span></span></i>
               
               </div>
           </div>

      `
        })
        str += `
        <li>
            <div class="left">
                <div class="info">
                    <div class="img"><img src=${item?.pic} alt=""></div>
                    <div class="username">${item.name}</div>
                    <div class="address">${item.address}</div>
                    <div class="date">${item.date}</div>
                </div>
                <div class="txt">
                    <div class="text">
                        <div class="title">${item.title} <span>印象</span> <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></div>
                        <p>${item.content}</p>
                            <div class="pic"><img src=${item?.url} alt=""></div>
                    </div>
                    
                    <div class="data">
                        <div class="see"><i class="iconfont icon-iconkanguo"></i>${item.seeing}</div>
                        <div class="like"><i class="iconfont icon-dianzan"></i>${item.like}</div>
                        <div class="comment"><i class="iconfont icon-pinglun"></i>${item.tell}</div>
                        <div class="icon">
                            <div class="forward"><i class="iconfont icon-zhuanfa"></i>转发</div>
                            <div class="support"><i class="iconfont icon-dianzan"></i>点赞</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tell">
            ${str2}
            </div>


        </li>
        `
    })
    container.innerHTML = str

}
renderTravelShare()

// 发帖子
const addTell = () => {
    const form = document.querySelector('#content .share .form')
    const addBtn = document.querySelector('#content .share .add')
    const hot = document.querySelector('#content .share .hot')
    const news = document.querySelector('#content .share .news')

    addBtn.addEventListener('click', () => {
        form.classList.add('active')
        addBtn.classList.add('active')
        hot.classList.add('hide')
        news.classList.add('hide')
    })

}
addTell()



// 发帖子功能
const submitTell = () => {
    function getData() {
        const form = document.querySelector('#content .share .form')
        var address1 = form.querySelector('.address input').value
        var article1 = form.querySelector('.article input').value
        var date = form.querySelector('.date input').value
        var img = form.querySelector('.img .pic select').value
        var content1 = form.querySelector('.major  textarea').value

        if (address1 === '') {
            alert('请输入地址')
            return
        }
        else {
            if (article1 === '') {
                alert('请输入文章标题')
                return

            }
            else {
                const data1 = {
                    id: 10,
                    name: '顾言',
                    pic: '../../images/Forum/user1.jpg',
                    address: address1,
                    date,
                    title: article1,
                    content: content1,
                    seeing: 0,
                    like: 0,
                    tell: 0,
                    url: img
                }
                // console.log(data);
                data.unshift(data1)
                renderTravelShare()
                alert('发布成功!')
                form.querySelector('.address input').value = ''
                form.querySelector('.article input').value = ''
                form.querySelector('.major  textarea').value = ''
            }
        }


    }
    const btn = document.querySelector('#content .share .form .top .sumbit')
    btn.addEventListener('click', () => {
        getData()
    })


}

submitTell()


// 点赞
const Like = () => {
    const like = document.querySelectorAll('#content .share ul li .data .icon .support i')

    like.forEach((item) => {
        item.addEventListener('click', () => {
            item.style.color = '#fe7a7f'
            item.parentElement.style.color = '#fe7a7f'
        }
        )
    })
}
Like()

// 点击打开评论区
const TellClick = () => {
    const lis = document.querySelectorAll('#content .share>ul>li')
    lis.forEach(item => {
        item.querySelector(' .data .comment').addEventListener('click', () => {
            item.querySelector('.tell').classList.toggle('show')
        })
    })
}
TellClick()

// 评论点赞
const tellLike = () => {
    const likes = document.querySelectorAll('#content .share ul li .tell .comminction .good i')
    likes.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active')
            item.querySelector(' span').classList.toggle('active')

        })
    })
}

tellLike()


// 点击切换栏目
const changeLabel = () => {
    const share = document.querySelector('#content .share')
    const photo = document.querySelector('#content .photo')
    const firends = document.querySelector('#content .firends')
    const labels = document.querySelectorAll('#content .nav ul li')
    const hr = document.querySelector('#content .nav ul hr')
    labels.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            labels.forEach(i => i.classList.remove('active'))
            item.classList.add('active')
            for (let i = 1; i <= 3; i++) {
                hr.classList.remove(`active${i}`)
            }
            hr.classList.add(`active${index + 1}`)
            console.log(e.target.id);
            switch (e.target.id) {
                case 'share':
                    share.classList.remove('hide')
                    photo.classList.add('hide')
                    firends.classList.add('hide')
                    break;
                case 'photo':
                    share.classList.add('hide')
                    photo.classList.remove('hide')
                    firends.classList.add('hide')
                    break;
                case 'firend':
                    share.classList.add('hide')
                    photo.classList.add('hide')
                    firends.classList.remove('hide')
                    break;
            }
            // if (e.target.id === 'share') {
            //     share.classList.remove('hide')
            //     photo.classList.add('hide')
            //     firends.classList.add('hide')
            // }
            // if (e.target.id === 'photo') {
            //     share.classList.add('hide')
            //     photo.classList.remove('hide')
            //     firends.classList.add('hide')

            // }
            // if (e.target.id === 'firends') {
            //     // share.classList.add('hide')
            //     // photo.classList.add('hide')
            //     // firends.classList.remove('hide')
            //     console.log('csc');
            // }
        })
    })

}
changeLabel()

// 相册点击切换照片
const changePhoto = () => {
    const container = document.querySelector('#content .photo .wnz .container')
    const btn = document.querySelector('#content .photo .wnz .change button')
    const data = [
        {
            path: '../../images/Forum/photo1.png'
        },
        {
            path: '../../images/Forum/photo2.png'
        },
        {
            path: '../../images/Forum/photo3.png'
        },
        {
            path: '../../images/Forum/photo4.png'
        },
        {
            path: '../../images/Forum/photo4.png'
        },
        {
            path: '../../images/HuangLing/menpiao3.png'
        },
        {
            path: '../../images/HuangLing/menpiao4.png'
        },
        {
            path: '../../images/HuangLing/menpiao5.png'
        },
        {
            path: '../../images/HuangLing/menpiao6.png'
        },
        {
            path: '../../images/HuangLing/menpiao7.png'
        },
        {
            path: '../../images/HuangLing/menpiao8.png'
        },
        {
            path: '../../images/HuangLing/menpiao9.png'
        },
        {
            path: '../../images/HuangLing/menpiao10.png'
        },
        {
            path: '../../images/HuangLing/menpiao11.png'
        },
        {
            path: '../../images/HuangLing/menpiao12.png'
        },

    ]
    let imgs = data
    btn.addEventListener('click', (e) => {
        num = 1
        if (num * 4 < data.length) {

            const pics = imgs.splice(num - 1, 4)
            console.log(pics);
            let str = ''
            pics.forEach(item => {
                str += `<div class="box"><img src=${item.path} alt=""></div>`
            })
            container.innerHTML = str
        }
        else {
            alert('没有更多了！')
        }
    }
    )
}
changePhoto()

// 结伴同行
let data_frinds = [
    {
        id: 1,
        name: '顾言',
        pic: '../../images/Forum/user1.jpg',
        address: '南昌市',
        date: '2023-11-07',
        title: '目的地：婺女洲、江湾',
        content_1: '旅游时间：12月份',
        content_2: '个人介绍：男 20多 infj 性格随和，精力旺盛',
        content_3: '要求：男 性格随和，精力旺盛',
        img: '../../images/Forum/sixin.png',
    },
    {
        id: 2,
        name: '季也',
        pic: '../../images/Forum/user2.jpg',
        address: '上饶市',
        date: '2023-09-21',
        title: '目的地：婺女洲',
        content_1: '旅游时间：10月份',
        content_2: '个人介绍：男 18 耿直爽快，精力旺盛',
        content_3: '要求：男 性格随和',
        img: '../../images/Forum/sixin.png',
    },
    {
        id: 3,
        name: 'Piw',
        pic: '../../images/Forum/user3.jpg',
        address: '南昌市',
        date: '2023-08-27',
        title: '目的地：婺女洲、灵岩洞、篁岭',
        content_1: '旅游时间：10月份',
        content_2: '个人介绍：女 20多 enfj 性格随和，倾向穷游',
        content_3: '要求：女 可以接受穷游',
        img: '../../images/Forum/sixin.png',
    },
    {
        id: 4,
        name: '卡三班',
        pic: '../../images/Forum/user4.jpg',
        address: '九江市',
        date: '2023-11-01',
        title: '目的地：李坑',
        content_1: '旅游时间：明年1月份',
        content_2: '个人介绍：女 20多',
        content_3: '要求：女 温柔善良',
        img: '../../images/Forum/sixin.png',
    }
]

const renderTravelfirends = (travelfirends) => {
    const container = document.querySelector('#content .firends ul')

    let str = ''
    data_frinds.forEach(item => {
        str += `
        <li>
            <div class="left">
                <div class="info">
                    <div class="img"><img src=${item?.pic} alt=""></div>
                    <div class="username">${item.name}</div>
                    <div class="address">${item.address}</div>
                    <div class="date">${item.date}</div>
                </div>
                <div class="txt">
                    <div class="text">
                        <div class="title"> ${item.title} </div>
                        <p>${item.content_1}</p>
                        <p>${item.content_2}</p>
                        <p>${item.content_3}</p>
                        <div class="F_chat">
                          <div class="chat"><img src=${item?.img} alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        `
    })
    container.innerHTML = str

}
renderTravelfirends()



