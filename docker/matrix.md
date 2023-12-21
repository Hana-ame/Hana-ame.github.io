https://hub.docker.com/r/matrixdotorg/synapse

docker run -it --rm \
    --mount type=volume,src=synapse-data,dst=/data \
    -e SYNAPSE_SERVER_NAME=matrix.moonchan.xyz \
    -e SYNAPSE_REPORT_STATS=yes \
    matrixdotorg/synapse:latest generate

docker run -d --name synapse \
    --mount type=volume,src=synapse-data,dst=/data \
    -p 8008:8008 \
    matrixdotorg/synapse:latest


禁止注册

https://ssine.ink/posts/matrix-bot-and-bridges/

https://github.com/matrix-org/synapse#installing-and-configuration

https://matrix-org.github.io/synapse/latest/setup/installation.html
