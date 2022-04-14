#!/bin/bash

TOKEN="de6b495b3da5bc91bc70b9ae39665634"
DATE="2022-04-12"
ACTIVITY="walk"
LOCATION="neightborhood"
DISTANCE="3 miles"
DURATION="1 hour"
WITH="Kay"
COMMENTS="windy and blustery, storm front moving in"


API="http://localhost:4741"
URL_PATH="/tracks"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
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
