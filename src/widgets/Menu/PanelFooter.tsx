import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon, SYFRoundIcon, CogIcon, SvgProps } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import Skeleton from "../../components/Skeleton/Skeleton";
import IconButton from "../../components/Button/IconButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon, LanguageIcon } = Icons;

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const PriceLink = styled.a`
  display: inline-block;
  margin-top:15px;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const PriceLinkWraith = styled.a`
  display: inline-block;
  margin-top:15px;
  margin-bottom:15px;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

const PriceText = styled.div`
  color: #c9c4d4;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  position: relative;
  bottom: 8px;
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  height: 150px;
  padding: 0 16px;
  text-align: center;
`;

const FlexSyfin = styled.div`
  display: flex;
  justify-content: center;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  wraithPriceUsd,
  syfinPriceUsd,
  currentLang,
  langs,
  setLang,
  priceLink,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <SocialEntry>
        {syfinPriceUsd ? (
          <PriceLink href={priceLink} target="_blank">
            <SYFRoundIcon width="24px" mr="8px" />
            <PriceText>{`$${syfinPriceUsd.toFixed(9)}`}</PriceText>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24} />
        )}
        <Break></Break>
        {wraithPriceUsd ? (
          <PriceLinkWraith href={priceLink} target="_blank">
            <PancakeRoundIcon width="24px" mr="8px" />
            <PriceText>{`$${wraithPriceUsd.toFixed(4)}`}</PriceText>
          </PriceLinkWraith>
        ) : (
          <Skeleton width={80} height={24} />
        )}
        <FlexSyfin>
          {socials.map((social, index) => {
            const Icon = Icons[social.icon];
            const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
            const mr = index < socials.length - 1 ? "8px" : 0;
            if (social.items) {
              return (
                <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
                  {social.items.map((item) => (
                    <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
                      {item.label}
                    </Link>
                  ))}
                </Dropdown>
              );
            }
            return (
              <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                <Icon {...iconProps} />
              </Link>
            );
          })}
        </FlexSyfin>
      </SocialEntry>
    </Container>
  );
};

export default PanelFooter;
