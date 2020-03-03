"use strict";
module.exports = Franz => class Gmail extends Franz {
    events = {
        'new-window': 'newWindow',
        'dom-ready': 'domReady'
    }

    domReady(e) {
        const loadedUrl = e.target.src;
        if (loadedUrl && loadedUrl.includes('https://www.google.com/gmail/about')) {
            this.loadURL('https://accounts.google.com/AccountChooser?service=mail&continue=https://mail.google.com/mail/');
        }

        // if (loadedUrl && loadedUrl.includes('https://myaccount.google.com')) {
        //     this.loadURL(this.serviceURL)
        // }
        console.info('domReady: ', loadedUrl);
        console.info('domReady: ', e);
    }

    newWindow(event) {
        console.info('gmail-new-window: ', event);
        const newUrl = event.url;
        const oldUrl = event.path[0].src;

        event.preventDefault();

        if (newUrl && oldUrl) {
            this.send('new-window', newUrl);
        }
    }

    overrideUserAgent() {
        const userAgent = this.getRandomUserAgent();
        console.info('ua: ', userAgent);
        return userAgent;
    }

    getRandomUserAgent() {
        const uaList = [
            // 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
            // 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
            // 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36',
            // 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36',
            // 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
            // 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
            'Mozilla/5.0 (Macintosh) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36 Edge/12.10136',
            'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36 Edg/12.10136',
            'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36 Edge/12.10136'
            // 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134',
            // 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.17763',
            // 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393',
            // 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063',
            // 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.18362',
            // 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136'
        ];
        return uaList[Math.floor(Math.random() * uaList.length)]
    }
};