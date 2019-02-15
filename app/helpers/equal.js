import { helper } from '@ember/component/helper';

export function equal(params) {
  if(params[0] == params[1])
  {
    return true;
  }
  else
  {
    return false;
  }
}

export default helper(equal);
