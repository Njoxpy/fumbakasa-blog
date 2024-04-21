package main

import (
	"example.com/api/initializers"
	"github.com/gin-gonic/gin"
)

func init(){
	initializers.LoadEnvironmentVariables()
	controllers.
}

func main() {
	
	r := gin.Default()
	r.GET("/", controllers.BlogPostCreate())
}

/*
Install following packages
compile daemon(get, install), godotenv, gin, gorm (gorm, database)
*/
