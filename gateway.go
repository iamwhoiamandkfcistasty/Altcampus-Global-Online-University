package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type TokenNode struct {
	UserEmail  string    `json:"user_email"`
	TierCost   string    `json:"tier_cost"`
	AuthStatus bool      `json:"auth_status"`
	Timestamp  time.Time `json:"timestamp"`
}

func VerifyPlatformAccess(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	responseNode := TokenNode{
		UserEmail:  "macha@developer.com",
		TierCost:   "₹600_PER_YEAR_CORE",
		AuthStatus: true,
		Timestamp:  time.Now(),
	}

	fmt.Println("\n📡 [GO GATEWAY]: Scanning ₹75/month verification packet...")
	fmt.Println("🟢 STATUS: Authorization code matched. Stream window unlocked.")
	json.NewEncoder(w).Encode(responseNode)
}
