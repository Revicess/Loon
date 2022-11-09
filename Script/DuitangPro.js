

var body = $response.body.replace(/vipType":"SVIP/g, 'vipType":"NONE');
$done({ body });
