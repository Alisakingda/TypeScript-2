# TypeScript

1. `npm init -y`初始化项目，生成 package.json 文件
2. `tsc --init`创建 tsconfig.json 文件
3. `npm install @types/node --dev-save`解决模块的声明文件问题

### 变量类型

- Undefined :
- Number:数值类型;
- string : 字符串类型;
- Boolean: 布尔类型；
- enum：枚举类型；
- any : 任意类型，一个牛 X 的类型；
- void：空类型；
- Array : 数组类型;
- Tuple : 元祖类型；
- Null ：空类型

```ts
enum REN {
  nan = '男',
  nv = '女',
  yao = '妖'
}
console.log(REN.yao)
```

### 函数的定义方式

1. 函数声明
2. 函数表达式
3. 箭头函数

### 数组的定义方式

1. `let arr:string[]`
2. `let arr:Array<string>`

### 引用类型

1. 数组

2. 字符串

- 字面量
- new String()

3. 日期对象（Date）

- new Date

4. 正则表达式（RegExp）

- 字面量
- new RegExp()
  > 方法
  > test(string) exec(string);

### 面向对象编程

```ts
class Student {
  public readonly face: string = 'weixiao'
  public sex: string
  protected name: string
  private age: number

  public constructor(sex: string, name: string, age: number) {
    this.sex = sex
    this.name = name
    this.age = age
  }

  public say() {
    console.log('你好')
  }
  protected sayLove() {
    console.log('爱你')
  }
}

// 继承
class SmallStudent extends Student {
  public say() {
    super.say()
    console.log('么么哒')
  }
}

let xiao: SmallStudent = new SmallStudent('男', 'man', 18)

xiao.say()
```

### 接口 interface

```ts
interface Man {
  sex: string
  age: number
}

let wang: Man = { sex: 'nan', age: 18 }

// 规范函数类型的接口

interface search {
  (name: string, age: number): string
}

let woman: search

woman = function(name: string, age: number): string {
  let result: string = name + age
  return result
}

woman('yang', 78)

console.log(woman('yang', 78))
```

### 命名空间

`namespace`
