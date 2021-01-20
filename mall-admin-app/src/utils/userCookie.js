import Cookie from 'js-cookie';

// 添加用户cookie信息
export function setCookie(info) {
    const arr = Object.entries(info);
    for (var i = 0; i < arr.length; i++) {
        Cookie.set(arr[i][0], arr[i][1])
    }
    // for (const [key, value] of info) {
    //     Cookie.set(key, value)
    // }
    console.log('添加cookie')
    return true;
}

// 查找用户cookie信息
export function getUserCooke() {
    return {
        username: Cookie.get('username'),
        appkey: Cookie.get('appkey'),
        role: Cookie.get('role'),
        email: Cookie.get('email'),
    }
}

// 删除用户cookie信息
export function removeUserCookie() {
    Cookie.remove('username')
    Cookie.remove('appkey')
    Cookie.remove('role')
    Cookie.remove('email')
    return true;
}
