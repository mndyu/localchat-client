export interface Message {
  id?: number;
  From?: string;
  To?: string;
  gid?: number;
  text?: string;
  flag?: boolean;
  send_date?: string;
  open?: string;
}
