import './Slider.css';

import {
  Label,
  Slider as AriaSlider,
  SliderOutput,
  SliderProps as AriaSliderProps,
  SliderThumb,
  SliderTrack,
} from 'react-aria-components';

export interface SliderProps<T> extends AriaSliderProps<T> {
  label?: string;
  thumbLabels?: Array<string>;
}

export function Slider<T extends number | Array<number>>(
  { label, thumbLabels, ...props }: SliderProps<T>,
) {
  return (
    <AriaSlider {...props}>
      <Label>{label}</Label>
      <SliderOutput>
        {({ state }) =>
          state.values.map((_, i) => state.getThumbValueLabel(i)).join(' – ')}
      </SliderOutput>
      <SliderTrack>
        {({ state }) =>
          state.values.map((_, i) => (
            <SliderThumb key={i} index={i} aria-label={thumbLabels?.[i]} />
          ))}
      </SliderTrack>
    </AriaSlider>
  );
}
