import { useEffect } from 'react';
import intl from 'react-intl-universal';
import { useDispatch } from 'react-redux';
import { Button, Modal, Switch } from 'antd';

import { FENCE_CONNECTION_STATUSES, FENCE_NAMES } from 'common/fenceTypes';
import NciIcon from 'components/Icons/NciIcon';
import USCFLoginIcon from 'components/Icons/USCFLoginIcon';
import { useFenceConnection } from 'store/fenceConnection';
import { fenceConnectionActions } from 'store/fenceConnection/slice';
import { connectToFence, disconnectFromFence } from 'store/fenceConnection/thunks';
import { globalActions } from 'store/global';

import style from './index.module.scss';

const iconSize = {
  width: 45,
  height: 45,
};

const FencesConnectionModal = () => {
  const dispatch = useDispatch();
  const { modalConnectionParams, connectionStatus, fencesConnectError, loadingFences } =
    useFenceConnection();

  const isDcfConnected = connectionStatus[FENCE_NAMES.dcf] === FENCE_CONNECTION_STATUSES.connected;
  const isGen3Connected =
    connectionStatus[FENCE_NAMES.gen3] === FENCE_CONNECTION_STATUSES.connected;

  const onClose = () => {
    if (modalConnectionParams.onClose) {
      modalConnectionParams.onClose();
    }
    dispatch(fenceConnectionActions.setConnectionModalParams({ open: false, onClose: undefined }));
  };
  const onSwitchClick = (fenceNames: FENCE_NAMES, isConnected: boolean) => () => {
    dispatch(isConnected ? disconnectFromFence(fenceNames) : connectToFence(fenceNames));
  };

  useEffect(() => {
    if (fencesConnectError.length > 0) {
      dispatch(
        globalActions.displayNotification({
          type: 'error',
          message: intl.get('screen.dashboard.cards.authorizedStudies.notification.message'),
          description: intl.get(
            'screen.dashboard.cards.authorizedStudies.notification.description',
          ),
          onClose: () => dispatch(fenceConnectionActions.resetFenceConnectErrors()),
        }),
      );
    }
  });

  return (
    <Modal
      title={intl.get('screen.dashboard.cards.authorizedStudies.modal.title')}
      visible={modalConnectionParams.open}
      onCancel={onClose}
      footer={[
        <Button key="close" type="primary" onClick={onClose}>
          {intl.get('global.close')}
        </Button>,
      ]}
    >
      <>
        <p>{intl.get('screen.dashboard.cards.authorizedStudies.modal.description')}</p>
        <div className={style.item}>
          <USCFLoginIcon {...iconSize} />
          <span>UCSF Framework Services</span>
          <Switch
            loading={loadingFences.includes(FENCE_NAMES.gen3)}
            checked={isGen3Connected}
            onClick={onSwitchClick(FENCE_NAMES.gen3, isGen3Connected)}
          />
        </div>
        <div className={style.item}>
          <NciIcon {...iconSize} />
          <span>NCI CRDC Framework Services</span>
          <Switch
            loading={loadingFences.includes(FENCE_NAMES.dcf)}
            checked={isDcfConnected}
            onClick={onSwitchClick(FENCE_NAMES.dcf, isDcfConnected)}
          />
        </div>
      </>
    </Modal>
  );
};

export default FencesConnectionModal;
