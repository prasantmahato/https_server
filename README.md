# HTTPS Server with OpenSSL Key Generation

## Pre-requisites

### For Linux

```bash
sudo apt-get install node
sudo apt-get install openssl
```

### For MacOS

```bash
brew install node
brew install openssl
```

## How to install

```bash
git clone https://github.com/prasantmahato/conf.git
cd /conf
npm install
```

## Commands to generate Keys

```bash
openssl genpkey -algorithm RSA -out private-key.pem
openssl req -new -key private-key.pem -out csr.pem
openssl x509 -req -days 365 -in csr.pem -signkey private-key.pem -out certificate.pem

```

## Command to send POST request

```bash
curl -X POST https://localhost:443 --insecure -H 'Content-Type: application/json' -d '{ "title":"TEST","body":"HTTPS Server", "id": 1}'
```

- Using --insecure flag as it a locally generated self-signed certificate