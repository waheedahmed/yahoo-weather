import CryptoJS from 'crypto-js';

// Utility function to generate auth headers
export const getAuthHeaders = (location) => {
    var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
    var method = 'GET';
    var consumer_key = 'PUT-YOUR-YAHOO-APP-CLIENT-ID-HERE';
    var consumer_secret = 'PUT-YOUR-YAHOO-APP-CLIENT-SECRET-HERE';
    var concat = '&';
    var query = {'location': location, 'format': 'json'};
    var oauth = {
        'oauth_consumer_key': consumer_key,
        'oauth_nonce': Math.random().toString(36).substring(2),
        'oauth_signature_method': 'HMAC-SHA1',
        'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
        'oauth_version': '1.0'
    };

    var merged = {
        ...query,
        ...oauth
    };
    // Note the sorting here is required
    var merged_arr = Object.keys(merged).sort().map(function(k) {
    return [k + '=' + encodeURIComponent(merged[k])];
    });
    var signature_base_str = method
    + concat + encodeURIComponent(url)
    + concat + encodeURIComponent(merged_arr.join(concat));

    var composite_key = encodeURIComponent(consumer_secret) + concat;
    var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
    var signature = hash.toString(CryptoJS.enc.Base64);

    oauth['oauth_signature'] = signature;
    var auth_header = 'OAuth ' + Object.keys(oauth).map(function(k) {
        return [k + '="' + oauth[k] + '"'];
    }).join(',');

    return auth_header;
};