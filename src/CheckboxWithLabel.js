import React, { useState } from "react";

export default () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleIsChecked = () => setIsChecked(!isChecked);

  return (
    <label data-testid="checkbox">
      <input type="checkbox" checked={isChecked} onChange={toggleIsChecked} />
      <div>label text</div>
    </label>
  );
};
