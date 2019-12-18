class NewsObserver {
  constructor() {
    this.message = "";
    this.actions = [];
  }

  setNews(text) {
    this.message = text;
    this.notifyAll();
  }

  notifyAll() {
    this.actions.forEach(el => el.inform(this.message));
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions = this.actions.filter(el => !(el !== observer));
  }
}

class ObserversFactory {
  constructor(userName) {
    this.userName = userName;
    this.messageTemplate = "get new Message:";
  }

  inform(message) {
    console.log(`${this.userName} ${this.messageTemplate} ${message}`);
  }
}

const jack = new ObserversFactory("Jack");
const nick = new ObserversFactory("Nick");

const newsTracker = new NewsObserver();

newsTracker.register(jack);
newsTracker.register(nick);

newsTracker.setNews("I have add new Users");

newsTracker.unregister(jack);

newsTracker.setNews(`I have remove one user: ${jack.userName}`);
