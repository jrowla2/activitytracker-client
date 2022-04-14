#!/bin/sh

TOKEN="de6b495b3da5bc91bc70b9ae39665634"
ID="62562298062c2190033a4b5d"

API="http://localhost:4741"
URL_PATH="/tracks"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
