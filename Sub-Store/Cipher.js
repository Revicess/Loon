function operator(proxies) {
    const { cipher } = $arguments;
    proxies.forEach(p => {
        p.cipher = cipher;
    });
    return proxies;
}
