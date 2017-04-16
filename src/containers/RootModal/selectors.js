import { createSelector } from 'reselect';

/**
 * Direct selector to the rootModal state domain
 */
const selectRootModalDomain = () => state => state.get('modal');

/**
 * Other specific selectors
 */

const selectModalType = () => createSelector(
  selectRootModalDomain(),
  (substate) => substate.get('modalType')
);

const selectModalProps = () => createSelector(
  selectRootModalDomain(),
  (substate) => substate.get('modalProps')
);

/**
 * Default selector used by RootModal
 */

const selectRootModal = () => createSelector(
  selectRootModalDomain(),
  (substate) => substate
);

export default selectRootModal;
export {
  selectRootModalDomain,
  selectModalType,
  selectModalProps,
};
