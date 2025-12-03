import {
  mount as mountImpl,
  unmount as unmountImpl,
  UplinqChatWidget as widgetImpl,
} from './index.js';

export type MountTarget = string | Element;

export interface MountOptions {
  webhookUrl?: string;
}

export function mount(target: MountTarget, options?: MountOptions): void {
  mountImpl(target as any, options as any);
}

export function unmount(target: MountTarget): void {
  unmountImpl(target as any);
}

export const UplinqChatWidget = widgetImpl as {
  mount: typeof mount;
  unmount: typeof unmount;
};

export default UplinqChatWidget;
