# Shared Parking

Find and share free parking spots in your area.

## Quick Start

```bash
make up
```

## Setup dev environment

```shell
make install

# start the server
cd server && yarn start:watch

# start the client
cd client && yarn serve
```

## Deployment

### Local Kubernetes

```shell
make local-registry-up
docker-compose build
docker-compose push
make up-k8s
```

## Stack
- **Server**: node.js/typescript
- **Client**: vue.js
- **DB**: mongo
- **ORM**: mongoose
- **API**: express
- **Map Engine**: vuelayers