import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import red_queen_and_alice_sprite from "./image/sprite_running-alice-queen_small.png";
import palm3 from "./image/palm3_small.png";
import bush from "./image/bush_small.png";
import w_rook_upright from "./image/w_rook_upright_small.png";
import r_pawn_upright_small from "./image/r_pawn_upright_small.png";
import w_rook_small from "./image/w_rook_small.png";
import palm1_small from "./image/palm1_small.png";
import r_pawn_small from "./image/r_pawn_small.png";
import r_knight_small from "./image/r_knight_small.png";
import palm2_small from "./image/palm2_small.png";

import "./App.css";

function App() {
  const {
    ref: sceneryForeground,
    getAnimation: sceneryForegroundAnimation,
  } = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" },
      { transform: "translateX(-100%" },
    ],
    timing: {
      duration: 12000,
      iterations: Infinity,
    },
  });

  const {
    ref: sceneryTwoForeground,
    getAnimation: sceneryTwoForegroundAnimation,
  } = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" },
      { transform: "translateX(-100%" },
    ],
    timing: {
      duration: 12000,
      iterations: Infinity,
    },
  });

  const {
    ref: sceneryBackground,
    getAnimation: sceneryBackgroundAnimation,
  } = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" },
      { transform: "translateX(-100%)" },
    ],
    timing: {
      duration: 36000,
      iterations: Infinity,
    },
  });

  const {
    ref: sceneryBackgroundTwo,
    getAnimation: sceneryBackgroundTwoAnimation,
  } = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" },
      { transform: "translateX(-100%)" },
    ],
    timing: {
      duration: 36000,
      iterations: Infinity,
    },
  });

  const {
    ref: aliceQueen,
    getAnimation: aliceQueenAnimation,
  } = useWebAnimations({
    keyframes: [
      { transform: "translateY(0)" },
      { transform: "translateY(-100%)" },
    ],
    timing: {
      easing: "steps(7, end)",
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity,
    },
  });
  const speedup = () => {
    aliceQueenAnimation().updatePlaybackRate(
      aliceQueenAnimation().playbackRate * 1.1
    );
    sceneryForegroundAnimation().updatePlaybackRate(
      aliceQueenAnimation().playbackRate * 1.05
    );
    sceneryTwoForegroundAnimation().updatePlaybackRate(
      sceneryTwoForegroundAnimation().playbackRate * 1.05
    );
    sceneryBackgroundAnimation().updatePlaybackRate(
      sceneryBackgroundAnimation().playbackRate * 1.05
    );
    sceneryBackgroundTwoAnimation().updatePlaybackRate(
      sceneryBackgroundTwoAnimation().playbackRate * 1.05
    );
  };

  setInterval(() => {
    if (aliceQueenAnimation.playbackRate > 0.8) {
      aliceQueenAnimation().playbackRate *= 0.9;

      aliceQueenAnimation().updatePlaybackRate(
        aliceQueenAnimation.playbackRate
      );
      sceneryForegroundAnimation().updatePlaybackRate(
        aliceQueenAnimation().playbackRate
      );
      sceneryTwoForegroundAnimation().updatePlaybackRate(
        sceneryTwoForegroundAnimation().playbackRate
      );
      sceneryBackgroundAnimation().updatePlaybackRate(
        sceneryBackgroundAnimation().playbackRate
      );
      sceneryBackgroundTwoAnimation().updatePlaybackRate(
        sceneryBackgroundTwoAnimation().playbackRate
      );
    }
  }, 3000);

  return (
    <div className="wrapper" onClick={speedup}>
      <div className="sky"></div>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img
            id="red_queen_and_alice_sprite"
            src={red_queen_and_alice_sprite}
            alt="Alice and the Red Queen running to stay in place."
            ref={aliceQueen}
          />
        </div>
      </div>

      <div className="scenery" id="foreground1" ref={sceneryForeground}>
        <img id="palm3" src={palm3} alt="palm3" />
      </div>
      <div className="scenery" id="foreground2" ref={sceneryTwoForeground}>
        <img id="bush" src={bush} alt=" " />
        <img id="w_rook_upright" src={w_rook_upright} alt=" " />
      </div>
      <div className="scenery" id="background1" ref={sceneryBackground}>
        <img
          id="r_pawn_upright_small"
          src={r_pawn_upright_small}
          alt="r_pawn_upright_small"
        />
        <img id="w_rook" src={w_rook_small} alt="w_rook_small" />
        <img id="palm1" src={palm1_small} alt="palm1_small" />
      </div>
      <div className="scenery" id="background2" ref={sceneryBackgroundTwo}>
        <img id="r_pawn" src={r_pawn_small} alt="r_pawn_small" />

        <img id="r_knight" src={r_knight_small} alt="r_knight_small" />
        <img id="palm2" src={palm2_small} alt="palm2_small" />
      </div>
    </div>
  );
}
export default App;
