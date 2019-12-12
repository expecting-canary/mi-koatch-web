import {
  Badge,
  BadgeProps,
  IconButton,
  IconButtonProps,
  SvgIcon,
  SvgIconProps,
} from '@material-ui/core'
import React from 'react'

export function iconVariantBuilder( IconType: typeof SvgIcon ) {
  return [
    IconType,
    badgeIconBuilder( IconType ),
    buttonIconBuilder( IconType ),
    buttonBadgeIconBuilder( IconType ),
  ]
}

type BadgeIconProps = SvgIconProps & {
  badge?: BadgeProps
  value?: number | string,
}
function badgeIconBuilder( IconType: typeof SvgIcon ) {
  return function( props: BadgeIconProps ) {
    const { badge, value, ...rest } = props
    return (
      <Badge badgeContent={value || "0"} {...badge}>
        <IconType {...rest} />
      </Badge>
    )
  }
}

type ButtonIconProps = IconButtonProps & {
  icon?: SvgIconProps,
}
function buttonIconBuilder( IconType: typeof SvgIcon ) {
  return function( props: ButtonIconProps ) {
    const { icon, ...rest } = props
    return (
      <IconButton {...rest}>
        <IconType {...icon} />
      </IconButton>
    )
  }
}

type ButtonBadgeIconProps = IconButtonProps & {
  badge?: BadgeProps
  icon?: SvgIconProps,
}
function buttonBadgeIconBuilder( IconType: typeof SvgIcon ) {
  return function( props: ButtonBadgeIconProps ) {
    const { badge, icon, value, ...rest } = props
    return (
      <IconButton {...rest}>
        <Badge badgeContent={value || "0"} {...badge}>
          <IconType {...icon} />
        </Badge>
      </IconButton>
    )
  }
}
