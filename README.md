# sync-v2
This playground uses Express / socket.io / ReactJS


## Finding your local IP address

#### Windows

Open up CMD and run `ipconfig /all`

The value you need is the `IPv4 Address` of your WiFi (or Ethernet) adapter

```
...
Wireless LAN adapter WiFi:
  ...
  IPv4 Address. . . . . . . . . . . . . . 192.168.1.11
  ...
...
```
Copy the value into the endpoint state value
```
this.state = {
  endpoint: "http://" + YOUR_IPv4_ADDRESS_GOES_HERE + ":5000""
  ...
}
```

## Start The Server (localhost:3000)

Make sure you are in the root directory when running these commands

```
npm install

node server.js
```

## Start React Server (localhost:3000)

Make sure you are in the root directory when running these commands

```
npm install

npm run start
```