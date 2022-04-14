#!/bin/bash

TOKEN="de6b495b3da5bc91bc70b9ae39665634"
ID="62562298062c2190033a4b5d"
DATE="2022-04-12"
ACTIVITY="mtn bike"
LOCATION="S mtn"
DISTANCE="8 miles"
DURATION="2 hours"
WITH="Kayla, Matt, Becca, Pat"
COMMENTS="Very windy and cold"

API="http://localhost:4741"
URL_PATH="/tracks"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "track": {
      "date": "'"${DATE}"'",
      "activity": "'"${ACTIVITY}"'",
      "location": "'"${LOCATION}"'",
      "distance": "'"${DISTANCE}"'",
      "duration": "'"${DURATION}"'",
      "with": "'"${WITH}"'",
      "comments": "'"${COMMENTS}"'"
    }
  }'

echo
