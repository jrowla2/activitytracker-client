#!/bin/sh

TOKEN="de6b495b3da5bc91bc70b9ae39665634"

API="http://localhost:4741"
URL_PATH="/tracks"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
