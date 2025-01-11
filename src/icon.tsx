import React from "react";

const mainIconStyle = {
  height: "20px",
  padding: "0 3px 0 0",
  backGroundColor: "#FFF",
  verticalAlign: "middle",
};

export const LinkIcon: React.FC<{}> = () => {
  return (
    <img src="../img/link.png" style={mainIconStyle} />
  );
}
export const CloseFolderIcon: React.FC<{}> = () => {
  return (
    <img src="../img/close_folder.png" style={mainIconStyle} />
  );
}
export const OpenFolderIcon: React.FC<{}> = () => {
  return (
    <img src="../img/open_folder.png" style={mainIconStyle} />
  );
}