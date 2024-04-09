package models

import (
	"time"

	"gorm.io/gorm"
)

type BlogPost struct {
	ID        uint `gorm:"primaryKey"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
	Title string
	Author      string
	Content string
}

