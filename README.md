# ffs-delay

App that checks Swiss trains and notifies you in HipChat if any of them have some delay.

## Features

- Check trains delays from official [Swiss transport APIs](http://transport.opendata.ch/).
- Notify in a HipChat room if some train have some delay.

## Getting Started

- Add `prod.env` file in the project root.

```
export HIPCHAT_TOKEN='YOUR HIPCHAT ROOM TOKEN';
export HIPCHAT_ROOM_ID='YOUR HIPCHAT ROOM ID';
export SLACK_WEBHOOK_URL='YOUR SLACK INCOMING WEBHOOK URL';
```
- Change constants inside `./libs/core/config.js` to satisfy your needs.
- `npm install`
- `npm start`
- Never run to catch a delayed train again!

## Run docker

`docker run -e HIPCHAT_TOKEN='<YOUR_HIPCHAT_ROOM_TOKEN>' -e HIPCHAT_ROOM_ID='<YOUR_HIPCHAT_ROOM_ID>' -e SLACK_WEBHOOK_URL='YOUR SLACK WEBHOOK URL' --init -d matitalatina/ffs-delay`

