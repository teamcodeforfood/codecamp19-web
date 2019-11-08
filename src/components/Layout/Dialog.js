import {
  Intent,
  StackView,
  Button,
  Density,
  Text,
  TextStyle,
  Surface,
  Color
} from "amino-ui";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { CSSTransition } from "react-transition-group";
import { CloseIcon } from "../icons/CloseIcon";

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: rgba(67, 90, 111, 0.85);
  z-index: 99998;
  position: fixed;
`;

const DialogLayout = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 99999;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDialog = styled.div`
  position: relative;
  z-index: 100000;
  background: #fff;
  width: ${props =>
    props.autoWidth ? "auto" : props.width ? props.width + "px" : 550 + "px"};
  border-radius: 8px;
  max-height: 90vh;
  height: auto;
  box-shadow: ${Surface.shadow.higher};
  outline: none;
`;

const Header = styled.header`
  //background: ${Color.gray.veryLight};
  padding: ${Density.spacing.sm} ${Density.spacing.md};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid ${Color.gray.light};
  display: flex;
  align-items: center;

  h1 {
    display: flex;
    flex: 1;
  }
`;

const Content = styled.div`
  //// font-size: 14px;
  padding: ${Density.spacing.md};
  max-height: 75vh;
  overflow: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  background: white;
  border-radius: 8px;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const EndStackView = styled(StackView)`
  justify-content: flex-end;
  width: 100%;
  & > * {
    margin-left: ${Density.spacing.xs};
  }
`;

const ModalFooter = styled.footer`
  border-top: 1px solid ${Color.gray.light};
  background: ${Color.gray.veryLight};
  padding: ${Density.spacing.sm} ${Density.spacing.md};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Close = styled.div`
  transition: all 100ms ease-in-out;
  background: transparent;
  border-radius: 6px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${Color.gray.light};
  }

  svg {
    width: 18px;
    height: 18px;
    fill: ${Color.text.light};
    transition: all 100ms ease-in-out;
  }

  svg:hover {
    fill: ${Color.text.base};
  }
`;

export const Dialog = ({ open, action, saving, label, onClose, children }) => {
  const [active, setActive] = useState(open || false);

  useEffect(() => {
    setActive(open);
  }, [open]);

  // TODO: clean up

  const close = () => {
    setActive(false);
    if (onClose) onClose();
  };

  const toggleScroll = () => {
    document.body.classList.toggle("no-scroll");
  };

  const dialogActions = (
    <ModalFooter>
      <>
        <EndStackView row>
          <Button disabled={saving} onClick={close}>
            Close
          </Button>
          <Button
            intent={Intent.Primary}
            onClick={action}
            saving={saving}
            disabled={saving}
          >
            Save
          </Button>
        </EndStackView>
      </>
    </ModalFooter>
  );

  const dialogHeader = (
    <Header>
      <Text style={TextStyle.Heading1}>{label}</Text>
      <Close onClick={close}>
        <CloseIcon />
      </Close>
    </Header>
  );

  return createPortal(
    <>
      <CSSTransition
        unmountOnExit
        in={open}
        timeout={300}
        classNames="amino-backdrop"
        onEnter={toggleScroll}
        onExit={toggleScroll}
      >
        <Backdrop />
      </CSSTransition>
      <CSSTransition
        unmountOnExit
        in={open}
        timeout={300}
        classNames="amino-dialog"
      >
        <DialogLayout>
          <StyledDialog width={550}>
            {dialogHeader}
            <Content>{children}</Content>
            {dialogActions}
          </StyledDialog>
        </DialogLayout>
      </CSSTransition>
    </>,
    document.querySelector("body")
  );
};
