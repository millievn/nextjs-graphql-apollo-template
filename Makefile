test:
	yarn && \
	ENDPOINT=<API> \
	yarn build && \
	yarn --production && \
	yarn start

up:
	docker build --rm -t <IMAGE_NAME> .
	docker rm <CONTAINER_NAME> -f || true
	docker run --rm -d --env-file ./.env.development -p 3000:3000 --name <CONTAINER_NAME> <IMAGE_NAME>