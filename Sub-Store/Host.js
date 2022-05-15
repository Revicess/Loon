function operator(proxies){
  proxies.forEach(p => {
    //if(p.server!="tw.justcn2.top")p["ws-opts"]["headers"]["Host"] = "v11-xg.ixigua.com";
    p["ws-opts"]["headers"]["Host"] = "v11-xg.ixigua.com";
  });
}
