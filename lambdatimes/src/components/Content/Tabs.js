import React from 'react';
import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {tabs.map((tabs, i) => 
              <Tab tab={tab} selectTabHandler={selectTabHandler} selectedTab={selectedTab} key={i}/>
            )}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.prototype = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};

export default Tabs;
