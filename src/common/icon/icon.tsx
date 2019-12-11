import './regular';
import './solid';

import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export function Icon( { icon, far = false }: { icon: IconProp; far?: boolean } ) {
  if( far ) { return <FontAwesomeIcon icon={[ 'far', icon as IconName ]} />; }
  return <FontAwesomeIcon icon={icon} />;
}
