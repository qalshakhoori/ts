interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => {};

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(updateValues: UserProps): void {
    Object.assign(this.data, updateValues);
  }

  on(eventName: string, callback: Callback) {}
}
