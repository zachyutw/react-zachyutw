import { useEffect, useState } from 'react';
const useOneByOne = (length, delay = 300) => {
  const [cursor, setCursor] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCursor(_cursor => {
        if (_cursor + 1 === length) {
          clearInterval(intervalId);
        }
        return _cursor + 1;
      });
    }, delay);
  }, [length]);
  return { cursor };
};
export default useOneByOne;

/**
 * @example
 *  const OneByOneImages = ({ children, ...rest }) => {
 *   const { cursor } = useOneByOne(images.length);
 *    return (
 *       <div {...rest}>
 *          {images.map((img, index) => <img className={[ index <= cursor ? s.img : 'hidden', 'fade' ].join(' ')} alt={img} key={index} src={img} />)}
 *          {children}
 *     </div>
 * );};
 *
 */
