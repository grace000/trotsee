var mongoose = require('mongoose'),

Video = mongoose.model('Video');

// Video -------------------------------------------------------

exports.list_all_videos = function(req, res) {
  Video.find({}, function(err, video) {
    if(err) {
      res.send(err);
    }
    res.json(video);
  });
};

exports.create_video = function(req, res) {
  var new_video = new Video(req.body);
  new_video.save(function(err, video) {
    if (err) {
      res.send(err);
    }

    res.json(video);
  });
};


exports.view_video = function(req, res) {
  Video.findById(req.params.videoId, function(err, video) {
    if (err) {
      res.send(err);
    }

    res.json(video);
  });
};


exports.update_video = function(req, res) {
  console.log('video things');
  Video.findOneAndUpdate(
    {_id: req.params.taskId}, 
    req.body, 
    {new: true}, 
    function(err, video) {
      if (err)
        res.send(err);
      res.json(video);
    }
  );
};


exports.delete_video = function(req, res) {
  Video.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Video successfully deleted' });
  });
};



