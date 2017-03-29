# ffs-delay

App that checks Swiss trains and notifies you in HipChat if any of them have some delay.

## Features

- Check trains delays from official [Swiss transport APIs](http://transport.opendata.ch/).
- Notify in a HipChat room if some train have some delay.

## Getting Started

- Add `.envars` file in the project root.

```
export HIPCHAT_TOKEN='YOUR HIPCHAT ROOM TOKEN';
export HIPCHAT_ROOM_ID='YOUR HIPCHAT ROOM ID';
```
- Change constants inside `index.js` to satisfy your needs.
- `npm install`
- `source .envars`
- `node index.js`
- Never run to catch a delayed train again!

