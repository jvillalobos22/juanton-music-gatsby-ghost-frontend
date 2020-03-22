import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { findDOMNode } from 'react-dom';
import { hot } from 'react-hot-loader';
import screenfull from 'screenfull';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { ButtonOutline } from './Buttons';
import { Heading3 } from './Typography';

const PlayerWrapper = styled(({ isVisible, hidePlayer, ...rest }) => (
  <div {...rest} />
))`
  width: 100%;
  position: relative;

  ${props =>
    props.isVisible &&
    css`
      z-index: 0;
      opacity: 1;
    `};

  ${props =>
    !props.hidePlayer &&
    css`
      padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
    `};
`;

const ReactPlayerSC = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const FontAwesomeIconSC = styled(FontAwesomeIcon)`
  font-size: 12px;
  margin-bottom: 2px;
  margin-left: 8px;
`;

const ButtonOutlineSC = styled(ButtonOutline)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: 'https://www.youtube.com/watch?v=FrqkJLtjTlM',
      pip: false,
      playing: false,
      controls: false,
      light: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false,
      isVisible: false
    };
  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false
    });
  };

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  handleStop = () => {
    this.setState({ url: null, playing: false });
  };

  handleToggleControls = () => {
    const url = this.state.url;
    this.setState(
      {
        controls: !this.state.controls,
        url: null
      },
      () => this.load(url)
    );
  };

  handleToggleLight = () => {
    this.setState({ light: !this.state.light });
  };

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };

  handleVolumeChange = e => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };

  handleSetPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  };

  handleTogglePIP = () => {
    this.setState({ pip: !this.state.pip });
  };

  handlePlay = () => {
    console.log('onPlay');
    this.setState({ playing: true });
  };

  handleEnablePIP = () => {
    console.log('onEnablePIP');
    this.setState({ pip: true });
  };

  handleDisablePIP = () => {
    console.log('onDisablePIP');
    this.setState({ pip: false });
  };

  handlePause = () => {
    console.log('onPause');
    this.setState({ playing: false });
  };

  handleSeekMouseDown = e => {
    this.setState({ seeking: true });
  };

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  handleSeekMouseUp = e => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };

  handleProgress = state => {
    console.log('onProgress', state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  handleEnded = () => {
    console.log('onEnded');
    this.setState({ playing: this.state.loop });
  };

  handleDuration = duration => {
    console.log('onDuration', duration);
    this.setState({ duration });
  };

  handleClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player));
    this.setState({ isVisible: true });
  };

  renderLoadButton = (url, label) => {
    return (
      <ButtonOutlineSC onClick={() => this.load(url)}>{label}</ButtonOutlineSC>
    );
  };

  ref = player => {
    this.player = player;
  };

  render() {
    const {
      url,
      playing,
      controls,
      light,
      volume,
      muted,
      loop,
      played,
      loaded,
      duration,
      playbackRate,
      pip,
      isVisible
    } = this.state;

    const { hidePlayerWhenClosed } = this.props;

    console.log('isVisible', isVisible);
    return (
      <>
        {hidePlayerWhenClosed && (
          <ButtonOutline onClick={this.handleClickFullscreen}>
            Watch Now
            <FontAwesomeIconSC icon={faPlay} />
          </ButtonOutline>
        )}
        <PlayerWrapper isVisible={isVisible} hidePlayer={hidePlayerWhenClosed}>
          <ReactPlayerSC
            ref={this.ref}
            className="react-player"
            width="100%"
            height="100%"
            url={url}
            pip={pip}
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onReady={() => console.log('onReady')}
            onStart={() => console.log('onStart')}
            onPlay={this.handlePlay}
            onEnablePIP={this.handleEnablePIP}
            onDisablePIP={this.handleDisablePIP}
            onPause={this.handlePause}
            onBuffer={() => console.log('onBuffer')}
            onSeek={e => console.log('onSeek', e)}
            onEnded={this.handleEnded}
            onError={e => console.log('onError', e)}
            onProgress={this.handleProgress}
            onDuration={this.handleDuration}
          />
        </PlayerWrapper>

        {/* <h3>Controls</h3> */}

        {/* <button onClick={this.handleStop}>Stop</button>
        <button onClick={this.handlePlayPause}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <button onClick={this.handleClickFullscreen}>Fullscreen</button>
        {light && (
          <button onClick={() => this.player.showPreview()}>
            Show preview
          </button>
        )}
        {ReactPlayer.canEnablePIP(url) && (
          <button onClick={this.handleTogglePIP}>
            {pip ? 'Disable PiP' : 'Enable PiP'}
          </button>
        )}
        <hr />
        <h4>Speed</h4>

        <button onClick={this.handleSetPlaybackRate} value={1}>
          1x
        </button>
        <button onClick={this.handleSetPlaybackRate} value={1.5}>
          1.5x
        </button>
        <button onClick={this.handleSetPlaybackRate} value={2}>
          2x
        </button>

        <hr />
        <h4>Seek</h4>

        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={played}
          onMouseDown={this.handleSeekMouseDown}
          onChange={this.handleSeekChange}
          onMouseUp={this.handleSeekMouseUp}
        />

        <h4>Volume</h4>

        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={volume}
          onChange={this.handleVolumeChange}
        />

        <label htmlFor="controls">Controls</label>

        <input
          id="controls"
          type="checkbox"
          checked={controls}
          onChange={this.handleToggleControls}
        />
        <em>&nbsp; Requires player reload</em>

        <label htmlFor="muted">Muted</label>

        <input
          id="muted"
          type="checkbox"
          checked={muted}
          onChange={this.handleToggleMuted}
        />

        <label htmlFor="loop">Loop</label>

        <input
          id="loop"
          type="checkbox"
          checked={loop}
          onChange={this.handleToggleLoop}
        />

        <label htmlFor="light">Light mode</label>

        <input
          id="light"
          type="checkbox"
          checked={light}
          onChange={this.handleToggleLight}
        />

        <h4>Played</h4>
        <td>
          <progress max={1} value={played} />
        </td>

        <h4>Loaded</h4>
        <td>
          <progress max={1} value={loaded} />
        </td>

        <section className="section">
          <h4>YouTube</h4>
          {this.renderLoadButton(
            'https://www.youtube.com/watch?v=FrqkJLtjTlM&t=2912s',
            'Video'
          )}
        </section> */}
      </>
    );
  }
}

export default hot(module)(VideoPlayer);
