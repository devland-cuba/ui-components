import React, { FunctionComponent, useCallback, useEffect } from 'react';
import {
  NotificationDuration,
  NotificationModel,
  NotificationType,
} from 'notifications';
import { useAppColors } from 'components/Configuration';
import { IconButton } from 'components/Button';
import { Text } from 'components/Typography';
import RenderIf from 'components/RenderIf';
import Icon from './Icon';
import { Content, Notification as StyledNotification } from './styled/notification';
import { CloseIcon } from '../Icons';

interface Props extends NotificationModel {
  onClose: (id: string) => void;
}

const variants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  exit: { x: 50, opacity: 0, transition: { duration: 0.3 } },
};

function resolveTitle(title: string, type: NotificationType) {
  if (title) {
    return title;
  }

  switch (type as NotificationType) {
    case NotificationType.SUCCESS:
      return 'Good, we made it:';
    case NotificationType.INFO:
      return 'You may want to know:';
    case NotificationType.WARNING:
      return 'You need to know:';
    case NotificationType.ERROR:
      return 'Oops, something went wrong:';
    default:
      return '';
  }
}

const Notification: FunctionComponent<Props> = (props) => {
  const colors = useAppColors();
  const { id, type, duration, title, message, onClose } = props;

  const handleOnClose = useCallback(() => {
    onClose(id);
  }, [onClose]);

  useEffect(() => {
    if (duration !== NotificationDuration.INDEFINITE) {
      setTimeout(() => onClose(id), duration);
    }
  }, []);

  return (
    <StyledNotification
      layout
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      color={colors[type]}
    >
      <Icon type={type} />
      <Content>
        <Text color="font">{resolveTitle(title, type)}</Text>
        <RenderIf condition={typeof message === 'string'} fallback={message}>
          <Text color="font">{message}</Text>
        </RenderIf>
      </Content>
      <IconButton
        color="font"
        variant="flat"
        size="small"
        icon={<CloseIcon width={14} height={14} />}
        onClick={handleOnClose}
      />
    </StyledNotification>
  );
};

export default Notification;
