#!/bin/bash
npm run api & API_PID=$!
npm run e2e -- --protractor-config=e2e/protractor-ci.conf.js
kill -9 $API_PID
