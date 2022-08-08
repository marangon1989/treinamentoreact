import React from 'react';

import { 
  Container,
  Title,
  Notification,
  Quantity,
} from './styles';

type Props = {
  title: string;
  color: string;
  notification?: string | undefined;
}

export function BottomMenu({ title, color, notification }: Props) {
  const noNotification = notification === '0';

  return (
    <Container>
      <Title color={color}>{ title }</Title>
      {
        notification && (
          <Notification noNotification={noNotification}>
            <Quantity noNotification={noNotification}>
              {notification}
            </Quantity>
          </Notification>
        )
      }
    </Container>
  );
}