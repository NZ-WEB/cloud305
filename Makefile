# login: root
# pass:  uyd7hTm:3qC#
deploy:
	scp -r ../base-ms-go root@cloud305.ru:./cloud305

dev:
	docker-compose -f ./docker-compose.dev.yml up  --build


