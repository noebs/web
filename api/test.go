package handler

import (
	"encoding/json"
	"log"
	"net/http"
)

//AndroidHandler for responding to google verification
func AndroidHandler(w http.ResponseWriter, r *http.Request) {

	rr := res{
		Target: Target{
			Namespace:              "android_app",
			AndroidApp:             "net.soluspay.cashq",
			Sha256CertFingerprints: []string{"E9:AF:9B:B2:7C:B7:51:C1:BB:A3:65:B4:35:57:FF:6C:33:D7:7F:91:71:9B:85:73:4B:78:7F:54:1B:59:D8:24"},
		},
		Relation: []string{"delegate_permission/common.handle_all_urls"},
	}

	ss := ListRes{rr}
	data, err := json.Marshal(&ss)
	if err != nil {
		log.Printf("Error in decoding json: %v", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	w.Header().Add("content-type", "application/json")
	w.Write(data)
}

/*

[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "net.soluspay.cashq",
    "sha256_cert_fingerprints":
    ["E9:AF:9B:B2:7C:B7:51:C1:BB:A3:65:B4:35:57:FF:6C:33:D7:7F:91:71:9B:85:73:4B:78:7F:54:1B:59:D8:24"]
  }
}]

[{"relation":["delegate_permission/common.handle_all_urls"],
"target":{"namespace":"android_app","package_name":"net.soluspay.cashq",
"sha256_cert_fingerprints":["E9:AF:9B:B2:7C:B7:51:C1:BB:A3:65:B4:35:57:FF:6C:33:D7:7F:91:71:9B:85:73:4B:78:7F:54:1B:59:D8:24"]}}]

[{"relation":["delegate_permission/common.handle_all_urls"],
"target":{"namespace":"android_app","package_name":"net.soluspay.cashq",
"sha_256_cert_fingerprints":["E9:AF:9B:B2:7C:B7:51:C1:BB:A3:65:B4:35:57:FF:6C:33:
D7:7F:91:71:9B:85:73:4B:78:7F:54:1B:59:D8:24"]}}]

*/

type ListRes []res

type res struct {
	Relation []string `json:"relation,omitempty"`
	Target   `json:"target"`
}
type relation struct {
	Relation []string `json:"relation,omitempty"`
}

type Target struct {
	Namespace              string   `json:"namespace,omitempty"`
	AndroidApp             string   `json:"package_name,omitempty"`
	Sha256CertFingerprints []string `json:"sha256_cert_fingerprints,omitempty"`
}
