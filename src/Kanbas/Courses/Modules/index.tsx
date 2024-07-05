

export default function Modules() {
  return (
    <div>
      <div style={{ marginBottom: '5px', display: 'flex', gap: '5px' }}>
        <button style={{ width: '90px', textAlign: 'center' }}>Collapse All</button>
        <button style={{ width: '110px', textAlign: 'center' }}>View Progress</button>
        <div style={{ width: '90px', textAlign: 'center' }}>
          <select style={{ width: '100%' }}>
            <option>Publish All</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <button style={{ width: '75px', textAlign: 'center' }}>+ Module</button>
      </div>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
);}
