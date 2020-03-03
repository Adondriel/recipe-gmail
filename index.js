"use strict";

// module.exports = Franz => Franz;
module.exports = Franz => class Gmail extends Franz {
    overrideUserAgent() {
        const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36";

        return userAgent;
    }
};