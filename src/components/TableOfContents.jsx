// components/TableOfContents.jsx
const TableOfContents = ({ items }) => {
    return (
     <div className="bg-emphasis p-3 mb-3 rounded" 
     style={{ background: '#e8e8e8' }}>
  <h3 className="mb-3">Table Of Content</h3>
  <ol className="custom-list-group ">
    {items.map(({ id, label }, index) => (
      <li key={index} className="list-group-item bg-transparent border-0 p-1">
        <a href={`#${id}`} className="link-offset-1 text-secondary-emphasis fs-6 text text-decoration-none">
          {label}
        </a>
      </li>
    ))}
  </ol>
</div>

    );
  };
  
  export default TableOfContents;
  