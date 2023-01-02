package config

import (
	"fmt"
	"os"
)

type Config struct {
	MsPort string
	DbHost string
	DbUser string
	DbPass string
	DbPort string
	DbName string
}

func LoadConfig() (config Config, err error) {
	c := Config{
		MsPort: os.Getenv("MS_PORT"),
		DbHost: os.Getenv("DB_HOST"),
		DbUser: os.Getenv("DB_USER"),
		DbPass: os.Getenv("DB_PASS"),
		DbPort: os.Getenv("DB_PORT"),
		DbName: os.Getenv("DB_NAME"),
	}

	if c.MsPort == "" || c.DbPort == "" || c.DbName == "" {
		return c, fmt.Errorf("config error. not all env vars was given")
	}

	return c, nil
}
