import { MouseEvent, useState } from 'react';
import { Bookmarks, Link, Folder } from 'types';
import { openTab } from './utils';
import { LinkIcon, CloseFolderIcon, OpenFolderIcon } from './icon';

const fontStyle = { fontWeight: 'bold', fontSize: '0.9rem' };
const labelStyle = { color: '#616161', ...fontStyle };

const Folder: React.FC<{ folder: Folder }> = (props) => {
  // 開閉状態を管理するステータスの定義
  let [isOpen, setIsOpen] = useState(true);
  const handler = (event: MouseEvent) => {
    // alt + クリックの場合はフォルダ直下のリンクをすべて開く 
    if (event.altKey) {
      // @ts-ignore
      openTab(props.folder.member.filter((prop) => prop.type === 'link').map((link) => link.link))
      return;
    }
    setIsOpen(!isOpen);
  }
  // フォルダー直下の要素を描画するためのコンポーネント群を作成
  const children = props.folder.member.length === 0
    ? (<span style={{ height: '20px', ...labelStyle }}>Empty</span>)
    : props.folder.member
      .toSorted((a) => a.type === 'folder' ? 1 : -1)
      .map((p) => p.type === 'folder' ? <Folder folder={p}></Folder> : <Link link={p}></Link>);
  // 描画するコンポーネントの作成
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ height: '20px', ...labelStyle }} onClick={handler}>
        {isOpen ? <OpenFolderIcon /> : <CloseFolderIcon />}
        <span style={{ verticalAlign: 'middle' }}>{isOpen ? '▼' : '▶'}{props.folder.label}</span>
      </div>
      {isOpen && (
        <div style={{ padding: '0 0 0 10px' }}>
          {children}
        </div>
      )}
    </div>
  );
}

const Link: React.FC<{ link: Link }> = (props) => {
  const handler = () => {
    openTab([props.link.link])
  }
  return (
    <div style={{height: '20px'}}>
      <LinkIcon />
      <a href={props.link.link} title={props.link.memo} onClick={handler} style={{ verticalAlign: 'middle', ...fontStyle }}>{props.link.label}</a>
    </div>
  );
}

const Root: React.FC<{ bookmarks: Bookmarks }> = (props) => {
  const renders = props.bookmarks
    .toSorted((a) => a.type === 'folder' ? 1 : -1)
    .map((p) => p.type === 'folder' ? <Folder folder={p}></Folder> : <Link link={p}></Link>);
  return renders;
}
export default Root;