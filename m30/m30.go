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

import (
	"log"

	"github.com/dgraph-io/badger/v3"
	"github.com/gin-gonic/gin"
)

type M30Ctx struct {
	db *badger.DB
}

func (c *M30Ctx) OpenDB() error {
	var err error
	c.db, err = badger.Open(badger.DefaultOptions("./badger.db"))
	if err != nil {
		log.Printf("error opening database: %s\n", err)
		return err
	}
	return nil
}

func (c *M30Ctx) CloseDB() {
	if c.db != nil {
		c.db.Close()
	}
}

type APICtx struct {
	api *gin.RouterGroup
}

func (c *APICtx) initRouter(router *gin.RouterGroup) {
	c.api = router.Group("/api")
}

func initAPI(router *gin.RouterGroup) {

}

func main() {

	ctx := &M30Ctx{}
	if err := ctx.OpenDB(); err != nil {
		log.Fatalf("unable to open database: %v\n", err)
	}
	defer ctx.CloseDB()

	router := gin.Default()

	router.Static("/", "./frontend/dist/")

	api := router.Group("/api")
	initAPI(api)

	router.Run()
}
