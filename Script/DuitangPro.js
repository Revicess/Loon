/*
[Script]
http-response ^https?:\/\/api\.duitang\.com\/napi\/vienna\/graphic\/template script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bili_Auto_Regions.js, requires-body=true, tag=bili自动地区
*/

var body = $response.body.replace(/vipType":"SVIP/g, 'vipType":"NONE');
$done({ body });
