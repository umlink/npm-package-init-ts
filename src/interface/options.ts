interface IOptions {
  name: String;
  age: number;
  sex?: String;
  readonly height?: String;
  [propName: string]: any;
}

export default IOptions
