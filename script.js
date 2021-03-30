var Message = /** @class */ (function () {
    function Message(subject, body) {
        this.subject = subject;
        this.body = body;
        this.read = false;
    }
    Message.prototype.MarkAsRead = function () {
        this.read = true;
    };
    return Message;
}());
var Messages = /** @class */ (function () {
    function Messages() {
        this.messages = new Array();
    }
    Messages.prototype.AddToList = function (msg) {
        this.messages.push(msg);
    };
    Messages.prototype.GetNumberOfMessages = function () {
        return this.messages.length;
    };
    return Messages;
}());
var form = document.getElementById("form");
var button = document.getElementById("button");
var msgs = new Messages();
form.addEventListener('submit', function (event) {
    var formData = new FormData(form);
    console.log('Form Submitted');
    console.log("first name: " + formData.get('subject') + "\nlastName: " + formData.get('body'));
    var msgSubject = formData.get('subject');
    var msgBody = formData.get('body');
    var newMsg = new Message(msgSubject, msgBody);
    msgs.AddToList(newMsg);
    document.getElementById('form').style.display = 'none';
    showList();
    document.getElementById('allMessages').style.display = "block";
    event.preventDefault();
    countUnread();
    form.reset();
    document.getElementById('form').reset();
});
function showList() {
    if (document.getElementById('allMessages').style.display != 'block') {
        var subjectNode = document.createElement("h2");
        subjectNode.style.color = "red";
        var subjectText = document.createTextNode(msgs.messages[msgs.messages.length - 1].subject);
        subjectNode.appendChild(subjectText);
        var bodyNode = document.createElement("p");
        var bodyText = document.createTextNode(msgs.messages[msgs.messages.length - 1].body);
        bodyNode.appendChild(bodyText);
        var divContainer = document.createElement('div');
        divContainer.appendChild(subjectNode);
        divContainer.appendChild(bodyText);
        var lineNode = document.createElement('hr');
        divContainer.appendChild(lineNode);
        var indexOfEvent = msgs.messages.length - 1;
        divContainer.addEventListener("click", function () {
            divContainer.style.backgroundColor = 'white';
            msgs.messages[indexOfEvent].read = true;
            countUnread();
        });
        document.getElementById('allMessages').appendChild(divContainer);
        if (msgs.messages[msgs.messages.length - 1].read == false) {
            divContainer.style.backgroundColor = 'DodgerBlue';
        }
    }
}
function showMessages() {
    document.getElementById('allMessages').style.display = 'block';
    document.getElementById('form').style.display = 'none';
    showList();
}
function addNewMessage() {
    document.getElementById('allMessages').style.display = 'none';
    document.getElementById('form').style.display = 'block';
}
function countUnread() {
    var count = 0;
    var result = "";
    for (var i in msgs.messages) {
        if (msgs.messages[i].read == false) {
            count++;
            console.log("count: " + count);
        }
    }
    if (count > 5)
        result = '5+';
    else
        result = count.toString();
    // console.log('the number of unread messages is: '+result);
    // console.log(document.getElementById('not1').innerHTML);
    var paragraphElement1 = document.getElementById("not1");
    var paragraphElement2 = document.getElementById("not2");
    paragraphElement1.innerHTML = "Messages (" + result + ") new";
    paragraphElement2.innerHTML = "You have " + result + " new messages";
}
