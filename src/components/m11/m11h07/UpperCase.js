import { useMemo } from 'react'
import { UpperA } from './UpperA';

const UpperCase = ({ text }) => {
    const upperCaseText = useMemo(() => UpperA(text), []);
    return upperCaseText;
  };

export default UpperCase
