$(() => {
    const message = $('#message')
    const chatList = $('#chatList')
    const url = ''
    //wsで接続
    const socket = io.connect(url)

    // send message
    $('#send').on('click', () => {
        //メッセージがなければなにもしない
        if (!message.val()) return
        //サーバにデータ送信（WebSockt通信）
        socket.emit('message', { message: message.val() })
    })

    // receive message
    socket.on('message', (data) => {
        console.log(data)
        const p = $('<p>').append(data.message)
        chatList.prepend(p)
    })
})