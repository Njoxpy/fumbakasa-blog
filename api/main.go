package main

import (
	"example.com/api/initializers"
	"github.com/gin-gonic/gin"
)

func init(){
	initializers.LoadEnvironmentVariables()
}

func main() {
	
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"Vamos": "Amigos!",
		})
	})
	r.Run() // listen and serve on 0.0.0.0:8080
}

/*
Install following packages
compile daemon(get, install), godotenv, gin, gorm (gorm, database)
*/
