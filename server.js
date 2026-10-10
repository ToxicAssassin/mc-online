const mineflayer = require('mineflayer');
const http = require('http');

http.createServer((req, res) => {
  res.write("Bot is running 24/7!");
  res.end();
}).listen(process.env.PORT || 3000);

function startBot() {
  const bot = mineflayer.createBot({
    host: '5.9.41.143',
    port: 29449,
    username: 'KeeperBot',
    version: false
  });

  bot.on('login', () => {
    console.log('✅ بات با موفقیت وارد سرور مگمانود شد!');
  });

  bot.on('end', () => {
    console.log('بات قطع شد، ۱۰ ثانیه دیگر تلاش مجدد...');
    setTimeout(startBot, 10000);
  });

  bot.on('error', (err) => {
    console.log('خطای بات: ', err.message);
  });
}

startBot();
