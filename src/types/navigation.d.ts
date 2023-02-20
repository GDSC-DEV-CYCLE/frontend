export type PostKindTypes = '칼럼' | '후기' | 'Q&A' | '';

export interface UseTopNavigationTypes {
  postKind: PostKindTypes;
  changePostKind: (navigtion: PostKindTypes) => void;
}
