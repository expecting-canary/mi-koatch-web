import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, IconName } from '@fortawesome/fontawesome-svg-core';
import './regular';
import './solid';

export function Icon({ icon, far = false }: { icon: IconProp; far?: boolean }) {
  if (far) return <FontAwesomeIcon icon={['far', icon as IconName]} />;
  return <FontAwesomeIcon icon={icon} />;
}
