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
        value: '1; mode=block; report=https://spilsbury.report-uri.com/r/d/xss/reportOnly',
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
        value: 'default-src \'self\' ; script-src \'self\' https://ajax.googleapis.com/; style-src \'self\' https://fonts.googleapis.com \'sha256-CYs1otMfvhbueBGWBFdsvQFFeGB4d/Bc5AcMgZumXPw=\'; img-src \'self\' ; font-src \'self\' https://fonts.gstatic.com; upgrade-insecure-requests; block-all-mixed-content; base-uri https://daniel.spilsbury.io; report-uri https://spilsbury.report-uri.io/r/default/csp/enforce',
    }];
    response.headers['X-Xss-Pwnage'] = [{
        key: 'X-Xss-Pwnage',
        value: '<script>alert(\'Whoops\');<\\script>',
    }];    
    callback(null, response);

};
