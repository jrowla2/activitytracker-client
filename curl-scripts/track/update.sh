#!/bin/bash

# TOKEN="dde9a7c8c121138fd71ffc7e1da0667b"
# ID="6258927344d0a272d6885d62"
# DATE="2022-04-14"
# ACTIVITY="run"
# LOCATION="house"
# DISTANCE="1 mile"
# DURATION="1 hour"
# WITH="Kay"
# COMMENTS="terrible"

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
