import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import "./LinkTree.css"
export default function LinkTree({ links, page, setPage }) {
  return (
    <div className="link-tree">
      {links.map((item, index) => (
        <TreeItem
          key={item.id || item.label + index}
          item={item}
          page={page}
          setPage={setPage}
        />
      ))}
    </div>
  );
}

function TreeItem({ item, page, setPage }) {
  const [open, setOpen] = useState(false);

  // FOLDER
  if (item.children) {
    return (
      <div className="link-folder">
        <button
          className="folder-label"
          onClick={() => setOpen(!open)}
        >
          {open ? "📂" : "📁"} {item.label}
        </button>

        {open && (
          <div className="folder-children">
            {item.children.map((child, index) => (
              <TreeItem
                key={child.id || child.label + index}
                item={child}
                page={page}
                setPage={setPage}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // LINK
  return (
    <button
      className={`link-tree-btn ${page === item.id ? "active" : ""}`}
      onClick={() => setPage(item.id)}>
       <span className={`link-tree-file ${page === item.id ? "active" : ""}`}><IoIosArrowForward /></span> {item.label}
    </button>
  );
}
