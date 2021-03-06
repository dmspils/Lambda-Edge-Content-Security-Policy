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
    // This common header sends a report-uri report to both Scott and BBC
    response.headers['Content-Security-Policy'] = [{
        key: 'Content-Security-Policy',
        value: 'default-src \'self\'; script-src \'report-sample\' \'self\' https://ajax.googleapis.com/; style-src \'self\' https://fonts.googleapis.com \'unsafe-inline\'; img-src \'self\'; object-src \'none\'; font-src \'self\' https://fonts.gstatic.com; frame-ancestors \'none\'; block-all-mixed-content; base-uri https://daniel.spilsbury.io; upgrade-insecure-requests; report-uri https://europe-west1-bbc-otg-traf-mgr-bq-prod-4591.cloudfunctions.net/report-endpoint https://spilsbury.report-uri.com/r/d/csp/enforce',
    }]; 
    // This header sends a report-to report to both Scott and BBC by generating two report-only headers
    response.headers['Content-Security-Policy-Report-Only'] = [{
        key: 'Content-Security-Policy-Report-Only',
        value: 'default-src \'self\'; script-src \'report-sample\' \'self\' https://ajax.googleapis.com/; style-src \'self\' https://fonts.googleapis.com \'unsafe-inline\'; img-src \'self\'; object-src \'none\'; font-src \'self\' https://fonts.gstatic.com; block-all-mixed-content; base-uri https://daniel.spilsbury.io; report-to scott',},{
        key: 'Content-Security-Policy-Report-Only',
        value: 'default-src \'self\'; script-src \'report-sample\' \'self\' https://ajax.googleapis.com/; style-src \'self\' https://fonts.googleapis.com \'unsafe-inline\'; img-src \'self\'; object-src \'none\'; font-src \'self\' https://fonts.gstatic.com; block-all-mixed-content; base-uri https://daniel.spilsbury.io; report-to bbc',
     }];
    response.headers['X-Xss-Test'] = [{
        key: 'X-Xss-Test',
        value: '<script>alert(\'xss\');</script>',
    }];   

// Old policy which works
//    response.headers['Report-To'] = [{
//        key: 'Report-To',
//        value: '{\"group\": \"scott\", \"max_age\": 3600, \"endpoints\": [{\"url\": \"https://spilsbury.report-uri.com/a/d/g"}], \"include_subdomains\": true}, {\"group\": \"bbc\", \"max_age\": 3600, \"endpoints\": [{\"url\": \"https://europe-west1-bbc-otg-traf-mgr-bq-prod-4591.cloudfunctions.net/report-endpoint"}], \"include_subdomains\": true}',
//    }];

// Test policy
    response.headers['Report-To'] = [{
        key: 'Report-To',
        value: '{\"group\": \"bbc\", \"max_age\": 3600, \"endpoints\": [{\"url\": \"https://europe-west1-bbc-otg-traf-mgr-bq-prod-4591.cloudfunctions.net/report-endpoint"}], \"include_subdomains\": true}, {\"group\": \"scott\", \"max_age\": 3600, \"endpoints\": [{\"url\": \"https://spilsbury.report-uri.com/a/d/g"}], \"include_subdomains\": true}',
    }];



    response.headers['NEL'] = [{
        key: 'NEL',
        value: '{\"group\": \"scott\", \"max_age\": 3600, \"include_subdomains\": true}',
    }];  
    
    response.headers['Expect-CT'] = [{
        key: 'Expect-CT',
        value: 'max-age=0, report-uri="https://spilsbury.report-uri.com/r/d/ct/reportOnly"',
    }];      
    
    
    callback(null, response);

};
