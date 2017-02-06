# tfk-seneca-skoleskyss-dispatcher

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/tfk-seneca-skoleskyss-dispatcher.svg)](https://greenkeeper.io/)
Dispatcher for skoleskyss

```curl -d '{"role": "lookup", "cmd":"seeiendom", "sessionId":"1234", "key":"see", "address":"Kjærlighetsstien 24, 3681 Notodden"}' -v http://localhost:8000/act```

```curl -d '{"role": "lookup", "cmd":"distance", "sessionId":"1234", "key":"dist", "origin":"59.5624081592,9.2847034557", "destination":"59.55564,9.25747"}' -v http://localhost:8000/act```