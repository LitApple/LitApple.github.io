(function() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = "";
    if (hour >= 5 && hour < 9) greeting = "🌅 人生岁月不喜戚，还有梦境与黎明。";
    else if (hour >= 9 && hour < 12) greeting = "☀️ 日朝而起，与光同行，上午好！";
    else if (hour >= 12 && hour < 14) greeting = "🍜 中午好，吃个午饭休息一下吧~";
    else if (hour >= 14 && hour < 18) greeting = "☀️ 一个平常的下午也有具象的幸福。";
    else if (hour >= 18 && hour < 19) greeting = "🍜 晚饭摸鱼时间……";
    else if (hour >= 19 && hour < 22) greeting = "🌙 夜安朋友，与你自由而盛放的灵魂。";
    else greeting = "🌌 夜深了，早点休息，为你守夜~";

    const el = document.getElementById('welcome-message');
    if (el) el.innerHTML = greeting;
})();