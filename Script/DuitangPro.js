/*
> 應用名稱：堆糖
> 軟件版本：8.8.0
> 下載地址：https://apps.apple.com/cn/app/id533415763
> 腳本作者：Cuttlefish
> 微信賬號：墨魚手記
> 更新時間：2022-08-03
> 通知頻道：https://t.me/ddgksf2021
> 問題反饋：https://t.me/ddgksf2013_bot
> 特别說明：本腳本僅供學習交流使用，禁止轉載售賣

[Script]

http-response ^https?:\/\/api\.duitang\.com\/napi\/vienna\/graphic\/template script-path=https://github.com/LimeAroma/Loon/raw/main/Script/DuitangPro.js, requires-body=true, tag=堆糖解锁会员权限

[Mitm]
hostname = api.duitang.com

*/

var body = $response.body.replace(/vipType":"SVIP/g, 'vipType":"NONE');
$done({ body });
