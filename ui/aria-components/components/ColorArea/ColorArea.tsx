import './ColorArea.css';

import {
  ColorArea as AriaColorArea,
  ColorAreaProps,
  ColorThumb,
} from 'react-aria-components';

export function ColorArea(props: ColorAreaProps) {
  return (
    <AriaColorArea {...props}>
      <ColorThumb />
    </AriaColorArea>
  );
}

export { ColorArea as MyColorArea };
