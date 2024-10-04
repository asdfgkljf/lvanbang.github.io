
// 用户信息存储变量
const userinfo = {
    usertel: '',
    username: 'admin',
    password: '123456'
}
// 登录注册点击切换效果
function change () {

    const sinInBtn = document.querySelector('#singIn')
    const sinUpBtn = document.querySelector('#singUp')
    const container = document.querySelector('.container')

    sinInBtn.addEventListener('click', () => {
        container.classList.remove('panel-active')
    })
    sinUpBtn.addEventListener('click', () => {
        container.classList.add('panel-active')
    })
}
change()
// 登录校验函数
function login () {
    const btn = document.querySelector('#btnLogin')
    btn.addEventListener('click', () => {
        const username = document.querySelector('#username').value
        const password = document.querySelector('#password').value    
        const regTel = /^1[3456789]\d{9}$/
        const regName = /^[a-zA-Z0-9_-]{4,16}$/
        const regPswd = /^[a-zA-Z0-9_-]{6,16}$/
        if (!regName.test(username) && !regPswd.test(password)) alert('用户名或密码格式不正确')
        else {
                  // console.log(username,  password);
            if (username === userinfo.username && password === userinfo.password) {

                localStorage.setItem('username', [username, password])
                window.location.href = '../../index.html'
                alert('登录成功')
            }
            else{               alert('用户名或密码错误')
        }
    }
    })
}
login ()
// 注册函数
function register () {
    const btn = document.querySelector('#btnRegister')
    // 校验正则表达式
    const regTel = /^1[3456789]\d{9}$/
    const regName = /^[a-zA-Z0-9_-]{4,16}$/
    const regPswd = /^[a-zA-Z0-9_-]{6,16}$/
    btn.addEventListener('click',() => {
        const tel = document.querySelector('#tel').value
        const name = document.querySelector('#name').value
        const pwsd = document.querySelector('#pswd').value     
        if (!regTel.test(tel)) alert('手机号格式不正确')
        else {
           if (!regName.test(name)) alert('用户名格式不正确,只允许为4-16位英文字符，数字，下划线')
           else {
            if (!regPswd.test(pwsd)) alert('密码格式不正确,只允许为4-16位英文字符，数字，下划线')
            else {     
                // console.log('cwcdwcw');
                userinfo.username = name
                userinfo.password = pwsd
                userinfo.tel = tel
        
                document.querySelector('#tel').value = ''
                document.querySelector('#name').value = ''
                document.querySelector('#pswd').value = ''
        
                alert('注册成功')
                }
           }
    }
    })
} 
register ()