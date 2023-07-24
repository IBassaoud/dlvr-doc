import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import screenfull from 'screenfull';

type DemoVideoProps = {
  url: string;
};

const DemoVideo: React.FC<DemoVideoProps> = ({ url }) => {
  const videoUrl = useBaseUrl(url);
  const [playing, setPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mouseActivity, setMouseActivity] = useState(true);

  const playerRef = useRef(null);
  const controlsRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleProgress = (state) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekMouseUp = () => {
    setSeeking(false);
    playerRef.current.seekTo(played);
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  const handleFullscreen = () => {
    if (screenfull.isEnabled && playerRef.current) {
      screenfull.toggle(playerRef.current.getInternalPlayer());
      setIsFullscreen(!isFullscreen);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setMouseActivity(false), 2000);
    return () => clearTimeout(timer);
  }, [mouseActivity]);

  return (
    <div
      className={`${styles.videoContainer} ${isFullscreen ? styles.fullscreen : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={() => setMouseActivity(true)}
    >
      <ReactPlayer
        ref={playerRef}
        playing={playing}
        url={videoUrl}
        width='100%'
        height='100%'
        onProgress={handleProgress}
      />
      {showControls && mouseActivity && (
        <div ref={controlsRef} className={styles.controls}>
          <button onClick={handlePlayPause} className={styles.playPauseButtonCenter}>
            <FontAwesomeIcon icon={playing ? faPause : faPlay} color="var(--ifm-color-primary)" />
          </button>
        </div>
      )}
      {showControls && mouseActivity && (
        <div className={styles.bottomControls}>
          <button onClick={handlePlayPause} className={styles.playPauseButton}>
            <FontAwesomeIcon icon={playing ? faPause : faPlay} color="var(--ifm-color-primary)" />
          </button>
          <input
            type='range'
            min={0}
            max={1}
            step='any'
            value={played}
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
            className={styles.timeline}
          />
          <button onClick={handleFullscreen} className={styles.fullscreenButton}>
            <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} color="var(--ifm-color-primary)" />
          </button>
        </div>
      )}
    </div>
  );
};

export default DemoVideo;
