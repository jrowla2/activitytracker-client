#!/bin/sh

# TOKEN="dde9a7c8c121138fd71ffc7e1da0667b"

API="http://localhost:4741"
URL_PATH="/tracks"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
