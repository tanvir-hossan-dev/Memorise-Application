import React from "react";

const Tag = ({ tags, id }) => {
  return tags.map((tag) => <div key={id}>{tag}</div>);
};

export default Tag;
