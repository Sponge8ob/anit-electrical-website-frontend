const http = require('https');

const data = JSON.stringify({
    name: 'Test Deployment',
    subject: 'Checking Live Render Connection',
    message: 'Just testing the live build.'
});

const options = {
    hostname: 'anit-electrical-website-email-api.onrender.com', // The Render URL
    port: 443,
    path: '/api/contact',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);
    let body = '';
    res.on('data', d => {
        body += d;
    });
    res.on('end', () => {
        console.log(`body: ${body}`);
    });
});

req.on('error', error => {
    console.error(error);
});

req.write(data);
req.end();
