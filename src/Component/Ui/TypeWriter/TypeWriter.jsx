import { useState } from 'react';
import PropTypes from 'prop-types';
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = ({text}) => {
    const [loopCount, setLoopCount] = useState(-1);

    const handleLoopComplete = () => {
      setLoopCount((prevLoopCount) => prevLoopCount + 1);
    };
    return (
        <span>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[text]}
              loop={loopCount}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopComplete={handleLoopComplete}
            />
          </span>
    );
};

TypeWriter.propTypes = {
    text : PropTypes.string,
};

export default TypeWriter;