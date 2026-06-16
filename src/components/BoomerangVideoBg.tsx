import { useEffect, useRef, useState } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260527_061033_0f369854-8849-4214-8787-9181479c8121.mp4';

type RequestVideoFrameCallback = (
  callback: (now: DOMHighResTimeStamp, metadata: VideoFrameCallbackMetadata) => void,
) => number;

type CancelVideoFrameCallback = (handle: number) => void;

type VideoElementWithFrameCallback = HTMLVideoElement & {
  requestVideoFrameCallback?: RequestVideoFrameCallback;
  cancelVideoFrameCallback?: CancelVideoFrameCallback;
};

function drawVideoToFrame(video: HTMLVideoElement) {
  if (!video.videoWidth || !video.videoHeight) {
    return null;
  }

  const scale = Math.min(960 / video.videoWidth, 1);
  const width = Math.max(1, Math.round(video.videoWidth * scale));
  const height = Math.max(1, Math.round(video.videoHeight * scale));
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d');
  if (!context) {
    return null;
  }

  context.drawImage(video, 0, 0, width, height);
  return canvas;
}

export function BoomerangVideoBg() {
  const videoRef = useRef<VideoElementWithFrameCallback>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLCanvasElement[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const fallbackIntervalRef = useRef<number | undefined>(undefined);
  const frameCallbackRef = useRef<number | undefined>(undefined);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    let disposed = false;
    let lastCapture = 0;

    const captureFrame = () => {
      if (disposed || video.paused || video.ended) {
        return;
      }

      const now = performance.now();
      if (now - lastCapture < 1000 / 60) {
        return;
      }

      const frame = drawVideoToFrame(video);
      if (frame) {
        framesRef.current.push(frame);
        lastCapture = now;
      }
    };

    const requestVideoFrameCallback =
      (video as Partial<VideoElementWithFrameCallback>).requestVideoFrameCallback?.bind(video);
    const cancelVideoFrameCallback =
      (video as Partial<VideoElementWithFrameCallback>).cancelVideoFrameCallback?.bind(video);

    const scheduleFrameCapture = () => {
      if (!requestVideoFrameCallback || disposed) {
        return;
      }

      frameCallbackRef.current = requestVideoFrameCallback(() => {
        captureFrame();
        scheduleFrameCapture();
      });
    };

    const handlePlay = () => {
      if (requestVideoFrameCallback) {
        scheduleFrameCapture();
      } else {
        fallbackIntervalRef.current = window.setInterval(captureFrame, 1000 / 60);
      }
    };

    const handleEnded = () => {
      const finalFrame = drawVideoToFrame(video);
      if (finalFrame) {
        framesRef.current.push(finalFrame);
      }
      setReady(framesRef.current.length > 0);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('ended', handleEnded);
    video.play().catch(() => undefined);

    return () => {
      disposed = true;
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('ended', handleEnded);
      if (fallbackIntervalRef.current) {
        window.clearInterval(fallbackIntervalRef.current);
      }
      if (frameCallbackRef.current && cancelVideoFrameCallback) {
        cancelVideoFrameCallback(frameCallbackRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!ready) {
      return;
    }

    const canvas = canvasRef.current;
    const frames = framesRef.current;
    const firstFrame = frames[0];
    const context = canvas?.getContext('2d');

    if (!canvas || !context || !firstFrame) {
      return;
    }

    canvas.width = firstFrame.width;
    canvas.height = firstFrame.height;

    let frameIndex = 0;
    let direction = 1;
    let lastTick = 0;

    const render = (time: number) => {
      if (time - lastTick >= 1000 / 30) {
        const frame = frames[frameIndex];
        if (frame) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(frame, 0, 0, canvas.width, canvas.height);
        }

        frameIndex += direction;
        if (frameIndex >= frames.length - 1 || frameIndex <= 0) {
          direction *= -1;
          frameIndex = Math.max(0, Math.min(frames.length - 1, frameIndex));
        }
        lastTick = time;
      }

      animationRef.current = requestAnimationFrame(render);
    };

    animationRef.current = requestAnimationFrame(render);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [ready]);

  return (
    <div className="absolute inset-0 h-full w-full">
      <video
        ref={videoRef}
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
        crossOrigin="anonymous"
        className="h-full w-full object-cover"
        style={{ display: ready ? 'none' : 'block' }}
      />
      <canvas
        ref={canvasRef}
        className="h-full w-full object-cover"
        style={{ display: ready ? 'block' : 'none' }}
      />
    </div>
  );
}
