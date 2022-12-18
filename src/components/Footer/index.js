import { t } from "i18next";
import React from "react";
import {
  SubContainer,
  SubTitle,
  Number,
  Wrapper,
  Phone,
  IconWrapper,
  Telegram,
  Instagram,
  TelegramGroup,
  BottomFooter,
  Address,
  Container,
  Location,
  MainButton,
  Div,
} from "./style";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const {t} = useTranslation();
  return (
    <Container id="contact">
      <SubContainer>
        <Wrapper>
          <SubTitle>
            <span>
              <Phone />
            </span>{" "}
            {t('contacts')}
          </SubTitle>
          <Number>+998 91 160 02 62</Number>
          <Number>+998 95 307 00 27</Number>
          <Number>+998 95 402 00 27</Number>
        </Wrapper>

        <Wrapper>
          <SubTitle>{t('social_media')}</SubTitle>

          <IconWrapper>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://t.me/sheyxtravel_uz"
            >
              <Telegram />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://t.me/SheyxTravel"
            >
              <TelegramGroup />
            </a>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/sheyx_travel/"
            >
              <Instagram />
            </a>
          </IconWrapper>
        </Wrapper>
      </SubContainer>

      <BottomFooter>
        <Address>
          <span>
            <Location />
          </span>
          <div>
            {t('address')}
            <div>{t('muljal')}</div>
          </div>
        </Address>

        <Div className="Div">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://t.me/Umravaxaj1"
          >
            <MainButton>{t('contact_us')}</MainButton>
          </a>
        </Div>
      </BottomFooter>
    </Container>
  );
};
