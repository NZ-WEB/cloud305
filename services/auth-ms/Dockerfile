FROM golang:latest as builder
RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o app ./cmd/main.go
#поднимаем бинарник
FROM scratch
COPY --from=builder /app/app /usr/bin/app
ENTRYPOINT [ "/usr/bin/app" ]