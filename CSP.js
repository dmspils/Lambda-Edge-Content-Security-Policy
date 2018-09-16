'use strict';

exports.handler = (event, context, callback) => {

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
    response.headers['Content-Security-Policy-Report-Only'] = [{
        key: 'Content-Security-Policy-Report-Only',
        value: 'default-src \'self\' ; script-src \'self\' https://ajax.googleapis.com/; style-src \'self\' ; img-src \'self\' ; font-src \'self\' https://fonts.gstatic.com; upgrade-insecure-requests; block-all-mixed-content; reflected-xss block; base-uri https://daniel.spilsbury.io; referrer no-referrer; report-uri https://spilsbury.report-uri.io/r/default/csp/reportOnly',
    }];
    callback(null, response);

};
