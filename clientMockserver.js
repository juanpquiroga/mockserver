var mockServerClient = require('mockserver-client').mockServerClient;
mockServerClient("localhost", 1080).mockAnyResponse({
    "httpRequest": {
        "method": "POST",
        "path": "/make-request",
        "body": {
            "type": "JSON",
            "json": JSON.stringify( {
                "payload": "foo",
                "url": "http://hola.com",
                "sender": "liftit",
                "reference": "12313aasd"
            })
        }
    },
    "httpResponse": {
        "statusCode": 200,
        "headers": {
            "Location" : [ "https://www.mock-server.com" ]
        },
        "body": {
            "type": "JSON",
            "json": JSON.stringify({
                "on_queue": true,
                "result": 200
            })
        }
    }
});

mockServerClient("localhost", 1080).mockAnyResponse({
    "httpRequest": {
        "method": "POST",
        "path": "/make-request",
        "body": "hola"
    },
    "httpResponse": {
        "statusCode": 200,
        "headers": {
            "Location" : [ "https://www.mock-server.com" ]
        },
        "body": "{on_queue: true, result: 200}"
    }
});