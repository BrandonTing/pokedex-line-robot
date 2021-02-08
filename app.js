// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
    channelId: '1655652906',
    channelSecret: 'a7154b0695304eced5bbc98f99d00c05',
    channelAccessToken: '+y0l+86z0nsIRniwUVnz7ajTkQKEUNDdwrm34IHeRdfPSCbvC14zsUnmBRZyX8ZEkd5iKPxev275knB30b3dVATMWmVldmmxAUVVB8xPvXVrVKe6Hu6k+ZgBMxtIDFdBsdYRI9YitbjS7Y73QD+3ewdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
    // event.message.text是使用者傳給bot的訊息
    // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
    const reply = `echo test: ${event.message.text}`;
    event.reply(reply).then(function (data) {
        // 當訊息成功回傳後的處理
    }).catch(function (error) {
        // 當訊息回傳失敗後的處理
    });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});
