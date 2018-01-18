var mongoose = require('mongoose'),

User = mongoose.model('users');


// User ---------------------------------------------------------

exports.list_all_users = function(req, res) {
   User.find({}, function(err, doc){
    // .sort([
    //   ['date', 'descending']
    //     ]).limit(5)

      if (err) {
        console.log(err);
      }
      else {
        
        res.json(doc);
        console.log("got the name");
        console.log(doc);
      }
    console.log("You visited the saved route!");
  });
}

exports.create_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err) {
      res.send(err);
      res.send('User successfully added!');
    }
    res.json(user);
  });
};


exports.view_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err) {
      res.send(err);
    }

    res.json(user);
  });
};


exports.update_user = function(req, res) {
  console.log('user stuffs');
  User.findOneAndUpdate(
    {_id: req.params.taskId}, 
    req.body, 
    {new: true}, 
    function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    }
  );
};


exports.delete_user = function(req, res) {
  User.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};