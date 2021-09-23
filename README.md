# UIkit fork for Wraith (WRA) and Syfin (SYF) Dapps

WraithSwap UIkit is a set of React components and hooks used to build pages on Wraith's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add git://github.com/sy-finance/wraith-uikit`

## Setup

### Theme

Before using Wraith UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@pancakeswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@pancakeswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
