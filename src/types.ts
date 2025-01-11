export type Bookmarks = Item<{ type: 'link' } | { type: 'folder' }>[];
type Item<T> = T extends { type: 'link' } ? Link : Folder;
export type Link = {
  type: "link";
  label: string;
  link: string;
  memo: string;
};
export type Folder = {
  type: "folder";
  label: string;
  member: (Folder | Link)[]
};

export type Settings = {
  settings: {
    json: string;
  }
}