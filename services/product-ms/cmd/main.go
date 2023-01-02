package main

import (
	"fmt"
	"log"
	"net"

	"google.golang.org/grpc"
	"product-ms/pkg/config"
	"product-ms/pkg/db"
	pb "product-ms/pkg/pb"
	services "product-ms/pkg/services"
)

func main() {
	c, err := config.LoadConfig()

	if err != nil {
		log.Fatalln("Failed at config", err)
	}

	h := db.Init(c)

	lis, err := net.Listen("tcp", ":"+c.MsPort)

	if err != nil {
		log.Fatalln("Failed to listing:", err)
	}

	fmt.Println("Product Svc on", c.MsPort)

	s := services.Server{
		H: h,
	}

	grpcServer := grpc.NewServer()

	pb.RegisterProductServiceServer(grpcServer, &s)

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalln("Failed to serve:", err)
	}
}
