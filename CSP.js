'use strict'; exports.handler = (event, context, callback) => {
    const response = event.Records[0].cf.response;
    const headers = response.headers;
    response.headers['Strict-Transport-Security'] = [{
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
    }];
    response.headers['X-XSS-Protection'] = [{
        key: 'X-XSS-Protection',
        value: '1; mode=block',
    }];
    response.headers['X-Content-Type-Options'] = [{
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    }];
    response.headers['X-Frame-Options'] = [{
        key: 'X-Frame-Options',
        value: 'DENY',
    }];
    response.headers['Cache-Control'] = [{
        key: 'Cache-Control',
        value: 'public',
    }];
    response.headers['Allow'] = [{
        key: 'Allow',
        value: 'GET; HEAD',
    }];
    response.headers['Referrer-Policy'] = [{
        key: 'Referrer-Policy',
        value: 'no-referrer-when-downgrade',
    }];
    response.headers['Content-Security-Policy'] = [{
        key: 'Content-Security-Policy',
        value: 'default-src \'self\'; script-src \'self\' ichef.bbci.co.uk www.google-analytics.com 
\'sha256-3iegr7lvng9bwsIl8sY3sSmTbegW221KcxCn873OvB0=\'; font-src \'self\' https://fonts.googleapis.com 
https://fonts.gstatic.com; img-src \'self\' data: https://www.google-analytics.com; style-src \'self\' 
\'unsafe-inline\' https://fonts.googleapis.com https://fonts.gstatic.com; object-src \'none\'; report-uri 
https://spilsbury.report-uri.io/r/default/csp/enforce; block-all-mixed-content; reflected-xss block; 
frame-ancestors \'none\'; require-sri-for script; base-uri https://daniel.spilsbury.io; upgrade-insecure-requests',
    }];
    callback(null, response);
};
