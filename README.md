# ioBroker.rtspStream

## rtsp Adapter for ioBroker

### Case Study
This adapter is currently in "pre-Alpha"-State. It should be seen as a "case Study" to see
if this Adapter is needed and what features are needed. If you are looking for some features, please post them either in the forum or as an issue on github.<br />
It is also not yet sure if the adapter will be developed up to a stable state or just will be rejected...
## Installation
Currently the adapter only Supports linux.<br />
To use this adapter, you first need to install ffmpeg:
```
sudo apt-get install ffmpeg
```

Then install the adapter with the "cat" from github (Install from own url).<br />
Enter the stream url, for example (highway stream):<br />
```
rtsp://170.93.143.139/rtplive/470011e600ef003a004ee33696235daa
```
Enter a **port** and save configuration.

Currently only 1 Stream is supported. If you want to have multiple streams, install multiple instances.
In later version multiple streams will be supported...

## Using the Adapter
### Access the stream
The adapter opens a webserver which provides you with the right js and html.
Just open:
```
http://ip.of.your.iobroker:port
Example:
http://192.168.1.100:8084
```
The port is the port you have been storing in the configuration of the Adapter.
You can use this address in a iframe of your VIS-Project.
### Stop streaming
The adapter creates a state "rtspStream.0.startStream". Set it to false will stop streaming and eating your cpu.
## Known Problems
* Currently only http is supported
* Only works on Linux with ffmpeg installed (maybe will try to include autoinstaller and windows)
* You can not set any streaming options like size, frame rate etc.
* I have no clue if this works with other cameras than the highway-camera, please report ;)

## Contributors
* dbweb-ch

## Changelog
### 0.0.1
* (dbweb-ch) initial implementation with 1 stream

## License
MIT License

Copyright (c) 2019 Dominic Blattmann <nick@dbweb.ch>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.