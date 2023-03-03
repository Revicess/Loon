/*
B站装扮diy
版本：1.8.7
脚本兼容: Quantumult X, Surge
作者：@kokoryh

脚本仅供学习和自用，禁转载，禁公开分享
任何分享或转载行为被发现后此脚本将从库中删除

说明：
1、打开粉色B站-我的-个性装扮，选择喜欢的装扮进入装扮详情页，如果通知获取装扮信息成功，则可以使用本脚本
2、更换新的装扮需要退后台重新打开app，重复2次
3、如果不想提取加载动画，可在BoxJs中将『不提取加载动画』开关打开
4、如果想保留原有装扮，可在BoxJs中将『装扮追加』开关打开
5、如果有多套主题，可在BoxJs中填入『使用第几套主题』，加载动画同理。填写前请仔细阅读选项下的介绍
6、装扮定时切换方法(以每天7:00切换第1套装扮，18:00切换第2套装扮，22:00切换第3套装扮为例)：
    添加定时切换脚本
    配置Cron(切换的时间，本例的Cron配置为：0 7,18,22 * * *)
    计算完成一次循环需要的次数(本例中一天切换3次，即一次循环需要3次)
    前往BoxJs填写『切换顺序』(本例中应填写1,2,3。如果想要7点和18点都使用第2个加载动画，22点使用第1个加载动画，应填写2,2,1)
7、粉色B站和白色B站均可使用本脚本，并且可以分别进行配置
8、diy请自行下载需要的装扮，将素材拼合为规范的zip包上传，然后自行编写规范的配置填入BoxJs。配置格式和各配置项含义请自行体会。
9、空间头图和头像框均可以替换，但由于我用不到，因此不会实现此功能。有需要请自行实现
10、引用请去掉前面的#号，并添加hostname，用解析器解析的都给我滚

----------------
[Script]
获取装扮信息(获取完即可关闭此重写)

http-response ^https:\/\/api\.bilibili\.com\/x\/garb\/v2\/mall\/suit\/detail script-path=https://raw.githubusercontent.com/kokoryh/Script/master/js/bili-suit-detail.js, requires-body=1, tag=获取装扮信息, img-url=https://raw.githubusercontent.com/NobyDa/mini/master/Color/bilibili.png
----------------
日常使用

http-response ^https:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\? script-path=https://raw.githubusercontent.com/kokoryh/Script/master/js/bili-suit-diy.js, requires-body=1, tag=皮肤装扮, img-url=https://raw.githubusercontent.com/NobyDa/mini/master/Color/bilibili.png
----------------
定时切换脚本(此处Cron仅供参考，请自行设置切换的时间)

cron "0 8,20 * * *" script-path=https://raw.githubusercontent.com/kokoryh/Script/master/js/bili-suit-change.js, tag=装扮定时切换, img-url=https://raw.githubusercontent.com/NobyDa/mini/master/Color/bilibili.png

[MITM]
hostname = api.bilibili.com, app.bilibili.com
----------------
*/
