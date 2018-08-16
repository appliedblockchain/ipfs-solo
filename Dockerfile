FROM ipfs/go-ipfs:v0.4.17

COPY src/config /data/ipfs/config
COPY src/swarm.key /data/ipfs/swarm.key
COPY src/datastore_spec /data/ipfs/datastore_spec
COPY src/version /data/ipfs/version

ENV LIBP2P_FORCE_PNET 1

EXPOSE 4001 5001 8080
