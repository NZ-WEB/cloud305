package main

import (
	_ "gateway/docs"
	"gateway/pkg/auth"
	"gateway/pkg/config"
	"gateway/pkg/product"
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	"log"
)

// @title     API Gateway API
// @version         1.0
// @description     CLOUD305 gateway api spec
// @termsOfService  _

// @contact.name   nzweb
// @contact.email  nzweb@vk.com

// @license.name  Apache 2.0
// @license.url   http://www.apache.org/licenses/LICENSE-2.0.html

// @host      http://localhost
// @BasePath  /
func main() {
	c, err := config.LoadConfig()

	if err != nil {
		log.Fatalln("Failed at config", err)
	}

	r := gin.Default()
	r.Use(CORSMiddleware())

	authSvc := *auth.RegisterRoutes(r, &c)
	product.RegisterRoutes(r, &c, &authSvc)

	r.GET("/docs/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	r.RunTLS(":"+c.Port, "/certs/cloud305.crt", "/certs/cloud305.key")
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
