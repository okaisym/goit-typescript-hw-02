/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Main {
  title: string;
}

class Component<T>{
  constructor (public props: T) {
  }
}

class Page extends Component<Main> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};