#!/bin/bash

# TOKEN="dde9a7c8c121138fd71ffc7e1da0667b"
# DATE="2022-04-14"
# ACTIVITY="walk"
# LOCATION="house"
# DISTANCE="1 mile"
# DURATION="1 hour"
# WITH="Kay"
# COMMENTS="nice"

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
