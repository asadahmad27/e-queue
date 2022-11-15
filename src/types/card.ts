type AvatarDetails = {
  id?: string;
  image?: string;
  title: string;
  text: string;
  profile_pic?: string;
  name?: string;
  last_name?: string;
};
// type User={
//   profile_pic:string
//   name:string
//   last_name:string

// }

export type CardProps = {
  image?: string;
  heading?: string;
  content: string;
  isFramed?: boolean;
  hasAutoHeight?: boolean;
  meta?: JSX.Element;
  isFullWidth?: boolean;
  isVideo?: boolean;
  buttonText?: string;
  setOpen?: (open: boolean) => void;
  setVideo?: (url: string) => void;
  setFeedID?: (id: string) => void;
  setDeleteModel?: (key: boolean) => void;
  setAddFeedModel?: (key: boolean) => void;
  videoUrl?: string;
  user?: AvatarDetails;
  starCount?: number;
  isAdmin?: boolean;
  onEditClick?: (param: any) => void;
  onDeleteClick?: (param: any) => void;
  index?: number;
  path?: string;
  hasEmoji?: boolean;
  user_id?: string;
  createdAt?: string;
  message?: string;
  name?: string;
  description?: string;
  thumbnail?: string;
  link?: string;
  id?: string;
  product_id?: string;
  review_id?: string;
  isAction?: boolean;
  reacts?: any[];
};
