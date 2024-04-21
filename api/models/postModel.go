package models

import (
	"gorm.io/gorm"
)

type BlogPos struct {
	gorm.Model
	Title string
	Author      string
	Content string
  }