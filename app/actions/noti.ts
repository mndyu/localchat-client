
export default function makenotify(title = "local chat", body = "notify!") {
    let noti = new Notification(title,{
        body: body
      })
};

