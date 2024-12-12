# Move API JavaScript demo
##### Generate motion data from human movement

This is a simple example of using the Move GraphQL API to process an mp4 video containing 1 human and return motion data.

To run this demo rename .env.example to .env and add your Move API key. To get an API key, signup to Team plan on [https://platform.move.ai](https://platform.move.ai).

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

## Licence 📥
The MIT License (MIT)

Copyright (c) 2023 Move AI

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.