import React from "react";
import {
  OverlayContainer,
  Overlay,
  LeftOverlayPanel,
  Title,
  Paragraph,
  GhostButton,
  RightOverlayPanel,
} from "./Style.js";

function Slider({ signIn, toggle }) {
  return (
    <OverlayContainer signinIn={signIn} className="hide">
      <Overlay signinIn={signIn}>
        <LeftOverlayPanel signinIn={signIn}>
          <Title>Welcome Back!</Title>
          <Paragraph>
            To keep connected with us please login with your personal info
          </Paragraph>
          <GhostButton onClick={() => toggle(true)}>Sign In</GhostButton>
        </LeftOverlayPanel>

        <RightOverlayPanel signinIn={signIn}>
          <Title>Hello, Friend!</Title>
          <Paragraph>
            Enter Your personal details and start journey with us
          </Paragraph>
          <GhostButton onClick={() => toggle(false)}>Sigin Up</GhostButton>
        </RightOverlayPanel>
      </Overlay>
    </OverlayContainer>
  );
}

export default Slider;
