// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require bootstrap

var loadTasks = function () {
  $.ajax({
    url : '/tasks/'
  }).done(function( data ) {
    $('#tasks').html(data);
  });
};

$(document).ready(function () {
  loadTasks();
});

$(document).ready(function() {
  $("form.new_task").bind("ajax:success", function(event, xhr, settings) {
    loadTasks();
    $("form.new_task")[0].reset();
  });
});

var archiveTask = function (_id) {
  $.ajax({
    url : '/tasks/archive/' + _id,
    method : 'post'
  }).done(function (data) {
    loadTasks();
    addEventListeners();
    console.log(data);
  });
};

var addEventListeners = function () {
  $('.archive').on('click',function(e){
    archiveTask($(this).data('id'));
  });
};