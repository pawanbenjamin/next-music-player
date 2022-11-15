import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Flex,
  Text,
  Icon,
} from "@chakra-ui/react";
// import ReactHowler from "react-howler";
import { useRef, useState, useEffect } from "react";
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
  MdRepeat,
  MdPreview,
} from "react-icons/md";

export default function Player() {
  return (
    <div>
      <div>
        {/* <ReactHowler
          ref={soundRef}
          playing={playing}
          src={activeSong?.url}
          onLoad={onLoad}
          onEnd={onEnd}
        /> */}
      </div>
      <div>
        <div>
          <IconButton
            outline="none"
            variant="link"
            aria-label="shuffle"
            fontSize="24px"
            // color={shuffle ? "white" : "gray.600"}
            // onClick={() => onShuffle()}
            icon={<MdShuffle />}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="skip"
            fontSize="24px"
            icon={<MdSkipPrevious />}
            // onClick={prevSong}
          />
          {false ? (
            <IconButton
              outline="none"
              variant="link"
              aria-label="pause"
              fontSize="40px"
              icon={<MdOutlinePauseCircleFilled />}
            />
          ) : (
            <IconButton
              outline="none"
              variant="link"
              aria-label="play"
              fontSize="40px"
              icon={<MdOutlinePlayCircleFilled />}
              //   onClick={() => setPlayState(true)}
            />
          )}

          <IconButton
            outline="none"
            variant="link"
            aria-label="skip"
            fontSize="24px"
            icon={<MdSkipNext />}
            // onClick={nextSong}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="repeat"
            fontSize="24px"
            icon={<MdRepeat />}
            // color={repeat ? "white" : "gray.600"}
            // onClick={() => onRepeat()}
          />
        </div>
      </div>
      <div>
        <div>
          <div>{/* <Text fontSize="x-small">{formatTime(seek)}</Text> */}</div>
          <div>
            <RangeSlider
              aria-label={[`min`, `max`]}
              step={0.1}
              min={0}
              id="player-range"
              // max={duration ? +duration.toFixed(2) : 0}
              // onChange={onSeek}
              // value={[seek]}
              // onChangeStart={() => setIsSeeking(true)}
              // onChangeEnd={() => setIsSeeking(false)}
            >
              <RangeSliderTrack bg="gray.600">
                <RangeSliderFilledTrack bg="gray.400" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </div>
          <div>
            {/* <Text fontSize="x-small">{formatTime(duration)}</Text> */}
          </div>
        </div>
      </div>
    </div>
  );
}
