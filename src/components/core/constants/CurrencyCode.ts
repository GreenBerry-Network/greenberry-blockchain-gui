import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.GREENBERRY]: IS_MAINNET ? 'XCH' : 'TXCH',
};
