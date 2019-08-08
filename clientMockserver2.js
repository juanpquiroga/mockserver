var mockServerClient = require('mockserver-client').mockServerClient;
mockServerClient("localhost", 1080).mockAnyResponse([{
    "httpRequest": {
        "method": "POST",
        "path": "/make-request",
        "body": {
            "type": "JSON_SCHEMA",
            "type": "JSON_SCHEMA",
            "jsonSchema": JSON.stringify({
                "$schema": "http://json-schema.org/draft-04/schema#",
                "title": "Request",
                "description": "Retry request",
                "type": "object",
                "properties": {
                    "payload": {
                        "description": "Payload to resend",
                        "type": "string"
                    },
                    "url": {
                        "description": "Url to send the payload",
                        "type": "string",
                        "format": "url"
                    },
                    "sender": {
                        "description": "Sender",
                        "type": "string"
                    },
                    "reference": {
                        "description": "Reference",
                        "type": "string"
                    }
                },
                "required": ["payload", "url", "sender", "reference"]
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
},
{
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
}
]);

// mockServerClient("localhost", 1080).mockAnyResponse();