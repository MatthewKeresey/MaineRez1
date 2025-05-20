'use client';

import Headline from '../common/Headline';
import Collapse from '../common/Collapse';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { FAQsProps, Item, Tab } from '~/shared/types';
import { useState } from 'react';
import useWindowSize from '~/hooks/useWindowSize';
import Dropdown from '../common/Dropdown';
import WidgetWrapper from '../common/WidgetWrapper';

const FAQs4 = ({ header, tabs = [], id = '', hasBackground = false }: FAQsProps) => {
  const { width } = useWindowSize();
  const [activeTab, setActiveTab] = useState(0);

  const activeTabSelectedHandler = (index: number) => {
    setActiveTab(index);
  };

  // Early return if no tabs or invalid tabs
  if (!Array.isArray(tabs) || tabs.length === 0) {
    return null;
  }

  // Normalize tab structure
  const normalizedTabs = tabs.map(tab => {
    // Handle both content structures
    if (typeof tab.link === 'string') {
      return {
        link: { label: tab.text || tab.link },
        items: tab.items || []
      };
    }
    return tab;
  });

  // Validate each tab has the required structure
  const validTabs = normalizedTabs.filter((tab): tab is Tab => {
    return (
      tab &&
      typeof tab === 'object' &&
      'link' in tab &&
      'items' in tab &&
      Array.isArray(tab.items)
    );
  });

  if (validTabs.length === 0) {
    return null;
  }

  return (
    <WidgetWrapper id={id} hasBackground={hasBackground} containerClass="">
      {header && <Headline header={header} titleClass="text-3xl sm:text-4xl" />}
      <div className="flex items-stretch justify-center">
        <div className="grid w-full md:grid-cols-3 md:items-center md:gap-4">
          {width > 767 ? (
            <div className="block h-full sm:flex sm:items-center sm:justify-between md:mx-4 md:mt-10 md:block md:px-4">
              <div className="flex h-fit w-full justify-center sm:w-auto sm:justify-start">
                <ul>
                  {validTabs.map((tab: Tab, index: number) => {
                    const onSelectTab = () => {
                      setActiveTab(index);
                    };

                    return (
                      <li
                        key={`tab-${index}`}
                        className={`mb-5 flex cursor-pointer items-center ${
                          activeTab === index ? 'text-primary-600 dark:text-primary-200' : ''
                        }`}
                        tabIndex={0}
                        onClick={onSelectTab}
                      >
                        <span className="w-full text-xl hover:underline">{tab.link?.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            <Dropdown options={validTabs} activeTab={activeTab} onActiveTabSelected={activeTabSelectedHandler} />
          )}
          <div className="mt-4 h-fit md:col-span-2 md:mx-4 md:mt-0 md:px-4">
            {validTabs.map((tab: Tab, index: number) => (
              <div key={`tab-${index}`} className="">
                {activeTab === index && tab.items && tab.items.length > 0 && (
                  <Collapse
                    items={tab.items}
                    classCollapseItem="border-b border-solid border-slate-300 dark:border-slate-500 py-5"
                    iconUp={<IconMinus className="h-6 w-6 text-primary-600 dark:text-slate-200" />}
                    iconDown={<IconPlus className="h-6 w-6 text-primary-600 dark:text-slate-200" />}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default FAQs4;
