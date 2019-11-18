var Stream = require('node-rtsp-stream');

new Stream({
	name: 'name',
	streamUrl: 'rtsp://admin:admin@172.18.135.130:554/1/h264major',
	wsPort: 9999,
	ffmpegOptions: { // options ffmpeg flags
		'-stats': '', // an option with no neccessary value uses a blank string
		'-r': 30 // options with required values specify the value after the key
	}
});
