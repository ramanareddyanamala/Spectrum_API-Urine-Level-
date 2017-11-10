var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var routes = require('./routes/index');
var Express = require('express');
var multer = require('multer');
//var bodyParser = require('body-parser');

var Verify = require('./routes/verify');
var Add=require('./routes/Reg');
var Login = require('./routes/Login');
var Forgot = require('./routes/forgot');
var New = require('./routes/newpassword');
var Change = require('./routes/changePassword');
var Test = require('./routes/UrineTestResults');
var Fetch = require('./routes/FetchUrineTestResults');
var Personalinfo=require('./routes/Personalinfo');
var Spectrometer = require('./routes/SpectrometerDevice');
var Personfetch = require('./routes/PersonalInformationRouter');
var Device = require('./routes/DeviceInfoFetch');
var Relationship = require('./routes/Relationships');
var GetRelation = require('./routes/GetRelationship');
var Feedback =require('./routes/Feedback');
var Ramana =require('./routes/Ramana');
var app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'jade');
//app.set('view engine','ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
//app.use(express.bodyParser());
app.use(cookieParser());
app.use('/spectrum/ios/', express.static(__dirname +'/images'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('/uploads/'));
app.use('/resource/image/',express.static(__dirname +'/uploads'));

var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./uploads");
    },
    filename: function (req, file, callback) {
        callback(null,  file.originalname);
    }
});

var upload = multer({ storage: Storage }).array("imgUploader", 3); //Field name and max count

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/api/Upload", function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Something went wrong!");
        }
        return res.end("File uploaded sucessfully!.");
    });
});

//app.use('/resources',express.static(__dirname + '/images'));
//So now, you can use http://localhost:5000/resources/myImage.jpg to serve all the images instead of http://localhost:5000/images/myImage.jpg. */
//app.use('/', routes);
//app.use('/index',routes);

app.use('/spectrum/verify', Verify);
app.use('/spectrum/register',Add);
app.use('/spectrum/login',Login);
app.use('/spectrum/forgot',Forgot);
app.use('/spectrum/newpassword',New);
app.use('/spectrum/changepassword',Change);
app.use('/spectrum/urinetest',Test);
app.use('/spectrum/fetchurine',Fetch);
app.use('/spectrum/personalinfo',Personalinfo);
app.use('/spectrum/deviceinfo',Spectrometer);
app.use('/spectrum/active',Personfetch);
app.use('/spectrum/device',Device);
app.use('/spectrum/relationship',Relationship);
app.use('/spectrum/getrelation',GetRelation);
app.use('/spectrum/feedback',Feedback);
app.use('/image/upload', Ramana);
//app.use('/spectrum/deviceinfo',Spectrometer);
//app.use('/student',Student);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
