# Ipfs solo

This docker image allows you to create a private solo ipfs node, useful for development.

To start the ipfs instance using the command line you can run:

```
docker run -p 5001:5001 --mount source=ipfs-volume,destination=/data/ipfs appliedblockaing/ipfs-solo:latest
```

The docker volume "ipfs-volume" needs to be created manually, and will allow the data to persist between runs. You can also map `/data/ipfs` to a local folder using docker compose in order to get the same effect.


Additionally, you can open the port 8080 to get access to the http API:

```
docker run -p 5001:5001 -p 8080:8080 --mount source=ipfs-volume,destination=/data/ipfs appliedblockaing/ipfs-solo:latest
```

To read a document from the http api, use this url http://localhost:8080/api/v0/cat/MY_DOCUMENT_KEY
