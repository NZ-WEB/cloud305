package db

import (
	mysqlDr "github.com/go-sql-driver/mysql"
	"gorm.io/driver/mysql"
	"log"
	"product-ms/pkg/config"

	"gorm.io/gorm"
	"product-ms/pkg/models"
)

type Handler struct {
	DB *gorm.DB
}

func Init(c config.Config) Handler {
	cfg := mysqlDr.Config{
		User:                 c.DbUser,
		Passwd:               c.DbPass,
		Net:                  "tcp",
		Addr:                 c.DbHost + ":" + c.DbPort,
		DBName:               c.DbName,
		AllowNativePasswords: true,
	}

	// Get a database handle.
	db, err := gorm.Open(mysql.Open(cfg.FormatDSN()), &gorm.Config{})
	if err != nil {
		log.Fatalln(err)
	}

	db.AutoMigrate(&models.Product{})
	db.AutoMigrate(&models.StockDecreaseLog{})

	return Handler{db}
}
