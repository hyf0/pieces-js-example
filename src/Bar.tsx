import { css } from '@pieces-js/tag'
import { FC } from "react";

const Bar: FC = () => {
  return (
    <div className={css`
      color: red;
      font-size: 24px;
      border: 1px black solid;
    `}>bar</div>
  );
}

export default Bar;