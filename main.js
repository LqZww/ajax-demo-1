myButton.addEventListener('click', (e) => {
    let request = new XMLHttpRequest()
    request.onreadystatechange = () => {
        console.log('请求响应完毕')
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log('请求成功')
                console.log(typeof request.responseText)
                console.log(request.responseText)
                let string = request.responseText
                //把符合JSON语法的字符串转换成JS对应的值
                //JSON.parse是浏览器提供的
                let object = window.JSON.parse(string)
                console.log(typeof object)
                console.log(object)
                console.log('object.note')
                console.log(object.note)
                console.log('object.note.from')
                console.log(object.note.from)
            } else if (request.status >= 400) {
                console.log('请求失败')
            }
        }
    }
    request.open('GET', '/xxx') //配置request
    request.send()
})

//手写一个AJAX关键代码
// let request = new XMLHttpRequest()
// request.open('GET', '/xxx') //配置request
// request.send()
// request.onreadystatechange = () => {
//     if (request.readyState === 4) {
//         if (request.status >= 200 && request.status < 300) {
//             let string = request.responseText
//             let object = window.JSON.parse(string)
//         }
//     }
// }

