module.exports = [
  {
    key: 'pages',
    name: 'HR Tools',
    icon: 'account_box',
    child: [
      {
        key: 'skills',
        name: 'Skills Search',
        title: true,
      },
      {
        key: 'cv_status',
        name: 'CV List',
        icon: 'account_box',
        link: '/app/CV-list'
      },
      {
        key: 'people_search',
        name: 'Resource Search',
        icon: 'account_box',
        link: '/app/resource-search'
      
      }
    ]
  },
  {
    key: 'admin',
    name: 'Admin',
    icon: 'settings',
    child: [
      {
        key: 'user-admin',
        name: 'Resource Admin',
        title: true,
      },
      {
        key: 'not_found_page',
        name: 'Resources',
        icon: 'account_box',
        link: '/app/resource-list'
      }
    ]
  },
  {
    key: 'reports',
    name: 'Skills Info',
    icon: 'pie_chart_outlined',
    child: [
      {
        key: 'skills-report',
        name: 'Reports',
        title: true,
      },
      {
        key: 'skills_report',
        name: 'Summary Dashboard',
        icon: 'pets',
        link: '/app/skills-dashboard'
      },
      {
        key: 'skills_report',
        name: 'Skills Matrix',
        icon: 'pets',
        link: '/app/skills-matrix'
      }
    ]
  },
];
