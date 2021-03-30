class Message {
    public subject: string;
    public body: string;
    public read: boolean;
    constructor(subject: string, body: string) {
        this.subject = subject;
        this.body = body;
        this.read = false;
    }
    MarkAsRead() {
        this.read = true;
    }
}

class Messages {
    public messages: Array<Message>;
    constructor() {
        this.messages = new Array<Message>();
    }
    AddToList(msg: Message) {
        this.messages.push(msg);
    }
    GetNumberOfMessages() {
        return this.messages.length;
    }
}

const form = document.getElementById("form") as HTMLFormElement;
const button: HTMLElement = document.getElementById("button") as HTMLButtonElement;
const msgs = new Messages();


form.addEventListener('submit', function (event) {
    const formData = new FormData(form);
    console.log('Form Submitted');
    console.log(`first name: ${formData.get('subject')}\nlastName: ${formData.get('body')}`);
    var msgSubject = formData.get('subject') as string;
    var msgBody = formData.get('body') as string;
    var newMsg = new Message(msgSubject, msgBody);
    msgs.AddToList(newMsg);
    (document.getElementById('form') as HTMLFormElement).style.display = 'none';
    showList();
    (document.getElementById('allMessages') as HTMLFormElement).style.display = "block";
    event.preventDefault();
    form.reset();
    (document.getElementById('form') as HTMLFormElement).reset()
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
        divContainer.addEventListener("click", function () {
            // alert('click');
            divContainer.style.backgroundColor = 'white';
            msgs.messages[msgs.messages.length - 1].read = true;
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
    for (let i in msgs.messages) {
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
    const paragraphElement1 = document.getElementById("not1") as HTMLParagraphElement;
    const paragraphElement2 = document.getElementById("not2") as HTMLParagraphElement;
    
    paragraphElement1.innerHTML = "Messages ("+result+") new";
    paragraphElement2.innerHTML= "You have " + result + " new messages";
}

