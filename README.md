# hapi-elasticsearch

# install
```
npm install github:dhso/hapi-elasticsearch
```

#api doc

```
https://github.com/elastic/elasticsearch-js

https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html

```

# options
```
host: 'localhost:9200'(default)
log: 'trace'(default)
```

# example

```
let elasticsearch = {
    method: ['GET'],
    path: '/elasticsearch',
    handler: async (req, h) => {
        try {
            const res = await h.elasticsearch.search({
                q: 'pants'
            });
            return {
                code: 200,
                data: res.hits.hits
            }
        } catch (err) {
            return h.response(Object.assign({ name: err.name, message: err.message }, err)).code(500);
        }
    }
};
```