import { useState } from 'react';

export const useButton = () => {
    const [state, setState] = useState<boolean>(false);

    function toggleState() {
        setState(true);
    }

  return {isClicked: state, blockClick: toggleState};
}
