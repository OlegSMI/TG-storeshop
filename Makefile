IMG_NAME ?= aya-store-tg
VERSION ?= v0.0.1
IMAGE = ${IMG_NAME}:${VERSION}
PORT ?= 666

build:
	@docker build --no-cache -t ${IMAGE} . && docker run -v $(shell pwd)/:/usr/src/app ${IMAGE} /bin/bash -c "npm install && npm run build"

run:
	@docker rm -f ${IMG_NAME} && docker build -f ngx.Dockerfile --no-cache -t ${IMAGE} . && docker run -p ${PORT}:80 ${IMAGE}