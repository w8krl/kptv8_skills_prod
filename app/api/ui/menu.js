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
      
      },
      {
        key: 'aaaa',
        name: 'Profile Search',
        icon: 'account_box',
        link: '/app/profile'
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
        icon: 'account_box',
        link: '/app/add-resource'
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
