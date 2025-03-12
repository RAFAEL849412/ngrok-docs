<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"bindings": ["public"],
	"created_at": "2025-03-12T10:10:42Z",
	"description": "sample cloud endpoint",
	"domain": {
		"id": "rd_2uDDQlJLq9aSjrMtSvAGTLiPj6i",
		"uri": "https://api.ngrok.com/reserved_domains/rd_2uDDQlJLq9aSjrMtSvAGTLiPj6i"
	},
	"hostport": "endpoint-example2.com:443",
	"id": "ep_2uDDRSqbJn5kCd6W5h0NedI08SD",
	"metadata": "{\"environment\": \"staging\"}",
	"pooling_enabled": false,
	"proto": "https",
	"public_url": "https://endpoint-example2.com",
	"traffic_policy": "{\"on_http_request\":[{\"actions\":[{\"type\":\"deny\",\"config\":{\"status_code\":404}}]}]}",
	"type": "cloud",
	"updated_at": "2025-03-12T10:10:42Z",
	"uri": "https://api.ngrok.com/endpoints/ep_2uDDRSqbJn5kCd6W5h0NedI08SD",
	"url": "https://endpoint-example2.com"
}
```
