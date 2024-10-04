// 日历时间变换
const dateSetting = () => {
    // 格式化数据
    const dataStyle = (data) => {
        // console.log(typeof data);
        if (data < 10) {
            return `0${data}`
            // console.log('akcxpoakc')
        }
        else {
            // console.log(data)
            return data
        }
    }
    // console.log(dataStyle(1));
    const getDate = () => {
        const date = new Date()

        const year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        const week = date.getDay()
        let hour = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        //    console.log();
        const newDay = `${year} - ${dataStyle(month)} - ${dataStyle(day)}`

        const newTime = `${dataStyle(hour)}:${dataStyle(minutes)}:${dataStyle(seconds)}`

        const weekList = {
            0: '星期天',
            1: '星期一',
            2: '星期二',
            3: '星期三',
            4: '星期四',
            5: '星期五',
            6: '星期六'
        }
        return {
            newDay,
            newTime,
            week: weekList[week]
        }
    }


    const dateChange = () => {
        const { newDay, newTime, week } = getDate()

        // console.log(`${newDay} ${newTime} ${weekList[week]}`);
        const date = document.querySelector('#content > .right .date .bottom')
        date.innerHTML = `
                        <div class="time">${newTime}</div>
                        <div class="week">${week}</div>
                        <div class="day">${newDay}</div>
    
    `

    }
    dateChange()
    const timer = null
    window.onload = () => {
        setInterval(dateChange, 1000)
    }
    window.BeforeUnloadEvent = () => {
        clearInterval(timer)
    }

}

dateSetting()

const userInfo = document.querySelector('#userInfo')
const orderFrom = document.querySelector('.orderFrom')
const commit = document.querySelector('.commit')
const answer = document.querySelector('.answer')
// 左侧导航栏
const leftNav = () => {
    var lis = document.querySelectorAll('#content > .left ul li')
    lis.forEach(item => {
        item.addEventListener('click', () => {
            lis.forEach(i => i.classList.remove('active'))
            item.classList.add('active')
            console.log(item.id);
            if (item.id === 'userinfo') {
                userInfo.classList.remove('hide')
                orderFrom.classList.add('hide')
                commit.classList.add('hide')
                answer.classList.add('hide')
            }
            if (item.id === 'orderfrom') {
                userInfo.classList.add('hide')
                orderFrom.classList.remove('hide')
                commit.classList.add('hide')
                answer.classList.add('hide')
            }
            if (item.id === 'commit') {
                userInfo.classList.add('hide')
                orderFrom.classList.add('hide')
                commit.classList.remove('hide')
                answer.classList.add('hide')
            }
            if (item.id === 'answer') {
                userInfo.classList.add('hide')
                orderFrom.classList.add('hide')
                commit.classList.add('hide')
                answer.classList.remove('hide')
            }
        })
    })
}
leftNav()

// 订单详情二级导航栏
const ticket = document.querySelector('#ticket')
const shopping = document.querySelector('.shopping')
const living = document.querySelector('.living')
const guide = document.querySelector('.guide')

const orderfromNav = () => {
    const navs = document.querySelectorAll('#content .orderFrom .title ul li ')
    navs.forEach(item => {
        item.addEventListener('click', (e) => {
            navs.forEach(i => i.classList.remove('active'))
            item.classList.add('active')
            // console.log(item.id);
            if (item.id === 'ticket') {
                ticket.classList.remove('hide')
                shopping.classList.add('hide')
                living.classList.add('hide')
                guide.classList.add('hide')
            }
            if (item.id === 'shopping') {
                ticket.classList.add('hide')
                shopping.classList.remove('hide')
                living.classList.add('hide')
                guide.classList.add('hide')

                if (ticket.classList.contains('hide')) {
                    console.log('添加成功');
                } else { console.log('失败'); }
            }
            if (item.id === 'living') {
                ticket.classList.add('hide')
                shopping.classList.add('hide')
                living.classList.remove('hide')
                guide.classList.add('hide')
            }
            if (item.id === 'guide') {
                ticket.classList.add('hide')
                shopping.classList.add('hide')
                living.classList.add('hide')
                guide.classList.remove('hide')
            }

        })
    })
}
orderfromNav()

// 订单详情显示订票信息
const orderfromShow = () => {
    const orderFrom = document.querySelectorAll("#content .orderFrom .order ul li ")
    orderFrom.forEach(item => {
        item.addEventListener('click', () => {
            orderFrom.forEach(i => i.querySelector('.progression').classList.remove('active'))
            item.querySelector('.progression').classList.toggle('active')
        })
    }
    )
}
orderfromShow()

const shoppingShow = () => {
    const orderFrom = document.querySelectorAll("#content .orderFrom .shopping ul li ")
    orderFrom.forEach(item => {
        item.addEventListener('click', () => {
            orderFrom.forEach(i => i.querySelector('.progression').classList.remove('active'))
            item.querySelector('.progression').classList.toggle('active')
        })
    }
    )
}
shoppingShow()

const livingShow = () => {
    const orderFrom = document.querySelectorAll("#content .orderFrom .living ul li ")
    orderFrom.forEach(item => {
        item.addEventListener('click', () => {
            orderFrom.forEach(i => i.querySelector('.progression').classList.remove('active'))
            item.querySelector('.progression').classList.toggle('active')
        })
    }
    )
}
livingShow()

const guideShow = () => {
    const orderFrom = document.querySelectorAll("#content .orderFrom .guide ul li ")
    orderFrom.forEach(item => {
        item.addEventListener('click', () => {
            orderFrom.forEach(i => i.querySelector('.progression').classList.remove('active'))
            item.querySelector('.progression').classList.toggle('active')
        })
    }
    )
}
guideShow()