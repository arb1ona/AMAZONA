### DEBUGGING

## 1. Connect ECONNREFUSED 127.0.0.1:27017
This happened probably because the MongoDB service isn't started. Follow the below steps to start it:

1-Go to Control Panel and click on Administrative Tools.
2-Double click on Services. A new window opens up.
3-Search MongoDB.exe. Right click on it and select Start.
4-The server will start. Now execute `npm start` again and the code might work this time.



This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
