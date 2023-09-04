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
node index.js
```

## Commands to generate Keys

- Generate a new private key

```bash
openssl genpkey -algorithm RSA -out private-key.pem
```

- Generate a certificate signing request (CSR) for an existing private key

```bash
openssl req -new -key private-key.pem -out csr.pem
```

- Generate a certificate signing request based on an existing certificate

```bash
openssl x509 -req -days 365 -in csr.pem -signkey private-key.pem -out certificate.pem
```


## Send POST request

```bash
curl -X POST https://localhost:443 --insecure \
    -H 'Content-Type: application/x-www-form-urlencoded' \
    -d 'username=Batman' -d 'password=MEN_ARE_BRAVE'
```

- Using --insecure flag as it a locally generated self-signed certificate
