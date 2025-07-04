#!/bin/bash
cd/home/ec2-user/node_modules/server
npm install
nohup npm start > output.log 2>&1 &