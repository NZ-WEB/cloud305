package config

import (
	"fmt"
	"os"
)

type Config struct {
	Port          string
	AuthSvcUrl    string
	ProductSvcUrl string
}

func LoadConfig() (c Config, err error) {
	config := Config{
		Port:          os.Getenv("MS_PORT"),
		AuthSvcUrl:    os.Getenv("AUTH_MS_URL"),
		ProductSvcUrl: os.Getenv("PRODUCT_MS_URL"),
	}

	if config.Port == "" || config.AuthSvcUrl == "" || config.ProductSvcUrl == "" {
		return config, fmt.Errorf("not all env was given")
	}

	return config, nil
}
