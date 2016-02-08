'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.blogs = [{
      id: 5,
      title: "Your latest blog",
      description: "This is your latest blog which you wrote just a while back",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.",
      author: {
        name: "Ravi"
      },
      timestamp: '20140313T00:00:00'
    },{
      id: 4,
      title: "Your 2nd latest blog",
      description: "This is your latest blog which you wrote just a while back",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.",
      author: {
        name: "Ravi 1"
      },
      timestamp: '20140313T00:00:00'
    },{
      id: 3,
      title: "Your 3rd latest blog",
      description: "This is your latest blog which you wrote just a while back",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.",
      author: {
        name: "Ravi 2"
      },
      timestamp: '20140313T00:00:00'
    },{
      id: 2,
      title: "Your 4th latest blog",
      description: "This is your latest blog which you wrote just a while back",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.",
      author: {
        name: "Ravi"
      },
      timestamp: '20140313T00:00:00'
    },{
      id: 1,
      title: "Your first blog",
      description: "This is your latest blog which you wrote just a while back",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.",
      author: {
        name: "Ravi 4"
      },
      timestamp: '20140313T00:00:00'
    }];

    this.tags = [{
      id: 1,
      name: "Java"
    },{
      id: 2,
      name: "Java2"
    },{
      id: 3,
      name: "Java3"
    },{
      id: 4,
      name: "Java4"
    },{
      id: 5,
      name: "Java5"
    }]
  });
