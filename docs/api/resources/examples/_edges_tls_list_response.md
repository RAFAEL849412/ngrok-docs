<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"next_page_uri": null,
	"tls_edges": [
		{
			"backend": null,
			"created_at": "2025-03-12T10:10:48Z",
			"description": "acme tls edge",
			"hostports": ["example.com:443"],
			"id": "edgtls_2uDDSBKFnWgXtRJNMu0aLPcHpxR",
			"ip_restriction": null,
			"metadata": "{\"environment\": \"staging\"}",
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2uDDSBKFnWgXtRJNMu0aLPcHpxR"
		},
		{
			"backend": {
				"backend": {
					"id": "bkdhr_2uDDQqk9dm0JQi9Jwzc9fcvpdSP",
					"uri": "https://api.ngrok.com/backends/http_response/bkdhr_2uDDQqk9dm0JQi9Jwzc9fcvpdSP"
				},
				"enabled": true
			},
			"created_at": "2025-03-12T10:10:37Z",
			"description": "acme tls edge",
			"hostports": ["endpoint-example2.com:443"],
			"id": "edgtls_2uDDQpgSlktopES5Kue2cOgO4dE",
			"ip_restriction": null,
			"mutual_tls": null,
			"policy": null,
			"tls_termination": null,
			"traffic_policy": null,
			"uri": "https://api.ngrok.com/edges/tls/edgtls_2uDDQpgSlktopES5Kue2cOgO4dE"
		}
	],
	"uri": "https://api.ngrok.com/edges/tls"
}
```
