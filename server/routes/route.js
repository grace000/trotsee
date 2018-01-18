'use strict';
const path = require('path');

module.exports = function(app) {

  var users = require('../controller/user_controller');
  var videos = require('../controller/video_controller');

  app.route('/api/users')
    .get(users.list_all_users)
    .post(users.create_user);

  app.route('/user/:userId')
    .get(users.view_user)
    .put(users.update_user)
    .delete(users.delete_user);

  // Video Routes
  app.route('/videos')
    .get(videos.list_all_videos)
    .post(videos.create_video);

  app.route('/video/:videoId')
    .get(videos.view_video)
    .put(videos.update_video)
    .delete(videos.delete_video);

}

  



