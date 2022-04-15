/**
 * M30 - management 3.0 collaboration
 * Copyright (C) 2022 Joao Eduardo Luis <joao@coio.dev>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */
package main

import "github.com/gin-gonic/gin"

func main() {
	router := gin.Default()

	router.Static("/", "./frontend/dist/")
	router.Run()
}
