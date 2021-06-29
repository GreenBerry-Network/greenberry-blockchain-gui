import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as GreenberryIcon } from './images/greenberry.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={GreenberryIcon} viewBox="0 0 150 58" {...props} />;
}
