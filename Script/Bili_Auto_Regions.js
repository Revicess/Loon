#旧版本：2022.05.16
[Script]
http-response ^https:\/\/ap(p|i)\.bili(bili|api)\.(com|net)\/(pgc\/view\/v\d\/app\/season|x\/v\d\/search\/defaultwords)\?access_key script-path=https://raw.githubusercontent.com/NobyDa/Script/6924ce91efa0e8dee956ca1b7fdb5fa9d74dbfd3/Surge/JS/Bili_Auto_Regions.js, requires-body=true, tag=bili自动地区

#可选, 适用于搜索指定地区的番剧
http-request ^https:\/\/ap(p|i)\.bili(bili|api)\.(com|net)\/x\/v\d\/search(\/type)?\?.+?%20(%E6%B8%AF|%E5%8F%B0|%E4%B8%AD)& script-path=https://raw.githubusercontent.com/NobyDa/Script/6924ce91efa0e8dee956ca1b7fdb5fa9d74dbfd3/Surge/JS/Bili_Auto_Regions.js, requires-body=true, tag=bili自动地区(搜索)

[Mitm]
hostname = ap?.bilibili.com, ap?.biliapi.net
