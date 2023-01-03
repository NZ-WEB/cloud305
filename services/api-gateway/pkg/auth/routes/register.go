package routes

import (
	"context"
	"net/http"

	"gateway/pkg/auth/pb"
	"github.com/gin-gonic/gin"
)

type RegisterRequestBody struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// Register godoc
// @Summary Sign up endpoint
// @Description register user
// @Produce  json
// @Param   payload body RegisterRequestBody true "payload"
// @Success 200 {object} pb.RegisterResponse "ok"
// @Failure 502
// @Failure 400
// @Router /auth/register [post]
func Register(ctx *gin.Context, c pb.AuthServiceClient) {
	b := RegisterRequestBody{}

	if err := ctx.BindJSON(&b); err != nil {
		ctx.AbortWithError(http.StatusBadRequest, err)
		return
	}

	res, err := c.Register(context.Background(), &pb.RegisterRequest{
		Email:    b.Email,
		Password: b.Password,
	})

	if err != nil {
		ctx.AbortWithError(http.StatusBadGateway, err)
		return
	}

	ctx.JSON(http.StatusCreated, &res)
}
