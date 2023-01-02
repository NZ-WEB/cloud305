package main

import (
	"gateway/pkg/auth"
	"gateway/pkg/config"
	"gateway/pkg/product"
	"github.com/gin-gonic/gin"
	"log"
)

func main() {
	c, err := config.LoadConfig()

	if err != nil {
		log.Fatalln("Failed at config", err)
	}

	r := gin.Default()

	authSvc := *auth.RegisterRoutes(r, &c)
	product.RegisterRoutes(r, &c, &authSvc)

	r.RunTLS(":"+c.Port, "/certs/cloud305.crt", "/certs/cloud305.key")
}
