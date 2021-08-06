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
        key: 'cv_search',
        name: 'CV Search',
        icon: 'account_box',
        link: '/app'
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
        name: 'Add New Resource',
        icon: 'pets',
        link: '/app/add-resource'
      },
      {
        key: 'not_found_page',
        name: 'Resources',
        icon: 'pets',
        link: '/app/resource-list'
      }
    ]
  },
  {
    key: 'reports',
    name: 'Reports',
    icon: 'pie_chart_outlined',
    child: [
      {
        key: 'skills-report',
        name: 'Reports',
        title: true,
      },
      {
        key: 'skills_report',
        name: 'Skills Matrix Report',
        icon: 'pets',
        link: '/app/matrix'
      }
    ]
  },
];
