import React from 'react';
import Tab from './Tab';

import PropTypes from 'prop-types';

const Tabs = ({tabs, selectedTabHandler, selectedTab}) => {  // needed to replace props to fix undefined errors
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {tabs.map((tab, i) => 
              <Tab tab={tab} selectedTabHandler={selectedTabHandler} selectedTab={selectedTab} key={i}/>
            )}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.prototype = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectedTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};

export default Tabs;
