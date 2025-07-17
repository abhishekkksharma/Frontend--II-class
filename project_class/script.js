let vedio = {
  thumbnailUrl: "thumbnail.jpg",
  title: "Learn JavaScript 101 - Tutorial for Everyone",
  views: 6780,
  uploadedOn: "1 day ago",

  channel:{
    name: "JavaScript 101",
    url: "image.jpg"
  }
};

function loadData() {
    
    const thumbnail = document.getElementById("thubnmail-img");
    thumbnail.src = vedio.thumbnailUrl;

    const channel_logo = document.getElementById("channel-logo-img");
    channel_logo.src = vedio.channel.url;

    const channel_name = document.getElementById("channel-name-p");
    channel_name.textContent = vedio.channel.name;

    const videoTitle = document.getElementById("title-p");
    videoTitle.textContent = vedio.title;

    const views = document.getElementById("views-p");
    views.textContent = vedio.views + " views";

    const uploadedOn = document.getElementById("uploaded-on-p");
    uploadedOn.textContent = "• " + vedio.uploadedOn;
}

loadData();

let post = {
  postUrl: "thumbnail.jpg",
  liks: 567,
  comments: 37,
  profile: {
    imageUrl: "image.jpg",
    name: "Abhish3kkkkk",
  },
  hasLimitedComments: true,
};

function loadPost() {
  document.getElementById("profile-img").src = post.profile.imageUrl;
  document.getElementById("profile-name").textContent = post.profile.name;
  document.getElementById("post-img").src = post.postUrl;

  document.getElementById("likes-text").textContent = post.liks.toLocaleString() + " likes";
  document.getElementById("comments-text").textContent = post.comments + " comments";

  const limitedComments = document.getElementById("limited-comments-text");
  limitedComments.textContent = post.hasLimitedComments ? "Comments on this post are limited." : "";
}

loadPost();
