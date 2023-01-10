package routes

import (
	"context"
	"net/http"

	"gateway/pkg/auth/pb"
	"github.com/gin-gonic/gin"
)

type LoginRequestBody struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// Login godoc
// @Summary Sign in endpoint
// @Description login user
// @Produce  json
// @Param   payload body LoginRequestBody true "payload"
// @Success 200 {object} pb.LoginResponse "ok"
// @Failure 502
// @Failure 400
// @Router /auth/login [post]
func Login(ctx *gin.Context, c pb.AuthServiceClient) {
	b := LoginRequestBody{}
	if err := ctx.BindJSON(&b); err != nil {
		ctx.AbortWithError(http.StatusBadRequest, err)
		return
	}

	res, err := c.Login(context.Background(), &pb.LoginRequest{
		Email:    b.Email,
		Password: b.Password,
	})

	if err != nil {
		ctx.AbortWithError(http.StatusBadGateway, err)
		return
	}

	ctx.SetCookie("AccessToken", res.Token, 3600, "/", "http://localhost", true, false)
	ctx.JSON(int(res.Status), &res)
}
