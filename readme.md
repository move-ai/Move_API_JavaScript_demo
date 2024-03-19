# Move API JavaScript demo
##### Generate motion data from human movement

This is a simple example of using the Move GraphQL API to process an mp4 video containing 1 human and return motion data.

To run this demo rename .env.example to .env and add your Move API key. To request an API key, visit [https://developers.move.ai/docs/request-an-api-key](https://developers.move.ai/docs/request-an-api-key).

Then in the terminal inside the project folder type:

```
node app
```

This will execute the code in app.js.

The demo carries out the following steps using the Move GraphQL API:

1. Requests a presigned URL and file ID from the Move API in order to upload a video file.
2. Uploads example.mp4 to the presigned URL.
3. Uses the file ID returned in step 1 to create a Take.
4. Uses the take ID returned in step 3 to create a Job.
5. Jobs are long running processes so the code contains a polling function that will check the state of the Job every 30 seconds and return the motion output files (including preview mp4 files) as new presigned URLs. The example.mp4 file will take approximately 5 minutes to process.


## Tips
The best quality output is obtained when the following steps are all included in the video:

- A human is fully visible at the start of the video.
- The camera is static for the duration of the capture.
- The entire actor is completely visible in every frame of the capture.
- There are no other people visible at any time during the capture.
- The actor holds an “A pose” for 1 second at the start of the video.
- Clothing worn by the actor has good contrast to their background.
- The actor is well lit.

## Learn more
[https://developers.move.ai/](https://developers.move.ai/)