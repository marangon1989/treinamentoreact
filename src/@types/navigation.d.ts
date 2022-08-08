export type SpeakerNavigationProps = {
  id?: string;
}

export type OrderNavigationProps = {
  id: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      speaker: SpeakerNavigationProps;
      speaker_details: SpeakerNavigationProps;
      order: OrderNavigationProps;
      orders: undefined;
    }
  }
}