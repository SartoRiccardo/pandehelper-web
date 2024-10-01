# PandeHelper Website

A small (currently static) website to host info about [PandeHelper](https://github.com/SartoRiccardo/ct-ticket-tracker)

Hosted at: [pandehelper.sarto.dev](https://pandehelper.sarto.dev)

## Cloning

1. Clone the project and install dependencies

```
git clone https://github.com/SartoRiccardo/pandehelper-web
cd pandehelper-web
npm ci
```

2. Generate an RSA key pair so the bot can communicate with the website's API.
   - Only the public one is needed to check if the requests are signed by the bot itself.
   - If you've already generated a key pair, simply move the public key here.

```bash
openssl genrsa -out pandehelper-bot.pem 3072
openssl rsa -in pandehelper-bot.pem -pubout -out pandehelper-bot.pub.pem
mv pandehelper-bot.pem path/to/pandehelper-bot
```
