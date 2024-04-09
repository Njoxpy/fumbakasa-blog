package main

import (
	"example.com/api/initializers"
	"example.com/api/models"
)

func init() {
	// connect to DB, Load environment variables
	initializers.ConnectDatabase()
	initializers.LoadEnvironmentVariables()
}

func main() {
	initializers.DB.AutoMigrate(&models.BlogPost{})
}