import React from 'react';
import { AboutMe } from '../../widgets/AboutMe';
import {
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
} from '@material-tailwind/react';
import { CustomAccordeon } from '../../widgets/CustomAccordeon';
import { AboutMeDetails } from '../../widgets/AboutMeDetails';
import { Contacts } from '../../widgets/Contacts';

export function AboutMePage() {
  const data = [
    {
      label: 'Коротко',
      child: <AboutMe />,
    },
    {
      label: 'Чуть подробнее',
      child: <AboutMeDetails />,
    },
    {
      label: 'Часто задаваемые вопросы',
      child: <CustomAccordeon />,
    },
    {
      label: 'Контакты',
      child: <Contacts />,
    },
  ];

  return (
    <Tabs value={0}>
      <TabsHeader
        className='bg-gray-100'
        indicatorProps={{
          className: 'bg-green-200',
        }}
      >
        {data.map(({ label }, index) => (
          <Tab key={index} value={index}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ child }, index) => (
          <TabPanel key={index} value={index}>
            {child}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
