export default {
  pages: [
    'pages/index/index',
    // 'pages/class/class',
    // 'pages/mine/mine',
    // 'pages/student/edit',
    // 'pages/class/edit'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#58bc58',
    navigationBarTitleText: 'h5班级管理系统',
    navigationBarTextStyle: 'white'
  },
  "subpackages": [
    {
      "root": "manage",
      "name":'manage',
      "pages": [
        "student/edit",
        "student/student",
        "class/class",
        "class/edit"
      ]
    },
    {
      "root": "pages/mine",
      "name":'mine',
      "pages": [
        "mine",
      ]
    }
  ]
}
