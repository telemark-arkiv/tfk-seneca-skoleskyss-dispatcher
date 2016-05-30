# tfk-seneca-skoleskyss-dispatcher
Dispatcher for skoleskyss

```curl -d '{"role": "lookup", "cmd":"seeiendom", "sessionId":"1234", "key":"see", "address":"Kjærlighetsstien 24, 3681 Notodden"}' -v http://localhost:8000/act```

```curl -d '{"role": "lookup", "cmd":"distance", "sessionId":"1234", "key":"dist", "origin":"59.5624081592,9.2847034557", "destination":"59.55564,9.25747"}' -v http://localhost:8000/act```