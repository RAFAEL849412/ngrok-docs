<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"endpoints": [
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
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-12T10:10:41Z",
			"hostport": "9d0494c1d44a.ngrok.paid:443",
			"id": "ep_2uDDRLbx0zzUX5jlDJ5KBKGuSy6",
			"name": "command_line",
			"pooling_enabled": false,
			"principal": {
				"id": "usr_2uDDOpMhUPzPFaC0kaYwXKPmUiP",
				"uri": ""
			},
			"proto": "https",
			"public_url": "https://9d0494c1d44a.ngrok.paid",
			"tunnel": {
				"id": "tn_2uDDRLbx0zzUX5jlDJ5KBKGuSy6",
				"uri": "https://api.ngrok.com/tunnels/tn_2uDDRLbx0zzUX5jlDJ5KBKGuSy6"
			},
			"tunnel_session": {
				"id": "ts_2uDDRHeh3dxbaFVHDb5sAfWgqoM",
				"uri": "https://api.ngrok.com/tunnel_sessions/ts_2uDDRHeh3dxbaFVHDb5sAfWgqoM"
			},
			"type": "ephemeral",
			"updated_at": "2025-03-12T10:10:41Z",
			"upstream_url": "http://localhost:80",
			"url": "https://9d0494c1d44a.ngrok.paid"
		},
		{
			"bindings": ["public"],
			"created_at": "2025-03-12T10:10:37Z",
			"domain": {
				"id": "rd_2uDDQlJLq9aSjrMtSvAGTLiPj6i",
				"uri": "https://api.ngrok.com/reserved_domains/rd_2uDDQlJLq9aSjrMtSvAGTLiPj6i"
			},
			"edge": {
				"id": "edgtls_2uDDQpgSlktopES5Kue2cOgO4dE",
				"uri": "https://api.ngrok.com/edges/tls/edgtls_2uDDQpgSlktopES5Kue2cOgO4dE"
			},
			"hostport": "endpoint-example2.com:443",
			"id": "ep_2uDDQqSOhtCzAYzsCKwVxtLCr7c",
			"pooling_enabled": false,
			"proto": "tls",
			"public_url": "tls://endpoint-example2.com",
			"type": "edge",
			"updated_at": "2025-03-12T10:10:37Z"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/endpoints"
}
```
