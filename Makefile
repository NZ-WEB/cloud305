# login: root
# pass:  uyd7hTm:3qC#
#deploy-old:
#	scp -r ../base-ms-go root@cloud305.ru:./cloud305

dev:
	docker-compose -f ./docker-compose.dev.yml up  --build

build:
	docker compose up --build -d --remove-orphans

up:
	docker compose up -d

down:
	docker compose down

show_logs:
	docker compose logs


